import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  cleverTactics: {
    name: 'Clever Tactics',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Any Ranger may choose 1 card from their discard pile and add it to their hand. Place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
  },

  perfectStrike: {
    name: 'Perfect Strike',
    type: 'attack',
    text: [
      'If Samurai Shield is in your hand, place this card on top of your deck instead of discarding it. Otherwise, you may reroll any number of dice during this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  crossCounter: {
    name: 'Cross Counter',
    type: 'reaction',
    text: [
      'Play this card when an enemy card deals damage to a Ranger. If Samurai Shield is in your hand, reduce that damage by 2. Otherwise, deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 2, 
  },

  cycloneSlash: {
    name: 'Cyclone Slash',
    type: 'attack',
    text: [
      'After you resolve this attack, if Samurai Shield is in your hand, you may discard it to perform a second attack with 3 dice.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  samuraiShield: {
    name: 'Samurai Shield',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense. Add 2 shields to that card.',
    ],
    energy: 0,
    shields: 1, 
  },

  samuraiSaber: {
    name: 'Samurai Saber',
    type: 'attack',
    text: [
      'After you resolve this attack, if Samurai Shield is in your hand, gain 1 energy. Otherwise, you may perform a second attack with 2 dice.',
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
    [card.cleverTactics, 2],
    [card.perfectStrike, 2],
    [card.crossCounter, 2],
    [card.cycloneSlash, 2],
    [card.samuraiShield, 1],
    [card.samuraiSaber, 1] 
  ],
  {
    team: '',
    owner: 'green_samurai_ranger_cameron_watanabe',
    color: 'green'
  }
);

export default deck;
