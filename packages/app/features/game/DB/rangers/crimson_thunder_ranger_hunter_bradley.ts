import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  thunderShield: {
    name: 'Thunder Shield',
    type: 'reaction',
    text: [
      'Play this card at the start of any enemy turn in battle. Treat the first card each Ranger reveals for defense this turn as having a shield value of 3.',
    ],
    energy: 0,
    shields: 1, 
  },

  thunderBlaster: {
    name: 'Thunder Blaster',
    type: 'attack',
    text: [
      'Any Ranger may discard a card named "Thunder Blaster." If they do, add 2 dice to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  flashingThunderKick: {
    name: 'Flashing Thunder Kick',
    type: 'attack',
    text: [
      'Any Ranger may reveal a card from their hand with "Thunder Kick" in its name. If they do, deal 1 ¤ to an enemy card without the GUARD keyword.',
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

  thunderGliderCycle: {
    name: 'Thunder Glider Cycle',
    type: 'maneuver',
    text: [
      'Choose 1 card from your discard pile and add it to your hand. Then deal 3 ¤ to an enemy card without the GUARD keyword.',
    ],
    energy: 2,
    shields: 3, 
  },

  thunderStaff: {
    name: 'Thunder Staff',
    type: 'attack',
    text: [
      'Another Ranger may reveal a card from their hand named "Thunder Staff." If they do, return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  crimsonBlaster: {
    name: 'Crimson Blaster',
    type: 'attack',
    text: [
      'If this attack defeats an enemy card without the GUARD keyword, gain 2 energy and another Ranger may immediately play 1 card.',
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
    [card.thunderShield, 2],
    [card.thunderBlaster, 2],
    [card.flashingThunderKick, 2],
    [card.thunderGliderCycle, 2],
    [card.thunderStaff, 1],
    [card.crimsonBlaster, 1] 
  ],
  {
    team: 'Crimson Thunder Ranger Hunter',
    owner: 'crimson_thunder_ranger_hunter_bradley',
    color: 'unknown'
  }
);

export default deck;
