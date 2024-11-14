import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  takeAim: {
    name: 'Take Aim',
    type: 'maneuver',
    text: [
      'Gain 1 energy. You may immediately play another card. If it is an attack, you may reroll any number of dice during that attack.',
    ],
    energy: 0,
    shields: 1, 
  },

  flyingKick: {
    name: 'Flying Kick',
    type: 'attack',
    text: [
      'Gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  arrowShot: {
    name: 'Arrow Shot',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  acrobatics: {
    name: 'Acrobatics',
    type: 'reaction',
    text: [
      'Play this card when you reveal a card for defense to add the revealed card to your hand instead of discarding it or placing it on the bottom of your deck.',
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

  powerBow: {
    name: 'Power Bow',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
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
    [card.takeAim, 2],
    [card.flyingKick, 2],
    [card.arrowShot, 2],
    [card.acrobatics, 2],
    [card.bladeBlaster, 1],
    [card.powerBow, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_pink_i_kimberly_ann_hart',
    color: 'pink'
  }
);

export default deck;
