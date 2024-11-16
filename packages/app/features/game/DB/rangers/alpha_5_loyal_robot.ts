import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  tacticalSupport: {
    name: 'Tactical Support',
    type: 'maneuver',
    text: [
      'A Ranger of your choice may draw up to 2 cards, then immediately play 1 card.',
    ],
    energy: 0,
    shields: 1, 
  },

  recoveryProtocol: {
    name: 'Recovery Protocol',
    type: 'reaction',
    text: [
      'Play this card when another Ranger plays a card to allow that Ranger to return the card to their hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
  },

  energize: {
    name: 'Energize',
    type: 'maneuver',
    text: [
      'Gain 3 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  emergencyShields: {
    name: 'Emergency Shields',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 2.',
    ],
    energy: 0,
    shields: 2, 
  },

  goGo: {
    name: 'Go Go',
    type: 'reaction',
    text: [
      'Play this card before another Ranger performs an attack to add 2 dice to that attack.',
    ],
    energy: 1,
    shields: 2, 
  },

  teleport: {
    name: 'Teleport',
    type: 'maneuver',
    text: [
      'Move 1 Ranger from another location to this location.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.tacticalSupport, 2],
    [card.recoveryProtocol, 2],
    [card.energize, 2],
    [card.emergencyShields, 2],
    [card.goGo, 1],
    [card.teleport, 1] 
  ],
  {
    team: 'Alpha 5 Loyal',
    owner: 'alpha_5_loyal_robot',
    color: 'blue'
  }
);

export default deck;
