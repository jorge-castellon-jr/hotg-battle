import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  wolfBuster: {
    name: 'Wolf Buster',
    type: 'attack',
    text: [
      'If the previous combat card played in this battle was a maneuver, you may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  wolfFangStrike: {
    name: 'Wolf Fang Strike',
    type: 'attack',
    text: [
      'If the previous combat card played in this battle was a reaction, gain 1 energy or add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  goWithTheFlow: {
    name: 'Go With The Flow',
    type: 'reaction',
    text: [
      'Play this card when another Ranger performs a reaction. This card gains the effect text of that reaction card.',
    ],
    energy: 0,
    shields: 2, 
  },

  swoopTechnique: {
    name: 'Swoop Technique',
    type: 'maneuver',
    text: [
      'Reveal the top card of your deck. If it is an attack, you may immediately play it and add 1 die to that attack. Otherwise, perform an attack with 2 dice.',
    ],
    energy: 0,
    shields: 3, 
  },

  paiZhuaStrike: {
    name: 'Pai Zhua Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger may choose a maneuver or reaction from their discard pile and add it to their hand.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  spiritOfTheWolf: {
    name: 'Spirit Of The Wolf',
    type: 'attack',
    text: [
      'If the previous combat card played in this battle was a maneuver or reaction, add 2 ¤ to this attack. Otherwise, reduce the energy cost of this card by 1.',
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
    [card.wolfBuster, 2],
    [card.wolfFangStrike, 2],
    [card.goWithTheFlow, 2],
    [card.swoopTechnique, 2],
    [card.paiZhuaStrike, 1],
    [card.spiritOfTheWolf, 1] 
  ],
  {
    team: 'Jungle Fury Wolf Ranger Robert Rj',
    owner: 'jungle_fury_wolf_ranger_robert_rj_james',
    color: 'unknown'
  }
);

export default deck;
