import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  inspiringPresence: {
    name: 'Inspiring Presence',
    type: 'maneuver',
    text: [
      'After you play this card, another Ranger of your choice may immediately play 1 card. [GOLD]: Gain 1 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  lightningRod: {
    name: 'Lightning Rod',
    type: 'attack',
    text: [
      '[GOLD]: Deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 1,
    shields: 2, 
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

  armoredBlow: {
    name: 'Armored Blow',
    type: 'attack',
    text: [
      '[GOLD]: A Ranger of your choice may draw 1 card. That Ranger may then choose 1 card from their hand and place it on top of their deck.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  goldenGuard: {
    name: 'Golden Guard',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 2. [GOLD]: Move 1 hit token from an enemy card of your choice to another enemy card.',
    ],
    energy: 0,
    shields: 3, 
  },

  goldRush: {
    name: 'Gold Rush',
    type: 'attack',
    text: [
      '[GOLD]: A Ranger of your choice may choose 1 card from their discard pile and shuffle it back into their deck.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  goldenPowerStaff: {
    name: 'Golden Power Staff',
    type: 'attack',
    text: [
      'Resolve the [GOLD] ability on any 1 card in your discard pile.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 6, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.inspiringPresence, 2],
    [card.lightningRod, 1],
    [card.armoredBlow, 2],
    [card.goldenGuard, 2],
    [card.goldRush, 1],
    [card.goldenPowerStaff, 1] 
  ],
  {
    team: 'Zeo',
    owner: 'zeo_gold_i_trey_of_triforia',
    color: 'gold'
  }
);

export default deck;
