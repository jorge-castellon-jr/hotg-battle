// card_parser.js
const fs = require('fs')
const path = require('path')

class CardParser {
  formatString(str) {
    return str
      .replace(/[^\w\s-]/g, '') // Remove symbols except hyphens
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .toLowerCase() // Convert to lowercase
      .trim() // Remove extra whitespace
  }

  parseCharacterName(fullName) {
    const match = fullName.match(/(.*?)\s*\((.*?)\)/)
    if (match) {
      return {
        ranger: match[1],
        name: match[2],
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
      title: title?.trim() || '',
      ability: rest,
    }
  }

  parseCombatCardDescription(description) {
    const [stats, effect] = description.split('\r\n----------\r\n')

    // Parse stats section
    const statsParts = stats.split(' | ').map((s) => s.trim())
    const energy = parseInt(statsParts[0]) || 0
    const type = statsParts[1]?.split(' - ')
    const shields = parseInt(statsParts[statsParts.length - 1]) || 0

    // Enhanced attack parsing
    const attack = []
    if (type && type[1]) {
      if (type[1].toLowerCase().includes('special')) {
        attack.push({
          value: -1,
        })
      } else {
        const damages = type[1].split(' ')

        for (const [index, damage] of damages.entries()) {
          if (!isNaN(damage)) continue

          const attackValue = {
            value: parseInt(damages[index - 1]) || 0,
          }
          if (damage.includes('Damage')) {
            attackValue.fixed = true
          }

          attack.push(attackValue)
        }
      }
    }

    return {
      energy,
      type: type?.[0]?.toLowerCase() || '',
      attack: attack.length ? attack : null,
      shields,
      effect: effect?.trim().split('\n'),
    }
  }

  parseZordDescription(description) {
    const [owner, effect] = description.split('\r\n----------\r\n')
    return {
      owner: owner,
      effect: effect?.trim().split('\n'),
    }
  }

  cleanObject(obj, type, owner) {
    if (!obj.name && !obj.description) return null

    const baseCard = {
      name: obj.name,
    }

    // Parse description based on card type
    switch (type) {
      case 'character':
        const { ranger, name } = this.parseCharacterName(obj.name)
        return {
          name,
          ranger,
          owner,
          ...this.parseCharacterDescription(obj.description),
        }
      case 'combat':
        return {
          ...baseCard,
          ...this.parseCombatCardDescription(obj.description),
          owner,
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

  parseData(data) {
    // Skip if no character card
    if (!data.rangercharactercard) {
      return null
    }

    const id = this.formatString(data.rangercharactercard[0].name)
    const result = {
      id,
      characterCard: this.cleanObject(data.rangercharactercard[0], 'character'),
      zords: data.zordcard
        ? data.zordcard.map((card) => this.cleanObject(card, 'zord')).filter(Boolean)
        : [],
      cards: data.rangercombatcard
        ? data.rangercombatcard.map((card) => this.cleanObject(card, 'combat', id)).filter(Boolean)
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
      const transformedData = jsonData.map((entry) => this.parseData(entry)).filter(Boolean)

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
const inputPath = path.resolve('./scripts/filtered.json')
const outputPath = path.resolve('./scripts/parsed.json')

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`)
  process.exit(1)
}

parser.processFile(inputPath, outputPath)
