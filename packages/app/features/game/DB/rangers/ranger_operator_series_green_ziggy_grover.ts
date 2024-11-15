import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  trickster: {
    name: 'Trickster',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense. That Ranger may swap the revealed card with another card in their hand.',
    ],
    energy: 0,
    shields: 1, 
  },

  chanceyChop: {
    name: 'Chancey Chop',
    type: 'attack',
    text: [
      'Before rolling, choose evens or odds. If the number of ¤ results you roll matches your choice, gain 1 energy and return this card to your hand instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sneakAttack: {
    name: 'Sneak Attack',
    type: 'reaction',
    text: [
      'Play this card after another Ranger performs a maneuver to immediately perform an attack with 2 dice.',
    ],
    energy: 0,
    shields: 2, 
  },

  warpedStrike: {
    name: 'Warped Strike',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, add it to your hand instead of placing it on the bottom of your deck or discarding it. Then move your figure to another outer location of your choice.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 1, 
      }, 
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

  turboAxe: {
    name: 'Turbo Axe',
    type: 'attack',
    text: [
      'You may play this card in any battle, regardless of location. Move your figure to the location of that battle. If you were already in that location, add 2 dice to this attack instead.',
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
    [card.trickster, 2],
    [card.chanceyChop, 2],
    [card.sneakAttack, 2],
    [card.warpedStrike, 2],
    [card.nitroBlaster, 1],
    [card.turboAxe, 1] 
  ],
  {
    team: 'Ranger Operator Series',
    owner: 'ranger_operator_series_green_ziggy_grover',
    color: 'green'
  }
);

export default deck;
