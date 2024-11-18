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

  iapetusBlaster: {
    name: 'Iapetus Blaster',
    type: 'attack',
    text: [
      'Before rolling, you may spend 1 energy to add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  doubleSlash: {
    name: 'Double Slash',
    type: 'attack',
    text: [
      'After you resolve this attack, you may discard 1 card from your hand to perform a second attack with 2 dice, targeting a different enemy card.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  defensiveStance: {
    name: 'Defensive Stance',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Draw 1 card, then place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 3, 
  },

  bladeBlaster: {
    name: 'Blade Blaster',
    type: 'attack',
    text: [
      'This attack deals an amount of ¤ equal to the amount of energy spent to play this card. You may divide this ¤ among any number of targets.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  iapetusClaws: {
    name: 'Iapetus Claws',
    type: 'attack',
    text: [
      'After you resolve this attack, you may perform a second attack with 2 dice. Then, you may perform a third attack with 1 die.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.findWeakness, 2],
    [card.iapetusBlaster, 2],
    [card.doubleSlash, 2],
    [card.defensiveStance, 2],
    [card.bladeBlaster, 1],
    [card.iapetusClaws, 1] 
  ],
  {
    team: 'Hyperforce',
    owner: 'hyperforce_red_marvin_marv_shih',
    color: 'red'
  }
);

export default deck;
