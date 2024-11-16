import { BaseRangerCard, RangerCard } from '../../Card/CardTypes'
import { createDeck } from '../cardUtils'

const card: Record<string, BaseRangerCard> = {
  dragonRage: {
    name: 'Dragon Rage',
    type: 'maneuver',
    text: [
      'Place the Dragon Claw token on an enemy card of your choice. Deal 1 ¤ to that card. If this effect defeats a card, you may spend 1 energy to repeat this effect.',
    ],
    energy: 0,
    shields: 1,
  },

  jetRush: {
    name: 'Jet Rush',
    type: 'attack',
    text: [
      'After you resolve this attack, place the Dragon Claw token on an enemy card of your choice.',
    ],
    energy: 1,
    shields: 1,
    attack: [
      {
        value: 3,
      },
    ],
  },

  guardCrush: {
    name: 'Guard Crush',
    type: 'reaction',
    text: [
      'Play this card when the enemy card with the Dragon Claw token resolves. Deal 1 ¤ to that card and reduce all damage it deals by 1.',
    ],
    energy: 1,
    shields: 3,
  },

  vorpalClaws: {
    name: 'Vorpal Claws',
    type: 'attack',
    text: ['Add 1 die to this attack if the target has the Dragon Claw token.'],
    energy: 0,
    shields: 3,
    attack: [
      {
        value: 2,
      },
    ],
  },

  energyHarvest: {
    name: 'Energy Harvest',
    type: 'maneuver',
    text: [
      'Gain 1 energy for each hit token on the enemy card with the Dragon Claw token. Another Ranger may immediately play 1 card.',
    ],
    energy: 0,
    shields: 1,
  },

  havocLaser: {
    name: 'Havoc Laser',
    type: 'maneuver',
    text: [
      'Immediately defeat the enemy with the Dragon Claw token. Then shuffle your hand into your deck.',
    ],
    energy: 3,
    shields: 3,
  },
}

const deck: RangerCard[] = createDeck(
  [
    [card.dragonRage, 2],
    [card.jetRush, 2],
    [card.guardCrush, 2],
    [card.vorpalClaws, 2],
    [card.energyHarvest, 1],
    [card.havocLaser, 1],
  ],
  {
    team: 'Dragon Armor Ranger Trini',
    owner: 'dragon_armor_ranger_trini_kwan',
    color: 'black',
    subColor: 'yellow',
  }
)

export default deck
