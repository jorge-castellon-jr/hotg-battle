import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  crestingStrike: {
    name: 'Cresting Strike',
    type: 'attack',
    text: [
      'Draw 1 card from your key deck.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sixfoldGuard: {
    name: 'Sixfold Guard',
    type: 'reaction',
    text: [
      'Play this card when you reveal a card for defense. Gain 1 energy and draw 1 card from your key deck. Add the shield value of the drawn card to the shield value of the revealed card.',
    ],
    energy: 0,
    shields: 2, 
  },

  activateRangerKey: {
    name: 'Activate Ranger Key',
    type: 'maneuver',
    text: [
      'Gain the character ability of 1 of your key deck\'s linked character cards until the end of this battle. Another Ranger may immediately play 1 card.',
    ],
    energy: 0,
    shields: 2, 
  },

  sixfoldStrike: {
    name: 'Sixfold Strike',
    type: 'attack',
    text: [
      'You may discard 1 key card to return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  legendaryFinalStrike: {
    name: 'Legendary Final Strike',
    type: 'maneuver',
    text: [
      'Play any number of key cards, one at a time, with a total shield value of up to 6 shields.',
    ],
    energy: 1,
    shields: 1, 
  },

  superSilverSpear: {
    name: 'Super Silver Spear',
    type: 'attack',
    text: [
      'Draw up to 3 cards from your key deck.',
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
    [card.crestingStrike, 2],
    [card.sixfoldGuard, 2],
    [card.activateRangerKey, 2],
    [card.sixfoldStrike, 2],
    [card.legendaryFinalStrike, 1],
    [card.superSilverSpear, 1] 
  ],
  {
    team: 'Super Megaforce',
    owner: 'super_megaforce_silver_orion',
    color: 'silver'
  }
);

export default deck;
