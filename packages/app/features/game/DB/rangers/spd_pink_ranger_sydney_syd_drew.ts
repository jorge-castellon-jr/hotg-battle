import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  fistOfIron: {
    name: 'Fist Of Iron',
    type: 'attack',
    text: [
      'After rolling, you may convert 1 ○ result to a ¤ result.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  counterThrust: {
    name: 'Counter Thrust',
    type: 'attack',
    text: [
      'If this attack targets an enemy card with the FAST keyword, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  energyFission: {
    name: 'Energy Fission',
    type: 'reaction',
    text: [
      'Play this card when a die result is converted. Gain 1 energy. Any Ranger may draw up to 2 cards.',
    ],
    energy: 0,
    shields: 2, 
  },

  upTheAnte: {
    name: 'Up The Ante',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack during this battle, add 1 die to that attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
        fixed: true, 
      }, 
    ], 
  },

  deltamaxFire: {
    name: 'Deltamax Fire',
    type: 'maneuver',
    text: [
      'Perform an attack with 3 dice that targets a foot soldier card of your choice. Another Ranger may then perform an attack with 3 dice that targets a different foot soldier card.',
    ],
    energy: 2,
    shields: 1, 
  },

  deltamaxBurst: {
    name: 'Deltamax Burst',
    type: 'reaction',
    text: [
      'Play this card after any Ranger rolls dice for an attack. Convert up to 5 die results to ¤¤ results.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.fistOfIron, 2],
    [card.counterThrust, 2],
    [card.energyFission, 2],
    [card.upTheAnte, 2],
    [card.deltamaxFire, 1],
    [card.deltamaxBurst, 1] 
  ],
  {
    team: 'Spd',
    owner: 'spd_pink_ranger_sydney_syd_drew',
    color: 'pink'
  }
);

export default deck;
