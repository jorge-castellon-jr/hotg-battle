import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  aquitianKnuckle: {
    name: 'Aquitian Knuckle',
    type: 'attack',
    text: [
      'If you roll at least 1 ○ result during this attack, deal 3 ¤ to the target.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  feintingSlash: {
    name: 'Feinting Slash',
    type: 'attack',
    text: [
      'If you roll at least 1 ○ result during this attack, return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  falseSwipe: {
    name: 'False Swipe',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. Convert all ¤ and ¤¤ results to ○ results. The Rangers may take an additional turn after this one.',
    ],
    energy: 0,
    shields: 2, 
  },

  encouragingWord: {
    name: 'Encouraging Word',
    type: 'reaction',
    text: [
      'Play this card when another Ranger rolls at least 1 ○ result during an attack. They may choose 1 card from their discard pile and place it on the bottom of their deck.',
    ],
    energy: 0,
    shields: 3, 
  },

  aquitianLaser: {
    name: 'Aquitian Laser',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each energy spent to play this card. You may reroll any number of dice during this attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  aquitianSaber: {
    name: 'Aquitian Saber',
    type: 'attack',
    text: [
      'Gain 1 energy for each ○ result rolled during this attack.',
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
    [card.aquitianKnuckle, 2],
    [card.feintingSlash, 2],
    [card.falseSwipe, 2],
    [card.encouragingWord, 2],
    [card.aquitianLaser, 1],
    [card.aquitianSaber, 1] 
  ],
  {
    team: '',
    owner: 'white_aquitar_ranger_delphine',
    color: 'white'
  }
);

export default deck;
