import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const tactical_support0: BaseRangerCard = {
  name: 'TACTICAL SUPPORT',
  type: 'maneuver',
  text: ['A Ranger of your choice may draw up to 2 cards, then immediately play 1 card.'],
  energy: 0,
  shields: 1,
};

const recovery_protocol1: BaseRangerCard = {
  name: 'RECOVERY PROTOCOL',
  type: 'reaction',
  text: ['Play this card when another Ranger plays a card to allow that Ranger to return the card to their hand instead of discarding it.'],
  energy: 1,
  shields: 1,
};

const energize2: BaseRangerCard = {
  name: 'ENERGIZE',
  type: 'maneuver',
  text: ['Gain 3 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const emergency_shields3: BaseRangerCard = {
  name: 'EMERGENCY SHIELDS!',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2.'],
  energy: 0,
  shields: 2,
};

const go_go4: BaseRangerCard = {
  name: 'GO! GO!',
  type: 'reaction',
  text: ['Play this card before another Ranger performs an attack to add 2 dice to that attack.'],
  energy: 1,
  shields: 2,
};

const teleport5: BaseRangerCard = {
  name: 'TELEPORT',
  type: 'maneuver',
  text: ['Move 1 Ranger from another location to this location.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [tactical_support0, 2],
    [recovery_protocol1, 2],
    [energize2, 2],
    [emergency_shields3, 2],
    [go_go4, 1],
    [teleport5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'alpha_5_recovery_boost',
    color: 'blue'
  }
);

export default deck;