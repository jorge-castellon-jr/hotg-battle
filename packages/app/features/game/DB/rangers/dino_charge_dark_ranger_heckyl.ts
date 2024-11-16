import { BaseRangerCard, RangerCard } from '../../Card/CardTypes'
import RangerCard from '../../Card/RangerCard'
import { createDeck } from '../cardUtils'

const card: Record<string, BaseRangerCard> = {
  spinCutter: {
    name: 'Spin Cutter',
    type: 'attack',
    text: [
      'After this attack resolves, you may discard the top card of your deck. If you do, return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1,
    attack: [
      {
        value: 3,
      },
    ],
  },

  talonSlash: {
    name: 'Talon Slash',
    type: 'attack',
    text: ['If you play this card from your discard pile, gain 1 energy.'],
    energy: 0,
    shields: 2,
    attack: [
      {
        value: 2,
      },
    ],
  },

  clandestineTactics: {
    name: 'Clandestine Tactics',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. Gain 1 energy. You may flip 1 foot soldier card face down, as though defeated. (Do not remove a foot soldier figure from that location.)',
    ],
    energy: 0,
    shields: 2,
  },

  darkEncore: {
    name: 'Dark Encore',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play the top card of their discard pile. They must place that card on the bottom of their deck instead of discarding it.',
    ],
    energy: 1,
    shields: 3,
  },

  darkEnergem: {
    name: 'Dark Energem',
    type: 'maneuver',
    text: [
      'Discard your entire hand. Until the end of this battle, you may play Dark Ranger cards from your discard pile and you may rearrange the order of your discard pile.',
    ],
    energy: 2,
    shields: 1,
  },

  spinoBlade: {
    name: 'Spino Blade',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack. While this card is in your discard pile, reduce its energy cost by 1.',
    ],
    energy: 3,
    shields: 3,
    attack: [
      {
        value: 5,
      },
    ],
  },
}

const deck = createDeck(
  [
    [card.spinCutter, 2],
    [card.talonSlash, 2],
    [card.clandestineTactics, 2],
    [card.darkEncore, 2],
    [card.darkEnergem, 1],
    [card.spinoBlade, 1],
  ],
  {
    team: 'Dino Charge Dark Ranger',
    owner: 'dino_charge_dark_ranger_heckyl',
    color: 'dark',
  }
) as RangerCard[]

export default deck
