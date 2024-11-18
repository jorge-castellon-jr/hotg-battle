import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  slipstreamCharge: {
    name: 'Slipstream Charge',
    type: 'reaction',
    text: [
      'Play this card when another Ranger gains energy to gain 1 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  turboStrike: {
    name: 'Turbo Strike',
    type: 'attack',
    text: [
      'After rolling, choose 1 die from this attack and gain an amount of energy equal to the ¤ of that die.',
    ],
    energy: 0,
    shields: 3, 
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

  fullThrottle: {
    name: 'Full Throttle',
    type: 'maneuver',
    text: [
      'A Ranger of your choice may immediately play 1 card. If it is an attack, add a number of dice to that attack equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 3, 
  },

  autoBlaster: {
    name: 'Auto Blaster',
    type: 'attack',
    text: [
      'Deals an amount of damage equal to the amount of energy spent to play this card. Can ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  turboLightningSword: {
    name: 'Turbo Lightning Sword',
    type: 'attack',
    text: [
      'After you resolve this attack, you may perform a second attack with a number of dice equal to the number of energy spent to play this card.',
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
    [card.slipstreamCharge, 2],
    [card.turboStrike, 2],
    [card.redlineSlash, 2],
    [card.fullThrottle, 2],
    [card.autoBlaster, 1],
    [card.turboLightningSword, 1] 
  ],
  {
    team: 'Turbo',
    owner: 'turbo_red_i_tommy_oliver',
    color: 'red'
  }
);

export default deck;
