import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const slipstream_charge0: BaseRangerCard = {
  name: 'SLIPSTREAM CHARGE',
  type: 'reaction',
  text: ['Play this card when another Ranger gains [ENERGY] to gain 1 [ENERGY] .'],
  energy: 0,
  shields: 1,
};

const turbo_strike1: BaseRangerCard = {
  name: 'TURBO STRIKE',
  type: 'attack',
  text: ['After rolling, choose 1 die from this attack and gain an amount of [ENERGY] equal to the [HIT] of that die.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const redline_slash2: BaseRangerCard = {
  name: 'REDLINE SLASH',
  type: 'attack',
  text: ['If there is no [ENERGY] in the shared pool, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const full_throttle3: BaseRangerCard = {
  name: 'FULL THROTTLE',
  type: 'maneuver',
  text: ['A Ranger of your choice may immediately play 1 card. If it is an attack, add a number of dice to that attack equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 3,
};

const auto_blaster4: BaseRangerCard = {
  name: 'AUTO BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const turbo_lightning_sword5: BaseRangerCard = {
  name: 'TURBO LIGHTNING SWORD',
  type: 'attack',
  text: ['After you resolve this attack, you may perform a second attack with a number of dice equal to the amount of [ENERGY] spent to play this card. T.J. Johnson'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [slipstream_charge0, 2],
    [turbo_strike1, 2],
    [redline_slash2, 2],
    [full_throttle3, 2],
    [auto_blaster4, 1],
    [turbo_lightning_sword5, 1]
  ],
  {
    team: 'Turbo',
    owner: 't_j_johnson_',
    color: 'red'
  }
);

export default deck;