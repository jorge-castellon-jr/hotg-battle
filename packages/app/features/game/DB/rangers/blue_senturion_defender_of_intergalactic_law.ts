import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  redLightStrike: {
    name: 'Red Light Strike',
    type: 'attack',
    text: [
      'If this attack targets an enemy card with the FAST keyword, place this card on the bottom of your deck instead of discarding it.',
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

  protectAndServe: {
    name: 'Protect And Serve',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense. Add 1 shield to that card for each enemy card with the FAST or GUARD keyword. Gain 1 energy for each enemy card with the PASSIVE keyword.',
    ],
    energy: 0,
    shields: 2, 
  },

  deputizedAction: {
    name: 'Deputized Action',
    type: 'reaction',
    text: [
      'Play this card before any Ranger rolls dice for an attack. Add 1 die to that attack for each keyword the target has (FAST, GUARD, PASSIVE).',
    ],
    energy: 0,
    shields: 2, 
  },

  blueBlaster: {
    name: 'Blue Blaster',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each energy spent to play this card. Add 1 die to this attack for each keyword the target has (FAST, GUARD, PASSIVE).',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  senturionCycle: {
    name: 'Senturion Cycle',
    type: 'maneuver',
    text: [
      'A Ranger of your choice may move to this location and draw up to 5 cards. That Ranger may then immediately play 1 attack card. They may reroll any number of dice during that attack.',
    ],
    energy: 2,
    shields: 1, 
  },

  senturionSynergizer: {
    name: 'Senturion Synergizer',
    type: 'attack',
    text: [
      'Reduce the energy cost of this card by 1 for each keyword the target has (FAST, GUARD, PASSIVE).',
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
    [card.redLightStrike, 2],
    [card.protectAndServe, 2],
    [card.deputizedAction, 2],
    [card.blueBlaster, 2],
    [card.senturionCycle, 1],
    [card.senturionSynergizer, 1] 
  ],
  {
    team: '',
    owner: 'blue_senturion_defender_of_intergalactic_law',
    color: 'blue'
  }
);

export default deck;
