import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  quickThinking: {
    name: 'Quick Thinking',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Gain 1 energy. That Ranger may draw up to 2 cards, then choose up to 2 cards from their hand and place them on top of their deck, in any order.',
    ],
    energy: 0,
    shields: 1, 
  },

  strikerSaberGold: {
    name: 'Striker Saber Gold',
    type: 'attack',
    text: [
      'Any Ranger may reveal a card from their hand with "Striker Saber" in its name to add 1 die to this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  strikerBeastBlast: {
    name: 'Striker Beast Blast',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger may discard a copy of Striker Beast Blast from their hand to perform an attack with 2 dice.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  beastBotsGo: {
    name: 'Beast Bots Go',
    type: 'reaction',
    text: [
      'Play this card in any battle, regardless of location, after any Ranger uses a "once per battle" ability. That Ranger may draw 1 card, gain 1 energy. or deal 1 ¤ to an enemy card of their choice.',
    ],
    energy: 0,
    shields: 3, 
  },

  legendaryArsenal: {
    name: 'Legendary Arsenal',
    type: 'maneuver',
    text: [
      'Choose 1 combat card from the game box with an energy cost of 3 or X. Play it, then remove it from the game after it resolves. If its energy cost is X, treat it as though you spent 3 energy to play it.',
    ],
    energy: 4,
    shields: 1, 
  },

  beastxKingUltraBow: {
    name: 'BeastX King Ultra Bow',
    type: 'attack',
    text: [
      'Any Ranger may draw a number of cards equal to the amount of energy spent to play this card. Add 2 dice to this attack for each card drawn this way.',
    ],
    energy: 0,
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
    [card.quickThinking, 2],
    [card.strikerSaberGold, 2],
    [card.strikerBeastBlast, 2],
    [card.beastBotsGo, 2],
    [card.legendaryArsenal, 1],
    [card.beastxKingUltraBow, 1] 
  ],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_gold_nate_silva',
    color: 'gold'
  }
);

export default deck;
