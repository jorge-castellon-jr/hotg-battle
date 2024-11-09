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
    cards: getDeck('Red'),
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
    cards: getDeck('Blue'),
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
    cards: getDeck('Green'),
    energyUsed: false,
    abilityUsed: false,
    discard: [],
  },
] as Ranger[]
