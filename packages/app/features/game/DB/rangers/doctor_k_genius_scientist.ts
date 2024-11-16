import { BaseRangerCard, RangerCard } from '../../Card/CardTypes'
import { createDeck } from '../cardUtils'

const card: Record<string, BaseRangerCard> = {
  getInGear: {
    name: 'Get In Gear',
    type: 'reaction',
    text: [
      "Play this card when any Ranger plays an attack card. Treat that card's attack value as 3 dice. Add 1 die to that attack for each energy spent to play this card.",
    ],
    energy: 0,
    shields: 1,
  },

  itsNotSpandex: {
    name: 'Its Not Spandex',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense. Add 2 shields to that card.',
      'Play this card when any Ranger performs the RECOVER action. Subtract 2 shields from any card.',
    ],
    energy: 0,
    shields: 2,
  },

  synchronizedAttack: {
    name: 'Synchronized Attack',
    type: 'maneuver',
    text: [
      'Two different Rangers must each place 1 card from their hand on top of their deck. They may then, one at a time, each perform an attack with 2 dice.',
    ],
    energy: 0,
    shields: 3,
  },

  necessaryRisks: {
    name: 'Necessary Risks',
    type: 'maneuver',
    text: ['Gain 1 energy. Any Ranger may discard 1 card to perform an attack with 3 dice.'],
    energy: 0,
    shields: 3,
  },

  techMaintenance: {
    name: 'Tech Maintenance',
    type: 'maneuver',
    text: ['Gain 1 energy. Ready 1 exhausted Zord card of your choice.'],
    energy: 0,
    shields: 1,
  },

  engineCell: {
    name: 'Engine Cell',
    type: 'reaction',
    text: [
      'Play this card when any Ranger plays a card with an energy cost of X. Resolve that card as though they spent 5 energy to play it.',
    ],
    energy: 2,
    shields: 1,
  },
}

const deck: RangerCard[] = createDeck(
  [
    [card.getInGear, 2],
    [card.itsNotSpandex, 2],
    [card.synchronizedAttack, 2],
    [card.necessaryRisks, 2],
    [card.techMaintenance, 1],
    [card.engineCell, 1],
  ],
  {
    team: 'Doctor K Genius',
    owner: 'doctor_k_genius_scientist',
    color: 'white',
    subColor: 'black',
  }
)

export default deck
