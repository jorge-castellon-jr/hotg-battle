import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  chronoBreak: {
    name: 'Chrono Break',
    type: 'attack',
    text: [
      'If this attack defeats the target, discard the top card of your deck, then place this card on top of your deck instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  payItForward: {
    name: 'Pay It Forward',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Another Ranger may immediately play an attack card. Treat that card\'s attack value as 3 dice (if it is not special).',
    ],
    energy: 0,
    shields: 2, 
  },

  preciseShot: {
    name: 'Precise Shot',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
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

  brazenStrike: {
    name: 'Brazen Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, draw 1 card.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 3, 
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

  v1Blaster: {
    name: 'V1 Blaster',
    type: 'attack',
    text: [
      'Any Ranger may discard 1 attack card from their hand with an energy cost of 1 or zero. This card gains the ability text of that card.',
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
    [card.chronoBreak, 2],
    [card.payItForward, 2],
    [card.preciseShot, 2],
    [card.brazenStrike, 2],
    [card.chronoBlaster, 1],
    [card.v1Blaster, 1] 
  ],
  {
    team: 'Time Force',
    owner: 'time_force_red_wes_collins',
    color: 'red'
  }
);

export default deck;
