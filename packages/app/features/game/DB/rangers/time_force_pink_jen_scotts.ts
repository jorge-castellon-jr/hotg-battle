import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  overclock: {
    name: 'Overclock',
    type: 'attack',
    text: [
      'Discard another card from your hand, then gain 1 energy for each shield on that card.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  chronoSaber: {
    name: 'Chrono Saber',
    type: 'attack',
    text: [
      'If this attack defeats the target, gain 2 energy.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  coveringFire: {
    name: 'Covering Fire',
    type: 'reaction',
    text: [
      'Play this card when another Ranger plays a maneuver. Roll 2 dice and deal that much ¤ to an enemy card of your choice.',
    ],
    energy: 1,
    shields: 2, 
  },

  warpVector: {
    name: 'Warp Vector',
    type: 'attack',
    text: [
      'Choose 1 card from your discard pile and place it on top of your deck.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  chronoBlaster: {
    name: 'Chrono Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 2,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  v5Blaster: {
    name: 'V5 Blaster',
    type: 'attack',
    text: [
      'Before rolling, add 1 die to this attack for each energy remaining in the shared pool.',
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
    [card.overclock, 2],
    [card.chronoSaber, 2],
    [card.coveringFire, 2],
    [card.warpVector, 2],
    [card.chronoBlaster, 1],
    [card.v5Blaster, 1] 
  ],
  {
    team: 'Time Force',
    owner: 'time_force_pink_jen_scotts',
    color: 'pink'
  }
);

export default deck;
