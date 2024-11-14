import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  weaponizedMorph: {
    name: 'Weaponized Morph',
    type: 'maneuver',
    text: [
      'Gain 2 energy. Deal 1 ¤ to a number of enemy cards equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 2, 
  },

  pushTheLimit: {
    name: 'Push The Limit',
    type: 'maneuver',
    text: [
      'Gain 2 energy. Another Ranger may perform an attack with 2 dice.',
    ],
    energy: 0,
    shields: 2, 
  },

  imScottish: {
    name: 'Im Scottish',
    type: 'maneuver',
    text: [
      'Deal 2 ¤ to an enemy card of your choice. Deal +1 ¤ if it has already resolved.',
      '★ If this card is revealed for defense, you may add it to your hand instead of placing it on the bottom of your deck or discarding it.',
    ],
    energy: 1,
    shields: 2, 
  },

  highlandStrike: {
    name: 'Highland Strike',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, you may add it to your hand instead of placing it on the bottom of your deck or discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
        fixed: true, 
      }, 
    ], 
  },

  nitroBlaster: {
    name: 'Nitro Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among a number of targets equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  turboCannon: {
    name: 'Turbo Cannon',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger may immediately play 1 maneuver card.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 5, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.weaponizedMorph, 2],
    [card.pushTheLimit, 2],
    [card.imScottish, 2],
    [card.highlandStrike, 2],
    [card.nitroBlaster, 1],
    [card.turboCannon, 1] 
  ],
  {
    team: 'Ranger Operator Series',
    owner: 'ranger_operator_series_blue_flynn_mcallistair',
    color: 'blue'
  }
);

export default deck;
