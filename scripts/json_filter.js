// json_filter.js
const fs = require('fs')
const path = require('path')

class CardTransformer {
  // Process individual card data
  processCard(obj) {
    if (!obj.Nickname && !obj.Description) return null
    return {
      name: obj.Nickname || '',
      description: obj.Description || '',
    }
  }

  // Collect tagged items from a character group
  collectTaggedItems(obj, result = {}) {
    if (obj.Tags) {
      obj.Tags.forEach((tag) => {
        const tagKey = tag.toLowerCase()
        if (!result[tagKey]) {
          result[tagKey] = []
        }

        const cardData = this.processCard(obj)
        if (cardData) {
          result[tagKey].push(cardData)
        }
      })
    }

    // Process contained objects
    if (obj.ContainedObjects && Array.isArray(obj.ContainedObjects)) {
      obj.ContainedObjects.forEach((containedObj) => {
        this.collectTaggedItems(containedObj, result)
      })
    }

    return result
  }

  // Process top-level object and separate character groups
  processCharacterGroups(obj) {
    const characterGroups = []

    // Handle case where top object has ContainedObjects
    if (obj.ContainedObjects && Array.isArray(obj.ContainedObjects)) {
      // Each direct child of ContainedObjects represents a character group
      obj.ContainedObjects.forEach((characterGroup) => {
        if (characterGroup.Nickname) {
          const groupData = this.collectTaggedItems(characterGroup)
          
          // Only add groups that have collected data
          if (Object.keys(groupData).length > 0) {
            // Add character name as metadata
            groupData.characterName = characterGroup.Nickname
            characterGroups.push(groupData)
          }
        }
      })
    }

    return characterGroups
  }

  // Process entire data array
  transformData(dataArray) {
    const allGroups = []
    
    dataArray.forEach((data) => {
      const groups = this.processCharacterGroups(data)
      allGroups.push(...groups)
    })

    return allGroups
  }

  // Main processing function
  processFile(inputPath, outputPath) {
    try {
      console.log(`Reading from: ${inputPath}`)
      const jsonString = fs.readFileSync(inputPath, 'utf8')
      const jsonData = JSON.parse(jsonString)

      const transformedData = this.transformData(jsonData)

      // Ensure output directory exists
      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      // Write transformed data
      fs.writeFileSync(outputPath, JSON.stringify(transformedData, null, 2))

      const originalSize = (jsonString.length / 1024).toFixed(2)
      const transformedSize = (JSON.stringify(transformedData).length / 1024).toFixed(2)

      console.log('\nProcessing complete!')
      console.log(`Original size: ${originalSize} KB`)
      console.log(`Transformed size: ${transformedSize} KB`)
      console.log(`Reduction: ${((1 - transformedSize / originalSize) * 100).toFixed(1)}%`)
      console.log(`Output saved to: ${outputPath}`)
      console.log(`Character groups processed: ${transformedData.length}`)
    } catch (error) {
      console.error('Error processing file:', error)
      if (error.code === 'ENOENT') {
        console.error('File not found. Check the path and try again.')
      }
    }
  }
}

const transformer = new CardTransformer()
const inputPath = path.resolve('./scripts/output.json')
const outputPath = path.resolve('./scripts/filtered.json')

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`)
  process.exit(1)
}

transformer.processFile(inputPath, outputPath)
