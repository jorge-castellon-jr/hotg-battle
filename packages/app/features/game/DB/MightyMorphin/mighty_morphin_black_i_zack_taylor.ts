import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  recklessBlow: {
    name: 'Reckless Blow',
    type: 'attack',
    text: [
      'Before rolling, you may discard the top card of your deck to add 2 dice to this attack.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  smoothMoves: {
    name: 'Smooth Moves',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 2 and gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
  },

  mammothSlam: {
    name: 'Mammoth Slam',
    type: 'attack',
    text: [
      'If there are 4 or more cards in your discard pile, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sweepingStrike: {
    name: 'Sweeping Strike',
    type: 'attack',
    text: [
      'Deal 1 ¤ to an enemy card adjacent to the target.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
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

  powerAxe: {
    name: 'Power Axe',
    type: 'attack',
    text: [
      'After rolling, choose 2 dice from this attack and deal that much ¤ to each enemy card adjacent to the target.',
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
    [card.recklessBlow, 2],
    [card.smoothMoves, 2],
    [card.mammothSlam, 2],
    [card.sweepingStrike, 2],
    [card.bladeBlaster, 1],
    [card.powerAxe, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_black_i_zack_taylor',
    color: 'black'
  }
);

export default deck;
