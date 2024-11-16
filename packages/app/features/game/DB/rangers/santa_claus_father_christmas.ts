import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  theNaughtyList: {
    name: 'The Naughty List',
    type: 'attack',
    text: [
      'GIFT: Deal 1 ¤ each to up to 2 enemy cards.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
        fixed: true, 
      }, 
    ], 
  },

  betterWatchOut: {
    name: 'Better Watch Out',
    type: 'attack',
    text: [
      'GIFT: The next time any Ranger performs an attack during this battle, add 2 dice to this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  bellRinger: {
    name: 'Bell Ringer',
    type: 'attack',
    text: [
      'Look at the top card of your deck. You may give it to another Ranger as a gift. GIFT: Each Ranger in this battle may draw up to 2 cards.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  christmasRush: {
    name: 'Christmas Rush',
    type: 'maneuver',
    text: [
      'Give 1 card from your hand to another Ranger as a gift. That Ranger may immediately play 1 card. Place this card on the bottom of your deck instead of discarding it.',
    ],
    energy: 1,
    shields: 3, 
  },

  milkCookies: {
    name: 'Milk  Cookies',
    type: 'maneuver',
    text: [
      'Choose cards from your discard pile with a total of up to 5 shields and shuffle them back into your deck. GIFT: Gain 2 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  theNiceList: {
    name: 'The Nice List',
    type: 'maneuver',
    text: [
      'Choose a number of cards from your discard pile equal to the amount of energy spent to play this card. Shuffle those cards and give them to other Rangers as gifts.',
    ],
    energy: 0,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.theNaughtyList, 2],
    [card.betterWatchOut, 2],
    [card.bellRinger, 2],
    [card.christmasRush, 2],
    [card.milkCookies, 1],
    [card.theNiceList, 1] 
  ],
  {
    team: 'Santa Claus Father',
    owner: 'santa_claus_father_christmas',
    color: 'red'
  }
);

export default deck;
