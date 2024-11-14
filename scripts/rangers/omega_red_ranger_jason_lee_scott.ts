import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  readyStance: {
    name: 'Ready Stance',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Deal 1 ¤ to an enemy card of your choice. Place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
  },

  takeTheInitiative: {
    name: 'Take The Initiative',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. The Rangers may either ignore the FAST keyword to take the first turn in battle or ignore the GUARD keyword during their first turn in battle.',
    ],
    energy: 1,
    shields: 2, 
  },

  leadingSlash: {
    name: 'Leading Slash',
    type: 'attack',
    text: [
      'After rolling, you may remove any number of dice from this attack. The next time any Ranger performs an attack during this battle, add an equal number of dice to that attack.',
    ],
    energy: 1,
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
      'The next time any Ranger performs an attack during this battle, they may reroll any number of dice during that attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  omegaForever: {
    name: 'Omega Forever',
    type: 'reaction',
    text: [
      'Play this card at the end of a battle. Roll 2 dice and deal that much ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
  },

  omegaKatana: {
    name: 'Omega Katana',
    type: 'attack',
    text: [
      'You may reroll any number of dice during this attack.',
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
    [card.readyStance, 2],
    [card.takeTheInitiative, 2],
    [card.leadingSlash, 2],
    [card.fireStrike, 2],
    [card.omegaForever, 1],
    [card.omegaKatana, 1] 
  ],
  {
    team: 'Omega',
    owner: 'omega_red_ranger_jason_lee_scott',
    color: 'red'
  }
);

export default deck;
