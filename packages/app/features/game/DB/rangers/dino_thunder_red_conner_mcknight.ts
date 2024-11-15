import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  outpace: {
    name: 'Outpace',
    type: 'reaction',
    text: [
      'Play this card when an enemy card resolves. Reduce the damage that card deals by 1. If that card has the FAST keyword, gain 1 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  tyrannoStrike: {
    name: 'Tyranno Strike',
    type: 'attack',
    text: [
      'You may reroll any number of dice during this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  extremeSpeed: {
    name: 'Extreme Speed',
    type: 'maneuver',
    text: [
      'Any Ranger may immediately play 1 card. If it is the first attack card played during this battle, add 1 die to that attack. Otherwise, place this card on the bottom of your deck and you may draw 1 card.',
    ],
    energy: 0,
    shields: 2, 
  },

  cornerKick: {
    name: 'Corner Kick',
    type: 'attack',
    text: [
      'After rolling, you may choose to deal the full ¤ from this attack to an enemy card adjacent to the target instead.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
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

  tyrannoStaff: {
    name: 'Tyranno Staff',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among any number of targets that have not yet resolved.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 4, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.outpace, 2],
    [card.tyrannoStrike, 2],
    [card.extremeSpeed, 2],
    [card.cornerKick, 2],
    [card.thundermaxSaber, 1],
    [card.tyrannoStaff, 1] 
  ],
  {
    team: 'Dino Thunder',
    owner: 'dino_thunder_red_conner_mcknight',
    color: 'red'
  }
);

export default deck;
