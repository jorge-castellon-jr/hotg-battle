import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  moonFangPiercer: {
    name: 'Moon Fang Piercer',
    type: 'attack',
    text: [
      'Before rolling, remove 1 die from this attack for each card remaining in your hand.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 5, 
      }, 
    ], 
  },

  risingMoon: {
    name: 'Rising Moon',
    type: 'maneuver',
    text: [
      'Draw 1 card, then choose any number of cards from your hand and place them on top of your deck. Any Ranger may immediately play 1 card.',
    ],
    energy: 0,
    shields: 2, 
  },

  coveringStrike: {
    name: 'Covering Strike',
    type: 'attack',
    text: [
      'Before you perform this attack, any Ranger may choose 1 card from their hand and place it on top of their deck.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  meteorSmash: {
    name: 'Meteor Smash',
    type: 'attack',
    text: [
      'Before rolling, you may discard 1 card from your hand to either gain 1 energy or add 1 die to this attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  astroBlaster: {
    name: 'Astro Blaster',
    type: 'reaction',
    text: [
      'Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 ¤ to that attack for each energy spent to play this card (max 3).',
    ],
    energy: 0,
    shields: 1, 
  },

  lunarLance: {
    name: 'Lunar Lance',
    type: 'attack',
    text: [
      'You may discard 2 cards from your hand instead of paying this card\'s energy cost.',
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
    [card.moonFangPiercer, 2],
    [card.risingMoon, 2],
    [card.coveringStrike, 2],
    [card.meteorSmash, 2],
    [card.astroBlaster, 1],
    [card.lunarLance, 1] 
  ],
  {
    team: '',
    owner: 'black_space_ranger_carlos_vallerte',
    color: 'black'
  }
);

export default deck;
