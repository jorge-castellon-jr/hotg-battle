import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  harmonize: {
    name: 'Harmonize',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play 1 card. After that card resolves, choose 1 card from your discard pile with the same shield value as the played card and add it to your hand.',
    ],
    energy: 0,
    shields: 1, 
  },

  rapidSpin: {
    name: 'Rapid Spin',
    type: 'attack',
    text: [
      'If you roll any ○ results during this attack, you may immediately perform a second attack with a number of dice equal to the ○ results.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  flyingKick: {
    name: 'Flying Kick',
    type: 'attack',
    text: [
      'Gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  pteraScream: {
    name: 'Ptera Scream',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. Before that attack resolves, reduce the health value of the target by 2 until the end of this turn.',
    ],
    energy: 1,
    shields: 3, 
  },

  thundermaxSaber: {
    name: 'Thundermax Saber',
    type: 'attack',
    text: [
      'If any other effects add dice to this attack, add +1 die to this attack. You may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  pteraGrips: {
    name: 'Ptera Grips',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger may immediately play 1 card. If it is an attack card, add 1 die to that attack.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.harmonize, 2],
    [card.rapidSpin, 2],
    [card.flyingKick, 2],
    [card.pteraScream, 2],
    [card.thundermaxSaber, 1],
    [card.pteraGrips, 1] 
  ],
  {
    team: 'Dino Thunder',
    owner: 'dino_thunder_yellow_kira_ford',
    color: 'yellow'
  }
);

export default deck;
