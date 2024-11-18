import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  gorillaSmash: {
    name: 'Gorilla Smash',
    type: 'attack',
    text: [
      '★ When this card is revealed for defense, deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  heavyThrow: {
    name: 'Heavy Throw',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
      '★ When this card is revealed for defense, another Ranger may draw 1 card.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  battleforceTechnique: {
    name: 'Battleforce Technique',
    type: 'maneuver',
    text: [
      'Choose 1 card each from 2 different Ranger discard piles. Place those cards on top of their respective decks.',
      '★ When this card is revealed for defense, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
  },

  overheat: {
    name: 'Overheat',
    type: 'reaction',
    text: [
      'Play this card when you perform an attack. Add 2 dice to that attack. If that attack defeats the target, a Ranger of your choice must suffer 3 damage.',
    ],
    energy: 1,
    shields: 3, 
  },

  beastxBlaster: {
    name: 'BeastX Blaster',
    type: 'attack',
    text: [
      'This attack deals an amount of ¤ equal to the amount of energy spent to play this card. Place this card on the bottom of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  beastxCannon: {
    name: 'BeastX Cannon',
    type: 'attack',
    text: [
      'Add a number of dice to this attack equal to the amount of energy spent to play this card. If this attack defeats the target, deal 1 ¤ to each enemy card adjacent to the target.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.gorillaSmash, 2],
    [card.heavyThrow, 2],
    [card.battleforceTechnique, 2],
    [card.overheat, 2],
    [card.beastxBlaster, 1],
    [card.beastxCannon, 1] 
  ],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_blue_ravi_shaw',
    color: 'blue'
  }
);

export default deck;
