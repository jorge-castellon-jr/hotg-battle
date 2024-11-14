import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  totalConfidence: {
    name: 'Total Confidence',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play 1 attack card. If that attack defeats the target, gain 2 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  argentCharge: {
    name: 'Argent Charge',
    type: 'attack',
    text: [
      'Gain 2 energy. You may reroll any number of dice during this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  silverStrike: {
    name: 'Silver Strike',
    type: 'attack',
    text: [
      'If there is at least 3 energy in the shared energy pool, return this card to your hand instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  telekinesis: {
    name: 'Telekinesis',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. Any Ranger may take the top card from their discard pile and add it to their hand.',
    ],
    energy: 0,
    shields: 3, 
  },

  silverizerBlast: {
    name: 'Silverizer Blast',
    type: 'reaction',
    text: [
      'Play this card after any Ranger gains energy. Deal an amount of ¤ equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 1, 
  },

  silverizerSlash: {
    name: 'Silverizer Slash',
    type: 'attack',
    text: [
      'Instead of choosing a target, this attack deals its full ¤ to a number of enemy cards equal to the amount of energy spent to play this card (max 4).',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.totalConfidence, 2],
    [card.argentCharge, 2],
    [card.silverStrike, 2],
    [card.telekinesis, 2],
    [card.silverizerBlast, 1],
    [card.silverizerSlash, 1] 
  ],
  {
    team: '',
    owner: 'silver_space_ranger_zhane',
    color: 'silver'
  }
);

export default deck;
