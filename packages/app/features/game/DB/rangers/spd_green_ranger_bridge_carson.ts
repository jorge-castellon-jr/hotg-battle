import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  greenCrash: {
    name: 'Green Crash',
    type: 'reaction',
    text: [
      'Play this card when an effect would reduce a card\'s energy cost below zero. Gain 1 energy. Deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
  },

  setupStrike: {
    name: 'Setup Strike',
    type: 'attack',
    text: [
      'The next time any Ranger plays a card during this battle, reduce its energy cost by 1.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  gotYouCovered: {
    name: 'Got You Covered',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Choose up to 2 cards from other Ranger discard piles and place those cards on the bottom of their respective decks in any order.',
    ],
    energy: 0,
    shields: 2, 
  },

  sweepingShot: {
    name: 'Sweeping Shot',
    type: 'attack',
    text: [
      'After you resolve this attack, deal 1 ¤ to a foot soldier card of your choice.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  deltamaxFire: {
    name: 'Deltamax Fire',
    type: 'maneuver',
    text: [
      'Perform an attack with 3 dice that targets a foot soldier card of your choice. Another Ranger may then perform an attack with 3 dice that targets a different foot soldier card.',
    ],
    energy: 2,
    shields: 1, 
  },

  deltamaxBooster: {
    name: 'Deltamax Booster',
    type: 'attack',
    text: [
      'The next time any Ranger plays a card during this battle, reduce its energy cost by 3.',
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
    [card.greenCrash, 2],
    [card.setupStrike, 2],
    [card.gotYouCovered, 2],
    [card.sweepingShot, 2],
    [card.deltamaxFire, 1],
    [card.deltamaxBooster, 1] 
  ],
  {
    team: 'Spd',
    owner: 'spd_green_ranger_bridge_carson',
    color: 'green'
  }
);

export default deck;
