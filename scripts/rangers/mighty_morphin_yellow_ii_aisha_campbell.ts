import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  doubleUp: {
    name: 'Double Up',
    type: 'maneuver',
    text: [
      'Any Ranger may search their deck and discard pile for 2 cards with the same name and add them both to their hand. If they searched their deck, they must shuffle it.',
    ],
    energy: 0,
    shields: 1, 
  },

  snapKick: {
    name: 'Snap Kick',
    type: 'attack',
    text: [
      'Add 1 die to this attack if this card was not the first card played during this turn.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  griffinStrike: {
    name: 'Griffin Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, you may draw 1 card. If you do, you may immediately play 1 card with an energy cost of zero.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  unstoppableForce: {
    name: 'Unstoppable Force',
    type: 'reaction',
    text: [
      'Play this card when any Ranger defeats an enemy card. Remove all excess hit tokens on that card and gain that much energy.',
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

  powerDaggers: {
    name: 'Power Daggers',
    type: 'attack',
    text: [
      'After you resolve this attack, a Ranger of your choice may immediately play 1 card.',
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
    [card.doubleUp, 2],
    [card.snapKick, 2],
    [card.griffinStrike, 2],
    [card.unstoppableForce, 2],
    [card.bladeBlaster, 1],
    [card.powerDaggers, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_yellow_ii_aisha_campbell',
    color: 'yellow'
  }
);

export default deck;
