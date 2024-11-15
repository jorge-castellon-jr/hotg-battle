import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  discipline: {
    name: 'Discipline',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. That Ranger may reroll any number of dice during that attack.',
    ],
    energy: 2,
    shields: 1, 
  },

  shadowSlash: {
    name: 'Shadow Slash',
    type: 'attack',
    text: [
      'Before rolling, you may remove 1 die from this attack to gain 2 energy.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  barkOrders: {
    name: 'Bark Orders',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play 1 card. After that card resolves, that Ranger may place that card on top of their deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
  },

  crowdControl: {
    name: 'Crowd Control',
    type: 'attack',
    text: [
      'After this attack resolves, if the target was a foot solider card, you may perform an additional attack with 2 dice, targeting a different foot soldier card.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  judgment: {
    name: 'Judgment',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Gain +1 energy if there is a monster in this location or +2 energy if there is a boss in this location. Then place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
  },

  shadowSaber: {
    name: 'Shadow Saber',
    type: 'attack',
    text: [
      'Roll a number of dice for this attack equal to the health value of the targeted enemy card. Before rolling, remove 1 die from this attack for each hit token on the targeted enemy card.',
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
    [card.discipline, 2],
    [card.shadowSlash, 2],
    [card.barkOrders, 2],
    [card.crowdControl, 2],
    [card.judgment, 1],
    [card.shadowSaber, 1] 
  ],
  {
    team: 'Spd',
    owner: 'spd_shadow_ranger_anubis_cruger',
    color: 'shadow'
  }
);

export default deck;
