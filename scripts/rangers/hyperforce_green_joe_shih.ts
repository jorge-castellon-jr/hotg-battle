import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  venomCharge: {
    name: 'Venom Charge',
    type: 'maneuver',
    text: [
      'Attach this card to an enemy card. At the end of each enemy turn in battle, deal 1 ¤ to that enemy card. Another Ranger may immediately play 1 card.',
    ],
    energy: 2,
    shields: 1, 
  },

  hydraShield: {
    name: 'Hydra Shield',
    type: 'reaction',
    text: [
      'Play this card after any Ranger performs a maneuver. Gain 1 energy and place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
  },

  hydraCoil: {
    name: 'Hydra Coil',
    type: 'attack',
    text: [
      'After you resolve this attack, attach this card to the target. Deal 1 ¤ to the attached enemy card after it resolves.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
        fixed: true, 
      }, 
    ], 
  },

  enduringStrike: {
    name: 'Enduring Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, choose 1 card from your discard pile and place it on the bottom of your deck.',
    ],
    energy: 1,
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

  rheaSwords: {
    name: 'Rhea Swords',
    type: 'attack',
    text: [
      'After you resolve this attack, you may perform a second attack with 2 dice. Then you may perform a third attack with 3 dice.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.venomCharge, 2],
    [card.hydraShield, 2],
    [card.hydraCoil, 2],
    [card.enduringStrike, 2],
    [card.bladeBlaster, 1],
    [card.rheaSwords, 1] 
  ],
  {
    team: 'Hyperforce',
    owner: 'hyperforce_green_joe_shih',
    color: 'green'
  }
);

export default deck;
