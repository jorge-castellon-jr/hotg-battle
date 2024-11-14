import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  letsRocket: {
    name: 'Lets Rocket',
    type: 'maneuver',
    text: [
      'Roll 2 dice and gain an amount of energy equal to the ¤ results. Another Ranger of your choice may immediately play 1 card. Place this card on top of your deck instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
  },

  pierceDefenses: {
    name: 'Pierce Defenses',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack, they may ignore the GUARD keyword when choosing a target for that attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  megaDrillBreaker: {
    name: 'Mega Drill Breaker',
    type: 'attack',
    text: [
      'If this attack does not defeat the target, you may spend 1 energy to perform a second attack with 2 dice against the same target.',
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

  astroBlaster: {
    name: 'Astro Blaster',
    type: 'reaction',
    text: [
      'Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 ¤ to that attack for each energy spent to play this card (max 3).',
    ],
    energy: 0,
    shields: 1, 
  },

  spiralSaber: {
    name: 'Spiral Saber',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack. Deal 2 ¤, divided as you choose among enemy cards adjacent to the target.',
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
    [card.letsRocket, 2],
    [card.pierceDefenses, 2],
    [card.megaDrillBreaker, 2],
    [card.telekinesis, 2],
    [card.astroBlaster, 1],
    [card.spiralSaber, 1] 
  ],
  {
    team: '',
    owner: 'red_space_ranger_andros',
    color: 'red'
  }
);

export default deck;
