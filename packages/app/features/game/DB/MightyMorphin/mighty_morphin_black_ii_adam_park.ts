import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  rapidHit: {
    name: 'Rapid Hit',
    type: 'attack',
    text: [
      'After you resolve this attack, perform a second attack with 1 die. While this card is the top card of your discard pile, add 1 die to each of your attacks.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  leapfrogStrike: {
    name: 'Leapfrog Strike',
    type: 'attack',
    text: [
      'While this card is the top card of your discard pile, gain 1 energy each time you perform an attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  exploitOpening: {
    name: 'Exploit Opening',
    type: 'reaction',
    text: [
      'Play this card when another Ranger defeats an enemy card with an attack. Deal 1 ¤ to an enemy card adjacent to the target.',
    ],
    energy: 0,
    shields: 2, 
  },

  cosmicCannon: {
    name: 'Cosmic Cannon',
    type: 'attack',
    text: [
      'While this card is the top card of your discard pile, ignore the GUARD keyword when choosing targets for your attacks.',
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

  powerAxe: {
    name: 'Power Axe',
    type: 'attack',
    text: [
      'After rolling, choose 2 dice from this attack and deal that much ¤ to each enemy card adjacent to the target.',
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
    [card.rapidHit, 2],
    [card.leapfrogStrike, 2],
    [card.exploitOpening, 2],
    [card.cosmicCannon, 2],
    [card.bladeBlaster, 1],
    [card.powerAxe, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_black_ii_adam_park',
    color: 'black'
  }
);

export default deck;
