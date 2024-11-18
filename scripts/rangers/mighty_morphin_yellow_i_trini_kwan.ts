import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  twinfangTeamwork: {
    name: 'TwinFang Teamwork',
    type: 'reaction',
    text: [
      'Play this card after another Ranger resolves an attack to deal 1 ¤ to the target of that attack.',
    ],
    energy: 0,
    shields: 2, 
  },

  tenacity: {
    name: 'Tenacity',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Choose 2 cards from your discard pile and return them to the top of your deck, in any order.',
    ],
    energy: 0,
    shields: 2, 
  },

  sabertoothStrike: {
    name: 'Sabertooth Strike',
    type: 'attack',
    text: [
      'If this attack defeats the target, you may immediately perform a second attack with 2 dice.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  preciseStrike: {
    name: 'Precise Strike',
    type: 'attack',
    text: [
      'After you play this card, you may spend 1 energy to shuffle it back into your deck instead of discarding it.',
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

  powerDaggers: {
    name: 'Power Daggers',
    type: 'attack',
    text: [
      'After you resolve this attack, a Ranger of your choice may immediately play 1 card.',
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
    [card.twinfangTeamwork, 2],
    [card.tenacity, 2],
    [card.sabertoothStrike, 2],
    [card.preciseStrike, 2],
    [card.bladeBlaster, 1],
    [card.powerDaggers, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_yellow_i_trini_kwan',
    color: 'yellow'
  }
);

export default deck;
