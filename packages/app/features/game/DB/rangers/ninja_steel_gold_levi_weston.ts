import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  harmonize: {
    name: 'Harmonize',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play 1 card. After that card resolves, choose 1 card with the same shield value from your discard pile and add it to your hand.',
    ],
    energy: 0,
    shields: 1, 
  },

  tornadoSlashes: {
    name: 'Tornado Slashes',
    type: 'attack',
    text: [
      'If this attack defeats the target, gain 2 energy.',
    ],
    energy: 2,
    shields: 2, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  },

  stormStarLightning: {
    name: 'Storm Star Lightning',
    type: 'maneuver',
    text: [
      'Choose 1 enemy card, then deal 1 ¤ to each enemy card adjacent to it. You may discard 1 card from your hand to repeat this effect once.',
    ],
    energy: 1,
    shields: 2, 
  },

  openingAct: {
    name: 'Opening Act',
    type: 'attack',
    text: [
      'Draw 1 card. Another Ranger may immediately play 1 card with an energy cost of 1.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  superstarSupercharge: {
    name: 'Superstar Supercharge',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each energy spent to play this card. If this card is not the first card played during this turn, add 2 more dice to this attack.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  rockstormGuitar: {
    name: 'Rockstorm Guitar',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 4,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
      {
        value: 4, 
        fixed: true, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.harmonize, 2],
    [card.tornadoSlashes, 2],
    [card.stormStarLightning, 2],
    [card.openingAct, 2],
    [card.superstarSupercharge, 1],
    [card.rockstormGuitar, 1] 
  ],
  {
    team: 'Ninja Steel',
    owner: 'ninja_steel_gold_levi_weston',
    color: 'gold'
  }
);

export default deck;
