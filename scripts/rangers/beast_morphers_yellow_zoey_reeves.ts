import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  tornadoTakedown: {
    name: 'Tornado Takedown',
    type: 'attack',
    text: [
      'If this attack defeats the target, place this card on top of your deck instead of discarding it. Another Ranger may draw 1 card.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  rapidMetabolism: {
    name: 'Rapid Metabolism',
    type: 'reaction',
    text: [
      'Play this card when an enemy card drains energy or deals damage. Prevent up to 3 drain and gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
  },

  rabbitPunch: {
    name: 'Rabbit Punch',
    type: 'attack',
    text: [
      'After you resolve this attack, you may draw 1 card. If you do, you may perform a second attack with 1 die.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  backflip: {
    name: 'Backflip',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by twice the amount of energy spent to play this card. Then gain 1 energy.',
    ],
    energy: 0,
    shields: 3, 
  },

  beastxBlaster: {
    name: 'BeastX Blaster',
    type: 'attack',
    text: [
      'This attack deals an amount of ¤ equal to the amount of energy spent to play this card. Place this card on the bottom of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  beastxSpinSaber: {
    name: 'BeastX Spin Saber',
    type: 'attack',
    text: [
      'Add a number of dice to this attack equal to the amount of energy spent to play this card. If you spend at least 3 energy, return this card to your hand instead of discarding it.',
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
    [card.tornadoTakedown, 2],
    [card.rapidMetabolism, 2],
    [card.rabbitPunch, 2],
    [card.backflip, 2],
    [card.beastxBlaster, 1],
    [card.beastxSpinSaber, 1] 
  ],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_yellow_zoey_reeves',
    color: 'yellow'
  }
);

export default deck;
