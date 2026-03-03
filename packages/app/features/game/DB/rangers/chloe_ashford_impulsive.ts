import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const hurricane_kick0: BaseRangerCard = {
  name: 'HURRICANE KICK',
  type: 'attack',
  text: ['Deal the [HIT] from this attack to the target and to another enemy card adjacent to the target.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const swift_strike1: BaseRangerCard = {
  name: 'SWIFT STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, if the target had the FAST keyword, gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const accelerate2: BaseRangerCard = {
  name: 'ACCELERATE',
  type: 'maneuver',
  text: ['A Ranger of your choice may immediately play 1 card. If it is an attack, add 1 die to that attack.'],
  energy: 0,
  shields: 2,
};

const arrow_shot3: BaseRangerCard = {
  name: 'ARROW SHOT',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const hyperion_scythe5: BaseRangerCard = {
  name: 'HYPERION SCYTHE',
  type: 'attack',
  text: ['Double the [HIT] Dealt by this attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [hurricane_kick0, 2],
    [swift_strike1, 2],
    [accelerate2, 2],
    [arrow_shot3, 2],
    [blade_blaster4, 1],
    [hyperion_scythe5, 1]
  ],
  {
    team: 'HyperForce',
    owner: 'chloe_ashford_impulsive',
    color: 'pink'
  }
);

export default deck;