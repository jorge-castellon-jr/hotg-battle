import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const team_effort0: BaseRangerCard = {
  name: 'TEAM EFFORT',
  type: 'reaction',
  text: ['Play this card after any Ranger plays an attack card with an energy cost of zero. Another Ranger may immediately play 1 card.'],
  energy: 1,
  shields: 1,
};

const combat_protocol1: BaseRangerCard = {
  name: 'COMBAT PROTOCOL',
  type: 'maneuver',
  text: ['Another Ranger may perform an attack with 2 dice. That Ranger may choose to either reroll any number of dice during that attack or gain 1 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const energy_barrier2: BaseRangerCard = {
  name: 'ENERGY BARRIER',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Roll 3 dice. Reduce that damage by the number of [HIT] results rolled.'],
  energy: 0,
  shields: 2,
};

const coordination3: BaseRangerCard = {
  name: 'COORDINATION',
  type: 'reaction',
  text: ['Play this card before another Ranger performs an attack. Add 1 die to that attack. That Ranger may return that card to their hand instead of discarding it.'],
  energy: 1,
  shields: 3,
};

const zord_maintenance4: BaseRangerCard = {
  name: 'ZORD MAINTENANCE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. React 1 exhausted Zord card of your choice.'],
  energy: 0,
  shields: 1,
};

const battle_teleport5: BaseRangerCard = {
  name: 'BATTLE TELEPORT',
  type: 'maneuver',
  text: ['Move any Ranger from the Command Center to an outer location of your choice. If a battle is currently taking place in that location, that Ranger may immediately play 1 card.'],
  energy: 2,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [team_effort0, 2],
    [combat_protocol1, 2],
    [energy_barrier2, 2],
    [coordination3, 2],
    [zord_maintenance4, 1],
    [battle_teleport5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'alpha_5_mission_control',
    color: 'blue'
  }
);

export default deck;