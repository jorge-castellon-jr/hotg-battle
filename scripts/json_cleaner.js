// json_cleaner.js
const fs = require('fs')
const path = require('path')

// Properties to keep (using dot notation for nested properties)
const propsToKeep = [
  //
  'Tags',
  'Nickname',
  'Description',
  'ContainedObjects',
  'States',
]

class JsonCleaner {
  constructor(propsToKeep = []) {
    this.propsToKeep = new Set(propsToKeep)
  }

  shouldKeepProperty(key, path) {
    const fullPath = [...path, key].join('.')
    return !isNaN(key) || this.propsToKeep.has(fullPath) || this.propsToKeep.has(key)
  }

  cleanObject(obj, currentPath = []) {
    // Handle arrays
    if (Array.isArray(obj)) {
      const result = []

      for (const item of obj) {
        const cleanedItem = this.cleanObject(item, [...currentPath])

        // If the cleaned item has States, add both the item and its states to the result
        if (cleanedItem.States) {
          // Add the main item without States
          const { States, ...mainItem } = cleanedItem
          result.push(mainItem)

          // Add each state as a separate item
          Object.values(States).forEach((state) => {
            result.push(this.cleanObject(state, [...currentPath]))
          })
        } else {
          result.push(cleanedItem)
        }
      }

      return result
    }

    // Handle non-objects
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    const cleanedObj = {}

    for (const [key, value] of Object.entries(obj)) {
      if (this.shouldKeepProperty(key, currentPath)) {
        cleanedObj[key] = this.cleanObject(value, [...currentPath, key])
      }
    }

    return cleanedObj
  }

  cleanFile(inputPath, outputPath) {
    try {
      console.log(`Reading from: ${inputPath}`)
      const jsonString = fs.readFileSync(inputPath, 'utf8')
      const jsonData = JSON.parse(jsonString)

      // Clean the data
      const cleanedData = this.cleanObject(jsonData.data)

      // Ensure output directory exists
      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      // Write cleaned data to output file
      fs.writeFileSync(outputPath, JSON.stringify(cleanedData, null, 2))

      const originalSize = (jsonString.length / 1024).toFixed(2)
      const cleanedSize = (JSON.stringify(cleanedData).length / 1024).toFixed(2)

      console.log('\nProcessing complete!')
      console.log(`Original size: ${originalSize} KB`)
      console.log(`Cleaned size: ${cleanedSize} KB`)
      console.log(`Reduction: ${((1 - cleanedSize / originalSize) * 100).toFixed(1)}%`)
      console.log(`Output saved to: ${outputPath}`)
    } catch (error) {
      console.error('Error processing file:', error)
      if (error.code === 'ENOENT') {
        console.error('File not found. Check the path and try again.')
      }
    }
  }
}

// Create instance and process file
const cleaner = new JsonCleaner(propsToKeep)
const inputPath = path.resolve('./scripts/input.json')
const outputPath = path.resolve('./scripts/output.json')

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`)
  process.exit(1)
}

cleaner.cleanFile(inputPath, outputPath)
