import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  oceanusBlades: {
    name: 'Oceanus Blades',
    type: 'attack',
    text: [
      'After you resolve this attack, you and another Ranger of your choice may each draw 1 card.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  pythonGrab: {
    name: 'Python Grab',
    type: 'maneuver',
    text: [
      'Attach this card to 1 enemy card. Reduce all damage dealt by that enemy card by 2. That enemy card loses the GUARD keyword for the rest of this battle.',
    ],
    energy: 1,
    shields: 2, 
  },

  coilingViper: {
    name: 'Coiling Viper',
    type: 'attack',
    text: [
      'After you play this card, place it on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  serpentStrike: {
    name: 'Serpent Strike',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Attach this card to 1 enemy card. After that enemy card resolves, deal 2 ¤ to that enemy card.',
    ],
    energy: 0,
    shields: 3, 
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

  oceanusTrident: {
    name: 'Oceanus Trident',
    type: 'attack',
    text: [
      'After you resolve this attack, choose up to 3 cards from Ranger discard piles and shuffle them back into their respective decks.',
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
    [card.oceanusBlades, 2],
    [card.pythonGrab, 2],
    [card.coilingViper, 2],
    [card.serpentStrike, 2],
    [card.bladeBlaster, 1],
    [card.oceanusTrident, 1] 
  ],
  {
    team: 'Hyperforce',
    owner: 'hyperforce_blue_eddie_banks_iii',
    color: 'blue'
  }
);

export default deck;
