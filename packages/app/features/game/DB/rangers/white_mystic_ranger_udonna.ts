import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  discipline: {
    name: 'Discipline',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. They may reroll any number of dice during that attack.',
    ],
    energy: 0,
    shields: 1, 
  },

  coldSpell: {
    name: 'Cold Spell',
    type: 'reaction',
    text: [
      'Play this card after another Ranger resolves a card. If that card has a ★ effect, they may place that card on top of their deck instead of discarding it. Otherwise, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
  },

  mysticFrost: {
    name: 'Mystic Frost',
    type: 'maneuver',
    text: [
      'Deal 2 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 2, 
  },

  wintersGuile: {
    name: 'Winters Guile',
    type: 'attack',
    text: [
      'If you roll at least 1 ○ result during this attack, any Ranger may immediately play 1 card with an energy cost of zero.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  flashFreeze: {
    name: 'Flash Freeze',
    type: 'attack',
    text: [
      'If you roll at least 2 ○ results during this attack, the Rangers may take an additional turn after this one.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  snowStaff: {
    name: 'Snow Staff',
    type: 'attack',
    text: [
      'After you resolve this attack, choose up to 2 cards from another Ranger\'s discard pile and place them on top of their deck, in any order.',
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
    [card.discipline, 2],
    [card.coldSpell, 2],
    [card.mysticFrost, 2],
    [card.wintersGuile, 2],
    [card.flashFreeze, 1],
    [card.snowStaff, 1] 
  ],
  {
    team: '',
    owner: 'white_mystic_ranger_udonna',
    color: 'white'
  }
);

export default deck;
