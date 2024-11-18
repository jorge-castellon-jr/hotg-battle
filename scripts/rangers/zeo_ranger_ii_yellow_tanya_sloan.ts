import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  rapidKicks: {
    name: 'Rapid Kicks',
    type: 'attack',
    text: [
      'After rolling, remove 2 dice from this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  },

  interceptingStrike: {
    name: 'Intercepting Strike',
    type: 'reaction',
    text: [
      'Play this card when any Ranger discards a card for defense. Deal an amount of ¤ equal to the number of shields on the discarded card to an enemy card of your choice.',
    ],
    energy: 1,
    shields: 2, 
  },

  chainCombo: {
    name: 'Chain Combo',
    type: 'attack',
    text: [
      'After rolling, remove 1 die from this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  buildingMomentum: {
    name: 'Building Momentum',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Any Ranger may immediately play 1 card with an energy cost of zero. If that card is an attack, add 1 die to that attack, then after rolling remove 1 die from that attack.',
    ],
    energy: 0,
    shields: 2, 
  },

  powerPodSword: {
    name: 'Power Pod Sword',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that ¤ among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
  },

  powerDoubleClubs: {
    name: 'Power Double Clubs',
    type: 'attack',
    text: [
      'After rolling, remove 2 dice from this attack. Then perform a second attack with 2 dice, targeting an enemy card adjacent to the first target.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 5, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.rapidKicks, 2],
    [card.interceptingStrike, 2],
    [card.chainCombo, 2],
    [card.buildingMomentum, 2],
    [card.powerPodSword, 1],
    [card.powerDoubleClubs, 1] 
  ],
  {
    team: 'Zeo Ranger Ii',
    owner: 'zeo_ranger_ii_yellow_tanya_sloan',
    color: 'yellow'
  }
);

export default deck;
