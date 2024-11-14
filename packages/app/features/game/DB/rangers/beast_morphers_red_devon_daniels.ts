import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  lightningReflexes: {
    name: 'Lightning Reflexes',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Before revealing any cards for defense, that Ranger may look at the top card of their deck and may swap it with a card in their hand. Gain 1 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  accelerate: {
    name: 'Accelerate',
    type: 'maneuver',
    text: [
      'Any Ranger may immediately play 1 card. If it is an attack, add 1 die to that attack.',
    ],
    energy: 0,
    shields: 2, 
  },

  flickerJab: {
    name: 'Flicker Jab',
    type: 'attack',
    text: [
      'You may remove 1 die from this attack before rolling. If you do, place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  unleashTheBeast: {
    name: 'Unleash The Beast',
    type: 'attack',
    text: [
      'After you resolve this attack, another Ranger may discard 1 card from their hand to perform an attack with 2 dice.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
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

  cheetahClaws: {
    name: 'Cheetah Claws',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger may immediately play 1 card. If they do, skip the next Ranger turn in battle.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 6, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.lightningReflexes, 2],
    [card.accelerate, 2],
    [card.flickerJab, 2],
    [card.unleashTheBeast, 2],
    [card.beastxBlaster, 1],
    [card.cheetahClaws, 1] 
  ],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_red_devon_daniels',
    color: 'red'
  }
);

export default deck;
