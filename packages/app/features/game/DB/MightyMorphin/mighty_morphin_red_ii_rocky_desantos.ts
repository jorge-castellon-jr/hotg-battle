import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  sturdyBlow: {
    name: 'Sturdy Blow',
    type: 'attack',
    text: [
      '★ When this card is revealed for defense, it gains +1 shield.',
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

  squareUp: {
    name: 'Square Up',
    type: 'reaction',
    text: [
      'Play this card at the end of any turn in battle. If you suffered damage during this turn, gain 1 energy and place this card on top of your deck.',
    ],
    energy: 0,
    shields: 2, 
  },

  riskyMoves: {
    name: 'Risky Moves',
    type: 'maneuver',
    text: [
      'Suffer up to 3 damage. Another Ranger may immediately play 1 card. If it is an attack, add a number of dice to that attack equal to the amount of damage you suffered.',
    ],
    energy: 1,
    shields: 2, 
  },

  haymaker: {
    name: 'Haymaker',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each shield on the top card of your discard pile.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 1, 
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

  powerSword: {
    name: 'Power Sword',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack during this battle, add 2 dice to that attack.',
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
    [card.sturdyBlow, 2],
    [card.squareUp, 2],
    [card.riskyMoves, 2],
    [card.haymaker, 2],
    [card.bladeBlaster, 1],
    [card.powerSword, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_red_ii_rocky_desantos',
    color: 'red'
  }
);

export default deck;
