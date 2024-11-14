import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  agileShot: {
    name: 'Agile Shot',
    type: 'attack',
    text: [
      '★ When this card is revealed for defense, you may swap it with a card from your hand. (Apply the shield value of that card instead.)',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  fancyFootwork: {
    name: 'Fancy Footwork',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Gain 1 energy. That Ranger may look at the top 2 cards of their deck and place each card on the top or bottom of their deck, in any order.',
    ],
    energy: 0,
    shields: 2, 
  },

  catsGrace: {
    name: 'Cats Grace',
    type: 'maneuver',
    text: [
      'Reveal the top card of your deck. If it is an attack, you may immediately play it and add 1 die to that attack. You may place this card on the bottom of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
  },

  taichiCombo: {
    name: 'TaiChi Combo',
    type: 'attack',
    text: [
      'Look at the top 2 cards of your deck. Place each card on the top or bottom of your deck in any order.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
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
    [card.agileShot, 2],
    [card.fancyFootwork, 2],
    [card.catsGrace, 2],
    [card.taichiCombo, 2],
    [card.bladeBlaster, 1],
    [card.powerBow, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_pink_ii_katherine_hillard',
    color: 'pink'
  }
);

export default deck;
