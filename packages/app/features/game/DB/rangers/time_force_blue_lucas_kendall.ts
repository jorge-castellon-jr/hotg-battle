import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  keepYourCool: {
    name: 'Keep Your Cool',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense. Add 2 shields to that card. If that card gets discarded for defense, gain 1 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  stylishStrike: {
    name: 'Stylish Strike',
    type: 'attack',
    text: [
      'If there are more cards in your hand than in your discard pile, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  chronoThrust: {
    name: 'Chrono Thrust',
    type: 'attack',
    text: [
      'If this attack defeats the target, the next time any Ranger reveals a card for defense during this battle, add 1 shield to that card.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  switchItUp: {
    name: 'Switch It Up',
    type: 'maneuver',
    text: [
      'Any Ranger may shuffle their hand into their deck, then draw any number of cards. That Ranger may then immediately play 1 card.',
    ],
    energy: 0,
    shields: 3, 
  },

  chronoBlaster: {
    name: 'Chrono Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 2,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  v2Blaster: {
    name: 'V2 Blaster',
    type: 'attack',
    text: [
      'Reveal 1 card from your hand. For each shield on that card, add 1 die to this attack.',
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
    [card.keepYourCool, 2],
    [card.stylishStrike, 2],
    [card.chronoThrust, 2],
    [card.switchItUp, 2],
    [card.chronoBlaster, 1],
    [card.v2Blaster, 1] 
  ],
  {
    team: 'Time Force',
    owner: 'time_force_blue_lucas_kendall',
    color: 'blue'
  }
);

export default deck;
