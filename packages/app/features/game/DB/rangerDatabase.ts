import { getDeck } from '../Card/deckUtils'
import { Ranger } from '../GameTypes'

export default [
  {
    id: 'mm1',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Leadership',
      text: 'Once per battle, a Ranger of your choice may reroll any number of dice during an attack.',
    },
    color: 'red',
    team: 'Mighty Morphin',
    cards: getDeck('mm1'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
  {
    id: 'mm2',
    name: 'Billy Cranston',
    ability: {
      name: 'Strategize',
      text: 'Once per battle, a Ranger of your choice may draw 1 card and then place 1 card from their hand back on top of their deck.',
    },
    color: 'blue',
    team: 'Mighty Morphin',
    cards: getDeck('mm2'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
  {
    id: 'mm3',
    name: 'Zack Taylor',
    ability: {
      name: 'Hip-Hop Kido',
      text: 'Once per battle, after you defeat an enemy card with an attack, you may deal 1 damage to another enemy card adjacent to your target.',
    },
    color: 'black',
    team: 'Mighty Morphin',
    cards: getDeck('mm3'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
  {
    id: 'mm4',
    name: 'Trini Kwan',
    ability: {
      name: 'Double Strike',
      text: 'Once per battle, after you play a card, you may immediately play another card with the same name.',
    },
    color: 'yellow',
    team: 'Mighty Morphin',
    cards: getDeck('mm4'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
  {
    id: 'mm5',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Quick Shot',
      text: 'At the start of each battle, you may deal 1 damage to an enemy card of your choice.',
    },
    color: 'pink',
    team: 'Mighty Morphin',
    cards: getDeck('mm5'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
  {
    id: 'mm6',
    name: 'Tommy Oliver',
    ability: {
      name: 'Loner',
      text: 'If you are the only player with a Ranger in your location, you may add 1 die to each of your attacks.',
    },
    color: 'green',
    team: 'Mighty Morphin',
    cards: getDeck('mm6'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
] as Ranger[]
