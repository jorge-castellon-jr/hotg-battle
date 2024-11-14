import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  takeAim: {
    name: 'Take Aim',
    type: 'maneuver',
    text: [
      'Gain 1 energy. You may immediately play another card. If that card is an attack, you may reroll any number of dice during that attack.',
    ],
    energy: 0,
    shields: 1, 
  },

  preciseShot: {
    name: 'Precise Shot',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  rapidFire: {
    name: 'Rapid Fire',
    type: 'reaction',
    text: [
      'Play this card when any Ranger rolls any ○ results during an attack. Add 2 dice to that attack.',
    ],
    energy: 1,
    shields: 2, 
  },

  trickShot: {
    name: 'Trick Shot',
    type: 'attack',
    text: [
      'If you roll any ○ results during this attack, deal 1 ¤ to an enemy card that is not adjacent to the target.',
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

  starSlinger: {
    name: 'Star Slinger',
    type: 'attack',
    text: [
      'After rolling, choose 2 dice from this attack and deal that much ¤ each to up to 2 enemy cards that are not adjacent to the target.',
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
    [card.takeAim, 2],
    [card.preciseShot, 2],
    [card.rapidFire, 2],
    [card.trickShot, 2],
    [card.astroBlaster, 1],
    [card.starSlinger, 1] 
  ],
  {
    team: '',
    owner: 'yellow_space_ranger_ashley_hammond',
    color: 'yellow'
  }
);

export default deck;
