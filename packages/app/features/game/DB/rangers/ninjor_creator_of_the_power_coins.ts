import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  showboating: {
    name: 'Showboating',
    type: 'reaction',
    text: [
      'Play this card when an enemy card without the PASSIVE keyword resolves. Prevent all effects of that enemy card. Gain 1 energy. Skip the next Ranger turn in this battle.',
    ],
    energy: 0,
    shields: 1, 
  },

  ninjatoBlade: {
    name: 'Ninjato Blade',
    type: 'attack',
    text: [
      'After this attack resolves, you may place this card on the bottom of your deck instead of discarding it.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  flyingKick: {
    name: 'Flying Kick',
    type: 'attack',
    text: [
      'Gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  encouragingWord: {
    name: 'Encouraging Word',
    type: 'reaction',
    text: [
      'Play this card when another Ranger rolls any ○ results during an attack. That Ranger may choose 1 card from their discard pile and may place it on the bottom of their deck.',
    ],
    energy: 0,
    shields: 3, 
  },

  unlockPotential: {
    name: 'Unlock Potential',
    type: 'reaction',
    text: [
      'Play this card after any Ranger exhausts a Zord card to ready that Zord card. You may play this card in any battle, regardless of location.',
    ],
    energy: 1,
    shields: 1, 
  },

  nimbusStrike: {
    name: 'Nimbus Strike',
    type: 'attack',
    text: [
      'Instead of choosing a target, choose a keyword (such as FAST, GUARD, or PASSIVE). This attack deals its full ¤ to up to 3 enemy cards with that keyword.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.showboating, 2],
    [card.ninjatoBlade, 2],
    [card.flyingKick, 2],
    [card.encouragingWord, 2],
    [card.unlockPotential, 1],
    [card.nimbusStrike, 1] 
  ],
  {
    team: 'Ninjor Creator Of The Power',
    owner: 'ninjor_creator_of_the_power_coins',
    color: 'unknown'
  }
);

export default deck;
