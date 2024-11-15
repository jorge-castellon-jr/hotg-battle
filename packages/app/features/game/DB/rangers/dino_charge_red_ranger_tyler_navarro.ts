import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  goForIt: {
    name: 'Go For It',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play 1 attack card. They may ignore the GUARD keyword or reroll any number of dice during that attack. If you have already used your once-per-battle ability during this battle, they may do both.',
    ],
    energy: 0,
    shields: 1, 
  },

  wildPunch: {
    name: 'Wild Punch',
    type: 'attack',
    text: [
      'After you resolve this attack, you may place up to 2 cards from your hand on top of your deck. Gain 1 energy for each card.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  forwardMotion: {
    name: 'Forward Motion',
    type: 'reaction',
    text: [
      'Play this card when another Ranger performs an attack. Before they roll, draw 1 card, gain 1 energy, and add 1 die to that attack.',
    ],
    energy: 0,
    shields: 2, 
  },

  finalStrike: {
    name: 'Final Strike',
    type: 'attack',
    text: [
      'If you have already used your once-per-battle ability during this battle, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  dinoSaber: {
    name: 'Dino Saber',
    type: 'attack',
    text: [
      'Any Ranger may draw 1 card. If they do, you may ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  trexSmasher: {
    name: 'TRex Smasher',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack during this battle, add 2 dice to that attack.',
    ],
    energy: 2,
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
    [card.goForIt, 2],
    [card.wildPunch, 2],
    [card.forwardMotion, 2],
    [card.finalStrike, 2],
    [card.dinoSaber, 1],
    [card.trexSmasher, 1] 
  ],
  {
    team: 'Dino Charge',
    owner: 'dino_charge_red_ranger_tyler_navarro',
    color: 'red'
  }
);

export default deck;
