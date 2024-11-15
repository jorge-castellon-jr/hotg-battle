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

  hadesTechnique: {
    name: 'Hades Technique',
    type: 'maneuver',
    text: [
      'Gain 1 energy for each enemy card already defeated in this battle.',
    ],
    energy: 0,
    shields: 2, 
  },

  cerberusFang: {
    name: 'Cerberus Fang',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, add it to your hand instead of discarding it or placing it on the bottom of your deck.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  coeusShield: {
    name: 'Coeus Shield',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 2. Then, place this card on top of your deck instead of discarding it.',
    ],
    energy: 1,
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

  coeusAxe: {
    name: 'Coeus Axe',
    type: 'attack',
    text: [
      'After you resolve this attack, deal 1 ¤ to each enemy card that has already resolved.',
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
    [card.hadesTechnique, 2],
    [card.cerberusFang, 2],
    [card.coeusShield, 2],
    [card.bladeBlaster, 1],
    [card.coeusAxe, 1] 
  ],
  {
    team: 'Hyperforce',
    owner: 'hyperforce_black_vesper_vasquez',
    color: 'black'
  }
);

export default deck;
