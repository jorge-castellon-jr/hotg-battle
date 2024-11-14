import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  defiantStrike: {
    name: 'Defiant Strike',
    type: 'attack',
    text: [
      '★ When this card is revealed for defense, choose a resolved enemy card and deal it an amount of ¤ equal to this card\'s shield value.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  doOrDie: {
    name: 'Do Or Die',
    type: 'attack',
    text: [
      'If at least 2 Ranger Operator Series Black cards are removed from the game, gain 2 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  defyFate: {
    name: 'Defy Fate',
    type: 'maneuver',
    text: [
      'Deal 1 ¤ to an enemy card of your choice. Then choose 1 combat card that is removed from the game and return it to the top of the corresponding Ranger deck.',
    ],
    energy: 0,
    shields: 2, 
  },

  finalImpact: {
    name: 'Final Impact',
    type: 'attack',
    text: [
      'For each energy spent to play this card, add 2 dice to this attack. After resolving this attack, remove this card from the game.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
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

  rocketBlaster: {
    name: 'Rocket Blaster',
    type: 'attack',
    text: [
      'For each Ranger Operator Series Black card that is removed from the game, reduce the energy cost of this card by 1 and add 1 die to this attack.',
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
    [card.defiantStrike, 2],
    [card.doOrDie, 2],
    [card.defyFate, 2],
    [card.finalImpact, 2],
    [card.nitroBlaster, 1],
    [card.rocketBlaster, 1] 
  ],
  {
    team: 'Ranger Operator Series',
    owner: 'ranger_operator_series_black_dillon',
    color: 'black'
  }
);

export default deck;
