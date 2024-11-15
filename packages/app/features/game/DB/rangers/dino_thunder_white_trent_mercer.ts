import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  dragoStrike: {
    name: 'Drago Strike',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, the next time any Ranger performs an attack during this battle, add 1 die to that attack.',
    ],
    energy: 2,
    shields: 1, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  },

  misdirection: {
    name: 'Misdirection',
    type: 'reaction',
    text: [
      'Play this card when an enemy card deals damage. Gain 1 energy. You may divide that damage among any number of Rangers.',
    ],
    energy: 0,
    shields: 2, 
  },

  arrowShot: {
    name: 'Arrow Shot',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  dashSlash: {
    name: 'Dash  Slash',
    type: 'attack',
    text: [
      'Before rolling, you may place 1 card from your hand on the bottom of your deck. If you do, add 2 dice to this attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  laserArrows: {
    name: 'Laser Arrows',
    type: 'attack',
    text: [
      'Add a number of dice to this attack equal to the amount of energy spent to play this card. If this attack defeats the target, you may divide any excess ¤ among enemy cards adjacent to the target.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  dragoSword: {
    name: 'Drago Sword',
    type: 'maneuver',
    text: [
      'Choose 1 attack card from your discard pile with an energy cost of 2 or less. Play that card without paying its energy cost. Add 3 dice to that attack.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.dragoStrike, 2],
    [card.misdirection, 2],
    [card.arrowShot, 2],
    [card.dashSlash, 2],
    [card.laserArrows, 1],
    [card.dragoSword, 1] 
  ],
  {
    team: 'Dino Thunder',
    owner: 'dino_thunder_white_trent_mercer',
    color: 'white'
  }
);

export default deck;
