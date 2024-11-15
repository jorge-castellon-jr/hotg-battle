import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  leadByExample: {
    name: 'Lead By Example',
    type: 'maneuver',
    text: [
      'You may immediately play another card. Then another Ranger of your choice may immediately play 1 card.',
    ],
    energy: 1,
    shields: 1, 
  },

  starStrike: {
    name: 'Star Strike',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  redRiposte: {
    name: 'Red Riposte',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense to add 2 shields to that card.',
      '★ If this card is revealed for defense, another Ranger of your choice may return the top card of their discard pile to the top of their deck.',
    ],
    energy: 0,
    shields: 2, 
  },

  flyingPowerKick: {
    name: 'Flying Power Kick',
    type: 'attack',
    text: [
      '★ If this card is revealed for defense, the next time any Ranger performs an attack during this battle, add 1 die to that attack.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  powerPodSword: {
    name: 'Power Pod Sword',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that ¤ among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
  },

  zeoBattleSword: {
    name: 'Zeo Battle Sword',
    type: 'attack',
    text: [
      'After you resolve this attack, reveal up to 2 cards from your hand and resolve the ★ abilities on those cards as if they were revealed for defense.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 5, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.leadByExample, 2],
    [card.starStrike, 2],
    [card.redRiposte, 2],
    [card.flyingPowerKick, 2],
    [card.powerPodSword, 1],
    [card.zeoBattleSword, 1] 
  ],
  {
    team: 'Zeo Ranger V',
    owner: 'zeo_ranger_v_red_tommy_oliver',
    color: 'red'
  }
);

export default deck;
