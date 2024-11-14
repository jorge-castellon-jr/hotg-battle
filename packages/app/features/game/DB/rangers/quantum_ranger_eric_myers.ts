import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  quantumTrigger: {
    name: 'Quantum Trigger',
    type: 'maneuver',
    text: [
      'Gain an amount of energy equal to the ¤ result of your quantum die. Reroll your quantum die and draw up to 2 cards. You may then immediately play 1 additional card.',
    ],
    energy: 0,
    shields: 1, 
  },

  soloShot: {
    name: 'Solo Shot',
    type: 'attack',
    text: [
      'If you are the only player with a Ranger in this location, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  quantumCut: {
    name: 'Quantum Cut',
    type: 'attack',
    text: [
      'Before rolling, add a number of dice to this attack equal to the ¤ result of your quantum die. Then reroll your quantum die.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  focusedStrike: {
    name: 'Focused Strike',
    type: 'attack',
    text: [
      'After rolling, you may convert 1 ○ result to a ¤ result or convert 1 ¤ result to a ¤¤ result.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  silverGuardian: {
    name: 'Silver Guardian',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by an amount equal to double the ¤ result of your quantum die. You may then return 1 card from your discard pile to your hand.',
    ],
    energy: 0,
    shields: 1, 
  },

  quantumDefender: {
    name: 'Quantum Defender',
    type: 'attack',
    text: [
      'After you resolve this attack, deal the ¤ result of your quantum die to each enemy card adjacent to the target.',
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
    [card.quantumTrigger, 2],
    [card.soloShot, 2],
    [card.quantumCut, 2],
    [card.focusedStrike, 2],
    [card.silverGuardian, 1],
    [card.quantumDefender, 1] 
  ],
  {
    team: 'Quantum Ranger Eric',
    owner: 'quantum_ranger_eric_myers',
    color: 'unknown'
  }
);

export default deck;
