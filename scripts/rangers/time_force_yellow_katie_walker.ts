import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  groundAndPound: {
    name: 'Ground And Pound',
    type: 'attack',
    text: [
      'If the target of this attack has already been resolved, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  competitiveStrength: {
    name: 'Competitive Strength',
    type: 'reaction',
    text: [
      'Play this card when another Ranger performs an attack. Roll 3 dice. The attacking Ranger may ignore their roll and use yours instead.',
    ],
    energy: 0,
    shields: 2, 
  },

  allOrNothing: {
    name: 'All Or Nothing',
    type: 'maneuver',
    text: [
      'Gain 3 energy. Another Ranger may immediately play 1 card. Remove all energy from the shared energy pool at the end of this turn.',
    ],
    energy: 1,
    shields: 2, 
  },

  chronoCross: {
    name: 'Chrono Cross',
    type: 'attack',
    text: [
      'If this attack defeats an enemy card with the GUARD keyword, deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 1,
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

  v4Blaster: {
    name: 'V4 Blaster',
    type: 'attack',
    text: [
      'Gain 1 energy. You may remove any number of dice from this attack before rolling to increase the amount of energy gained by the same number.',
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
    [card.groundAndPound, 2],
    [card.competitiveStrength, 2],
    [card.allOrNothing, 2],
    [card.chronoCross, 2],
    [card.chronoBlaster, 1],
    [card.v4Blaster, 1] 
  ],
  {
    team: 'Time Force',
    owner: 'time_force_yellow_katie_walker',
    color: 'yellow'
  }
);

export default deck;
