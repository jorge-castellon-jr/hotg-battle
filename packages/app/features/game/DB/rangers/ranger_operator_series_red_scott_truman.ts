import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  attackSequenceMustang: {
    name: 'Attack Sequence Mustang',
    type: 'reaction',
    text: [
      'Play this card at the start of any enemy turn in battle. For each energy spent to play this card, reduce all damage dealt to Rangers by 1 until the end of this turn.',
    ],
    energy: 0,
    shields: 1, 
  },

  condorStrike: {
    name: 'Condor Strike',
    type: 'attack',
    text: [
      'Deal 1 ¤ to a number of enemy cards, other than the target, equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  redlineSlash: {
    name: 'Redline Slash',
    type: 'attack',
    text: [
      'If there is no energy in the shared pool, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  revTheEngines: {
    name: 'Rev The Engines',
    type: 'maneuver',
    text: [
      'Gain 1 energy. The next time any Ranger performs an attack in this battle, add 2 dice to that attack.',
    ],
    energy: 0,
    shields: 3, 
  },

  nitroBlaster: {
    name: 'Nitro Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among a number of targets equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  streetSaberStrike: {
    name: 'Street Saber Strike',
    type: 'attack',
    text: [
      'Before rolling, if any effects add dice to this attack, you may choose 1 of those effects and apply it an additional time.',
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
    [card.attackSequenceMustang, 2],
    [card.condorStrike, 2],
    [card.redlineSlash, 2],
    [card.revTheEngines, 2],
    [card.nitroBlaster, 1],
    [card.streetSaberStrike, 1] 
  ],
  {
    team: 'Ranger Operator Series',
    owner: 'ranger_operator_series_red_scott_truman',
    color: 'red'
  }
);

export default deck;
