// card_parser.js
const fs = require('fs')
const path = require('path')

class CardParser {
  parseCharacterName(fullName) {
    const match = fullName.match(/(.*?)\s*\((.*?)\)/)
    if (match) {
      return {
        ranger: match[1].trim(),
        name: match[2].trim(),
      }
    }
    return {
      ranger: fullName,
      name: '',
    }
  }

  parseCharacterDescription(description) {
    const [title, ...rest] = description.split('\r\n----------\r\n')
    return {
      title: title?.trim(),
      ability: rest.join('')?.trim(),
    }
  }

  parseCombatCardDescription(description) {
    const [stats, effect] = description.split('\r\n----------\r\n')

    // Parse stats section
    const statsParts = stats.split(' | ').map((s) => s.trim())
    const energy = parseInt(statsParts[0]) || 0
    const type = statsParts[1]?.split(' - ')
    const shields = parseInt(statsParts[statsParts.length - 1]) || 0

    let attack = null
    if (type && type[1]) {
      // Handle different attack formats
      if (type[1].includes('Dice')) {
        attack = {
          value: parseInt(type[1]) || 0,
        }
      } else if (type[1].includes('Damage')) {
        attack = {
          value: parseInt(type[1]) || 0,
          fixed: true,
        }
      } else if (type[1].includes('Special')) {
        attack = {
          value: -1,
        }
      }
    }

    return {
      energy,
      type: type?.[0]?.toLowerCase() || '',
      attack,
      shields,
      effect: effect?.trim().replaceAll('\r', '').split('\n'),
    }
  }

  parseZordDescription(description) {
    const [owner, effect] = description.split('\r\n----------\r\n')
    return {
      owner: owner?.trim(),
      effect: effect?.trim().replaceAll('\r', '').split('\n'),
    }
  }

  cleanObject(obj, type) {
    if (!obj.name || !obj.description) return null

    // Handle character card differently to parse name
    if (type === 'character') {
      const { ranger, name } = this.parseCharacterName(obj.name)
      return {
        name,
        ranger,
        ...this.parseCharacterDescription(obj.description),
      }
    }

    const baseCard = {
      name: obj.name,
    }

    // Parse description based on card type
    switch (type) {
      case 'combat':
        return {
          ...baseCard,
          ...this.parseCombatCardDescription(obj.description),
        }
      case 'zord':
        return {
          ...baseCard,
          ...this.parseZordDescription(obj.description),
        }
      default:
        return baseCard
    }
  }
  formatString(str) {
    console.log(str)
    return str
      .replace(/[^\w\s-]/g, '') // Remove symbols except hyphens
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .toLowerCase() // Convert to lowercase
      .trim() // Remove extra whitespace
  }
  parseData(data) {
    // Skip if no ranger character card
    if (!data.characterCard) {
      return null
    }

    console.log(data.characterCard)
    const id = this.formatString(
      data.characterCard.name === '' ? data.characterCard.ranger : data.characterCard.name
    )
    const result = {
      id,
      characterCard: this.cleanObject(data.characterCard, 'character'),
      zords: data.zords
        ? data.zords.map((card) => this.cleanObject(card, 'zord')).filter(Boolean)
        : [],
      cards: data.cards
        ? data.cards.map((card) => this.cleanObject(card, 'combat')).filter(Boolean)
        : [],
    }

    return result
  }

  processFile(inputPath, outputPath) {
    try {
      console.log(`Reading from: ${inputPath}`)
      const jsonString = fs.readFileSync(inputPath, 'utf8')
      const jsonData = JSON.parse(jsonString)

      // Parse each entry and filter out nulls
      const transformedData = Array.isArray(jsonData)
        ? jsonData.map((entry) => this.parseData(entry)).filter(Boolean)
        : this.parseData(jsonData)

      // Write transformed data to output file
      fs.writeFileSync(outputPath, JSON.stringify(transformedData, null, 2))

      console.log('\nProcessing complete!')
      console.log(`Output saved to: ${outputPath}`)
      if (Array.isArray(transformedData)) {
        console.log(`Entries processed: ${transformedData.length}`)
      }
    } catch (error) {
      console.error('Error processing file:', error)
      if (error.code === 'ENOENT') {
        console.error('File not found. Check the path and try again.')
      }
    }
  }
}

const parser = new CardParser()
const inputPath = path.resolve('./scripts/input.json')
const outputPath = path.resolve('./scripts/output.json')

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`)
  process.exit(1)
}

parser.processFile(inputPath, outputPath)
