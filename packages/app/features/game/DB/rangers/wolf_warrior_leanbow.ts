import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  counterJab: {
    name: 'Counter Jab',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, you may deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 1, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  wolfArmor: {
    name: 'Wolf Armor',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by 2.',
      '★ If this card is revealed for defense, it gains +1 shield.',
    ],
    energy: 0,
    shields: 2, 
  },

  blazingStormSlash: {
    name: 'Blazing Storm Slash',
    type: 'attack',
    text: [
      'Before rolling, you may place 1 card from your hand on top of your deck. If you do, divide the ¤ from this attack among any number of targets.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  mysticFlame: {
    name: 'Mystic Flame',
    type: 'maneuver',
    text: [
      'Deal 1 ¤ to an enemy card of your choice and up to 2 other adjacent enemy cards.',
    ],
    energy: 1,
    shields: 3, 
  },

  shieldOfLight: {
    name: 'Shield Of Light',
    type: 'reaction',
    text: [
      'Play this card when any Ranger uses a ★ ability. Gain 2 energy or add 2 shields to the revealed card.',
    ],
    energy: 0,
    shields: 1, 
  },

  knightSaber: {
    name: 'Knight Saber',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, you may treat it as having the ★ ability of another card in your hand or discard pile.',
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
    [card.counterJab, 2],
    [card.wolfArmor, 2],
    [card.blazingStormSlash, 2],
    [card.mysticFlame, 2],
    [card.shieldOfLight, 1],
    [card.knightSaber, 1] 
  ],
  {
    team: 'Wolf Warrior',
    owner: 'wolf_warrior_leanbow',
    color: 'red'
  }
);

export default deck;
