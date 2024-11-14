import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  hurricaneKick: {
    name: 'Hurricane Kick',
    type: 'attack',
    text: [
      'Deal the ¤ from this attack to the target and to another enemy card adjacent to the target.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  accelerate: {
    name: 'Accelerate',
    type: 'maneuver',
    text: [
      'A Ranger of your choice may immediately play 1 card. If it is an attack, add 1 die to that attack.',
    ],
    energy: 0,
    shields: 2, 
  },

  swiftStrike: {
    name: 'Swift Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, if the target had the FAST keyword, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
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

  hyperionBow: {
    name: 'Hyperion Bow',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
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

  hyperionScythe: {
    name: 'Hyperion Scythe',
    type: 'attack',
    text: [
      'Double the ¤ dealt by this attack.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.hurricaneKick, 2],
    [card.accelerate, 2],
    [card.swiftStrike, 2],
    [card.hyperionBow, 2],
    [card.bladeBlaster, 1],
    [card.hyperionScythe, 1] 
  ],
  {
    team: 'Hyperforce',
    owner: 'hyperforce_pink_chloe_ashford',
    color: 'pink'
  }
);

export default deck;
