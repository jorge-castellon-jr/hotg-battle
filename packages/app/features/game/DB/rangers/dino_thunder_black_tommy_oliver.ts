import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  finishingBlow: {
    name: 'Finishing Blow',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each hit token on the targeted enemy card.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  jurassicCounter: {
    name: 'Jurassic Counter',
    type: 'reaction',
    text: [
      'Play this card when an enemy card deals damage to any Ranger. Gain 1 energy and deal 1 ¤ to that enemy card.',
    ],
    energy: 0,
    shields: 2, 
  },

  waveStrike: {
    name: 'Wave Strike',
    type: 'attack',
    text: [
      'You must deal the ¤ of each die from this attack to a different target.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  fireStrike: {
    name: 'Fire Strike',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack, that Ranger may reroll any number of dice during that attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  energyOrb: {
    name: 'Energy Orb',
    type: 'attack',
    text: [
      'Skip the next Ranger turn in this battle.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 5, 
      }, 
    ], 
  },

  brachioStaff: {
    name: 'Brachio Staff',
    type: 'maneuver',
    text: [
      'Choose two cards in your discard pile with an energy cost of 1 or less and play them both without paying their energy costs.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.finishingBlow, 2],
    [card.jurassicCounter, 2],
    [card.waveStrike, 2],
    [card.fireStrike, 2],
    [card.energyOrb, 1],
    [card.brachioStaff, 1] 
  ],
  {
    team: 'Dino Thunder',
    owner: 'dino_thunder_black_tommy_oliver',
    color: 'black'
  }
);

export default deck;
