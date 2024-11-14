import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  discipline: {
    name: 'Discipline',
    type: 'reaction',
    text: [
      'When any Ranger performs an attack, play this card to allow that Ranger to reroll any number of dice.',
    ],
    energy: 0,
    shields: 1, 
  },

  strafeBurst: {
    name: 'Strafe Burst',
    type: 'attack',
    text: [
      'For each ○ rolled during this attack, deal 1 ¤ to an enemy card adjacent to your target.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  burnOut: {
    name: 'Burn Out',
    type: 'attack',
    text: [
      'After rolling, you may choose 1 die from this attack and deal its ¤ to an enemy card adjacent to the target instead.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  holdTheLine: {
    name: 'Hold The Line',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Each Ranger in this battle may draw 1 card and then place 1 card from their hand back on top of their deck.',
    ],
    energy: 0,
    shields: 3, 
  },

  spinSword: {
    name: 'Spin Sword',
    type: 'attack',
    text: [
      'Before rolling, you may spend any amount of energy to add that many dice to this attack.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  blackBox: {
    name: 'Black Box',
    type: 'maneuver',
    text: [
      'You may immediately play another card. If it is an attack, double the ¤ dealt by that attack.',
    ],
    energy: 2,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.discipline, 2],
    [card.strafeBurst, 2],
    [card.burnOut, 2],
    [card.holdTheLine, 2],
    [card.spinSword, 1],
    [card.blackBox, 1] 
  ],
  {
    team: 'Super Samurai',
    owner: 'super_samurai_red_lauren_shiba',
    color: 'red'
  }
);

export default deck;
