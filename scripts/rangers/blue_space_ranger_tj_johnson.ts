import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  strategicDefense: {
    name: 'Strategic Defense',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. Gain 1 energy. Each Ranger may look at the top 2 cards of their deck and put them back in any order.',
    ],
    energy: 0,
    shields: 1, 
  },

  precisionTactics: {
    name: 'Precision Tactics',
    type: 'maneuver',
    text: [
      'A Ranger of your choice may immediately play 1 card. If that card is an attack, they may remove any number of dice before rolling to add that much ¤ to that attack.',
    ],
    energy: 0,
    shields: 2, 
  },

  busterRifle: {
    name: 'Buster Rifle',
    type: 'attack',
    text: [
      'Reveal the top card of your deck. This attack deals an amount of ¤ equal to the number of shields on that card.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  cosmicCleave: {
    name: 'Cosmic Cleave',
    type: 'attack',
    text: [
      'If this attack defeats the target, you may place this card on top of your deck instead of discarding it.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  astroBlaster: {
    name: 'Astro Blaster',
    type: 'reaction',
    text: [
      'Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 ¤ to that attack for each energy spent to play this card (max 3).',
    ],
    energy: 0,
    shields: 1, 
  },

  astroAxe: {
    name: 'Astro Axe',
    type: 'attack',
    text: [
      'Reveal the top card of your deck and 1 card from your hand. This attack deals an amount of ¤ equal to the number of shields on those cards.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.strategicDefense, 2],
    [card.precisionTactics, 2],
    [card.busterRifle, 2],
    [card.cosmicCleave, 2],
    [card.astroBlaster, 1],
    [card.astroAxe, 1] 
  ],
  {
    team: '',
    owner: 'blue_space_ranger_tj_johnson',
    color: 'blue'
  }
);

export default deck;
