const fs = require('fs')
const path = require('path')

function cleanCardName(str) {
  // Remove special characters and extra spaces
  return str.replace(/[^a-zA-Z0-9 ]/g, '').trim()
}

function convertToCamelCase(str) {
  // First clean the string, then convert to camelCase
  const cleanStr = cleanCardName(str)
  return cleanStr.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
}

function convertEffectToText(effects) {
  return `[
      ${effects
      .map(
        (effect) =>
          `'${effect
            .replace(/\[b\]/g, '')
            .replace(/\[\/b\]/g, '')
            .replace('\r', '')
            .replace("'", "\\'")}'`
      )
      .join(',\n      ')},
    ]`
}

function generateCardObject(cards) {
  // Create a Map to track unique cards and their counts
  const uniqueCards = new Map()
  const cardCounts = new Map()

  // Process each card
  cards.forEach((card) => {
    const cardKey = convertToCamelCase(card.name)

    // If this is a new unique card, add it to our map
    if (!uniqueCards.has(cardKey)) {
      uniqueCards.set(cardKey, {
        ...card,
        name: cleanCardName(card.name), // Clean the display name as well
      })
      cardCounts.set(cardKey, 1)
    } else {
      // If we've seen this card before, increment its count
      cardCounts.set(cardKey, cardCounts.get(cardKey) + 1)
    }
  })

  // Generate the card objects string
  const cardObjects = Array.from(uniqueCards.entries())
    .map(([cardKey, card]) => {
      // console.log(cardKey, card)
      if (card.effect.length > 1) console.log(card)
      let cardObject = `  ${cardKey}: {
    name: '${card.name}',
    type: '${card.type}',
    text: ${convertEffectToText(card.effect)},
    energy: ${card.energy},
    shields: ${card.shields}, `

      if (card.attack !== null) {
        cardObject += `
    attack: [`

        for (const attack of card.attack) {
          cardObject += `
      {
        value: ${attack.value}, `
          cardObject += attack.fixed
            ? `
        fixed: true, `
            : ''
          cardObject += `
      }, `
        }
        cardObject += `
    ], `
      }

      cardObject += '\n  }'

      return cardObject
    })
    .join(',\n\n')

  return {
    cardObject: `const card: Record<string, BaseRangerCard> = { \n${cardObjects}\n}`,
    cardCounts,
  }
}

function generateDeckArray(cards) {
  // Create a Map to track card counts
  const cardCounts = new Map()

  // Count occurrences of each card
  cards.forEach((card) => {
    const cardKey = convertToCamelCase(card.name)
    cardCounts.set(cardKey, (cardCounts.get(cardKey) || 0) + 1)
  })

  // Generate the deck array with counts
  const cardEntries = Array.from(cardCounts.entries())
    .map(([cardKey, count]) => {
      return `    [card.${cardKey}, ${count}]`
    })
    .join(',\n')

  return `[\n${cardEntries} \n  ]`
}

function generateRangerFile(ranger) {
  // Split ID to extract team and color
  const parts = ranger.id.split('_')
  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'black',
    'white',
    'gold',
    'silver',
    'shadow',
  ]

  // Find where color appears in the ID
  const colorIndex = parts.findIndex((part) => colors.includes(part))

  // Get all parts before the color and capitalize each word
  const teamParts = parts.slice(0, colorIndex)
  const formattedTeam = teamParts
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const color = parts.find((part) => colors.includes(part.toLowerCase())) || 'unknown'

  // Generate card object with unique cards
  const { cardObject } = generateCardObject(ranger.cards)

  return `import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

${cardObject}

const deck: RangerCard[] = createDeck(
  ${generateDeckArray(ranger.cards)},
  {
    team: '${formattedTeam}',
    owner: '${ranger.id}',
    color: '${color}'
  }
);

export default deck;
`
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function convertJSONToTypeScript() {
  // Read from input.json in the current directory
  const inputPath = path.join(process.cwd(), 'scripts', 'parsed.json')
  const outputDir = path.join(process.cwd(), 'scripts', 'rangers')

  try {
    // Ensure the output directory exists
    ensureDirectoryExists(outputDir)

    // Read and parse the JSON file
    const jsonData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))

    // Generate a file for each ranger
    jsonData.forEach((ranger) => {
      const fileName = `${ranger.id}.ts`
      const filePath = path.join(outputDir, fileName)
      const fileContent = generateRangerFile(ranger)

      fs.writeFileSync(filePath, fileContent)
      console.log(`Generated ${fileName} `)
    })

    console.log('\nConversion completed successfully!')
    console.log(`Output directory: ${outputDir} `)
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Error: input.json not found in current directory')
    } else {
      console.error('Error:', error.message)
    }
    process.exit(1)
  }
}

// Run the converter
convertJSONToTypeScript()
