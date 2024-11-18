import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  fingerGuns: {
    name: 'Finger Guns',
    type: 'attack',
    text: [
      'Point at one or two enemy cards and say "pew pew." This attack deals 2 ¤, divided as you choose between those enemy cards.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  fightOrFlight: {
    name: 'Fight Or Flight',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to flip a coin: If heads, deal 2 ¤ to an enemy card of your choice. If tails, reduce the damage by 2.',
    ],
    energy: 0,
    shields: 2, 
  },

  chanceyChop: {
    name: 'Chancey Chop',
    type: 'attack',
    text: [
      'Before rolling, choose evens or odds. If the number of ¤ results you roll matches your choice, gain 1 energy and return this card to your hand instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  highfiveStrike: {
    name: 'HighFive Strike',
    type: 'attack',
    text: [
      'Offer a high five to another Ranger in your location. If they accept, that Ranger may immediately play 1 card, reducing its energy cost by 1.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  cockroachCombo: {
    name: 'Cockroach Combo',
    type: 'attack',
    text: [
      'Another Ranger may discard 1 card from their hand to add 2 dice to this attack. If the card is named Cockroach Combo, add 4 dice instead.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  powerNap: {
    name: 'Power Nap',
    type: 'maneuver',
    text: [
      'Roll 5 dice. For each ¤ result, any Ranger may choose 1 card from their discard pile and return it to the top of their deck.',
    ],
    energy: 2,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.fingerGuns, 2],
    [card.fightOrFlight, 2],
    [card.chanceyChop, 2],
    [card.highfiveStrike, 2],
    [card.cockroachCombo, 1],
    [card.powerNap, 1] 
  ],
  {
    team: 'Mighty Morphin Orange Eugene Skull',
    owner: 'mighty_morphin_orange_eugene_skull_skullovitch',
    color: 'unknown'
  }
);

export default deck;
