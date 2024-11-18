import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  findWeakness: {
    name: 'Find Weakness',
    type: 'maneuver',
    text: [
      'Gain 1 energy. The next time any Ranger performs an attack during this battle, add 2 ¤ to that attack.',
    ],
    energy: 0,
    shields: 1, 
  },

  tenaciousBlow: {
    name: 'Tenacious Blow',
    type: 'attack',
    text: [
      'While this card is in your discard pile, its shield value is reduced by 1.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  earthSmash: {
    name: 'Earth Smash',
    type: 'attack',
    text: [
      'After you resolve this attack, you may choose cards with a total of up to 2 shields from your discard pile and place them on the bottom of your deck, in any order.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  avalancheSwing: {
    name: 'Avalanche Swing',
    type: 'attack',
    text: [
      'If you discard this card from your hand without playing it, you may spend 1 energy to deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  omegaForever: {
    name: 'Omega Forever',
    type: 'reaction',
    text: [
      'Play this card at the end of a battle. Roll 2 dice and deal that much ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
  },

  omegaMaul: {
    name: 'Omega Maul',
    type: 'attack',
    text: [
      'You may play this card as normal or immediately after another Ranger resolves an attack or maneuver with an energy cost of 1 or zero.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.findWeakness, 2],
    [card.tenaciousBlow, 2],
    [card.earthSmash, 2],
    [card.avalancheSwing, 2],
    [card.omegaForever, 1],
    [card.omegaMaul, 1] 
  ],
  {
    team: 'Omega',
    owner: 'omega_yellow_ranger_trini_kwan',
    color: 'yellow'
  }
);

export default deck;
