import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  shockwaveSlam: {
    name: 'Shockwave Slam',
    type: 'attack',
    text: [
      'You may discard the top card of your deck to deal 1 ¤ to each enemy card adjacent to the target.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sturdyBlow: {
    name: 'Sturdy Blow',
    type: 'attack',
    text: [
      '★ When this card is revealed for defense, it gains +1 shield.',
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

  cursebreaker: {
    name: 'Cursebreaker',
    type: 'attack',
    text: [
      'If the target has the PASSIVE keyword, add 2 dice to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  titaniumPower: {
    name: 'Titanium Power',
    type: 'reaction',
    text: [
      'Play this card when any Ranger discards a card for defense. Gain an amount of energy equal to the number of shields on that card.',
    ],
    energy: 1,
    shields: 3, 
  },

  titaniumLaser: {
    name: 'Titanium Laser',
    type: 'attack',
    text: [
      'This attack deals an amount of ¤ equal to the number of cards in your deck pile (max 10). Ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  titaniumAxe: {
    name: 'Titanium Axe',
    type: 'attack',
    text: [
      'This attack deals an amount of ¤ equal to the number of cards in your discard pile (max 10). You may divide this ¤ among any number of targets.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.shockwaveSlam, 2],
    [card.sturdyBlow, 2],
    [card.cursebreaker, 2],
    [card.titaniumPower, 2],
    [card.titaniumLaser, 1],
    [card.titaniumAxe, 1] 
  ],
  {
    team: 'Titanium Ranger Ryan',
    owner: 'titanium_ranger_ryan_mitchell',
    color: 'unknown'
  }
);

export default deck;
