import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  counterJab: {
    name: 'Counter Jab',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
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

  tacticalStrike: {
    name: 'Tactical Strike',
    type: 'attack',
    text: [
      'After you play this card, place it on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  knowledgeIsPower: {
    name: 'Knowledge Is Power',
    type: 'maneuver',
    text: [
      'Gain 1 energy. A Ranger of your choice may search their deck for a card and add it to their hand. If they do, they must shuffle their deck.',
    ],
    energy: 0,
    shields: 2, 
  },

  mightyMaces: {
    name: 'Mighty Maces',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, gain 1 energy.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 3, 
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

  powerLance: {
    name: 'Power Lance',
    type: 'attack',
    text: [
      'After you play this card, place it on top of your deck instead of discarding it.',
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
    [card.counterJab, 2],
    [card.tacticalStrike, 2],
    [card.knowledgeIsPower, 2],
    [card.mightyMaces, 2],
    [card.bladeBlaster, 1],
    [card.powerLance, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_blue_billy_cranston',
    color: 'blue'
  }
);

export default deck;
