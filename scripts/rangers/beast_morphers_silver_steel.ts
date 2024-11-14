import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  silverSwagger: {
    name: 'Silver Swagger',
    type: 'maneuver',
    text: [
      'Discard the top card of your deck. Another Ranger may immediately play 1 attack card with an energy cost of zero. Add 2 dice to that attack.',
    ],
    energy: 0,
    shields: 1, 
  },

  strikerSaberSilver: {
    name: 'Striker Saber Silver',
    type: 'attack',
    text: [
      'Any Ranger may reveal a card from their hand with "Striker Saber" in its name to gain 1 energy.',
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

  brazenStrike: {
    name: 'Brazen Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, you must draw 1 card.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  iAmAmazing: {
    name: 'I Am Amazing',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. You may draw 1 card, gain 1 energy, or deal 1 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
  },

  strikerBeastSlash: {
    name: 'Striker Beast Slash',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger may discard a card from their hand with "Striker Saber" in its name to perform an attack with 4 dice.',
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
    [card.silverSwagger, 2],
    [card.strikerSaberSilver, 2],
    [card.strikerBeastBlast, 2],
    [card.brazenStrike, 2],
    [card.iAmAmazing, 1],
    [card.strikerBeastSlash, 1] 
  ],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_silver_steel',
    color: 'silver'
  }
);

export default deck;
