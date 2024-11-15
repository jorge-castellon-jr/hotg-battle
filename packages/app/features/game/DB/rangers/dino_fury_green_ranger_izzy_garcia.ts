import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  jadeJavelin: {
    name: 'Jade Javelin',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack. Reveal 1 card from your hand and add 1 die to this attack for each chromafury icon on that card.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sprintDinokey: {
    name: 'Sprint DinoKey',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. The Rangers may ignore the FAST keyword to take the first turn in battle.',
      '▼',
    ],
    energy: 1,
    shields: 2, 
  },

  muscleDinokey: {
    name: 'Muscle DinoKey',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. Add 1 die to that attack.',
      '▼',
    ],
    energy: 0,
    shields: 2, 
  },

  moldBreaker: {
    name: 'Mold Breaker',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Any Ranger may discard a maneuver or reaction card to perform an attack with 2 dice. If that card has a ★ or chromafury icon, add 2 dice to that attack.',
    ],
    energy: 0,
    shields: 3, 
  },

  chromafurySaber: {
    name: 'Chromafury Saber',
    type: 'attack',
    text: [
      '▼ ▼',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  tigerFuryStrike: {
    name: 'Tiger Fury Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, perform an additional attack with a number of dice equal to the number of chromafury icons in your hand.',
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
    [card.jadeJavelin, 2],
    [card.sprintDinokey, 2],
    [card.muscleDinokey, 2],
    [card.moldBreaker, 2],
    [card.chromafurySaber, 1],
    [card.tigerFuryStrike, 1] 
  ],
  {
    team: 'Dino Fury',
    owner: 'dino_fury_green_ranger_izzy_garcia',
    color: 'green'
  }
);

export default deck;
