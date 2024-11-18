const fs = require('fs')
const path = require('path')

function toPascalCase(str) {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

function getTeamFromId(rangerId) {
  const parts = rangerId.split('_')
  // Get team name before "ranger" appears
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
    'orange',
    'purple',
    'titanium',
    'alpha',
    'zeo',
    'rebel',
    'phantom',
    'ninjor',
    'magna',
    'dark',
    'crimson',
    'navy',
    'doctor',
    'dragon',
    'wolf',
    'mercury',
    'quantum',
    'santa',
    'violet',
  ]
  const colorIndex = parts.findIndex((part) => colors.includes(part))
  if (parts[colorIndex] === 'zeo') return 'zeo'
  return parts.slice(0, colorIndex).join('_')
}

function generateTeamFile(rangers, teamName) {
  const pascalTeamName = toPascalCase(teamName)
  const teamRangers = rangers.filter(
    (ranger) => getTeamFromId(ranger.id).toLowerCase() === teamName.toLowerCase()
  )

  return `import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const ${pascalTeamName}Rangers = [
  ${teamRangers
      .map((ranger) => {
        // Extract ability text from characterCard
        const abilityText = ranger.characterCard.ability[0]
        return `createRanger({
    id: '${ranger.id}',
    name: '${ranger.characterCard.name}',
    ability: {
      name: '${ranger.characterCard.title.replace(/'/g, "\\'")}',
      text: '${abilityText.replace(/'/g, "\\'")}',
    },
  })`
      })
      .join(',\n  ')}
] as Ranger[];

export default ${pascalTeamName}Rangers;
`
}

function generateTeamFiles() {
  try {
    // Read the input JSON file
    const inputPath = path.join(process.cwd(), 'scripts', 'parsed.json')
    const rangers = JSON.parse(fs.readFileSync(inputPath, 'utf8'))

    // Get unique teams
    const teams = [...new Set(rangers.map((ranger) => getTeamFromId(ranger.id)))]

    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'packages', 'app', 'features', 'game', 'DB', 'Teams')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Generate file for each team
    teams.forEach((team) => {
      const fileName = `${toPascalCase(team)}Rangers.ts`
      const filePath = path.join(outputDir, fileName)
      const fileContent = generateTeamFile(rangers, team)

      fs.writeFileSync(filePath, fileContent)
      console.log(`Generated ${fileName}`)
    })
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Error: rangers.json not found in scripts directory')
    } else {
      console.error('Error:', error.message)
    }
    process.exit(1)
  }
}

// Run the generator
generateTeamFiles()
