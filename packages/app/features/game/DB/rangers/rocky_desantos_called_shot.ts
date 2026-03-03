import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const lets_party0: BaseRangerCard = {
  name: 'LET’S PARTY!',
  type: 'maneuver',
  text: ['Choose up to 2 enemy cards and attach 1 energy token to each of them. After you play this card, another Ranger of your choice may immediately play 1 card.'],
  energy: 0,
  shields: 1,
};

const power_spin1: BaseRangerCard = {
  name: 'POWER SPIN',
  type: 'attack',
  text: ['After you resolve this attack, deal 1 [HIT] to each enemy card, other than the target, with at least 1 energy token attached to it.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const triple_threat2: BaseRangerCard = {
  name: 'TRIPLE THREAT',
  type: 'attack',
  text: ['Before rolling, attach 1 energy token to the target of this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const reckless_assault3: BaseRangerCard = {
  name: 'RECKLESS ASSAULT',
  type: 'attack',
  text: ['If this attack defeats the target, you may immediately play another card.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const power_pod_sword4: BaseRangerCard = {
  name: 'POWER POD SWORD',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that [HIT] among any number of targets. POWER AXES = 3 Instead of choosing a target, this attack deals its full [HIT] to each enemy card with at least 1 energy token attached to it.'],
  energy: 1,
  shields: 1,
};

const power_axes5: BaseRangerCard = {
  name: 'POWER AXES',
  type: 'attack',
  text: ['Instead of choosing a target, this attack deals its full [HIT] to each enemy card with at least 1 energy token attached to it.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [lets_party0, 2],
    [power_spin1, 2],
    [triple_threat2, 2],
    [reckless_assault3, 2],
    [power_pod_sword4, 1],
    [power_axes5, 1]
  ],
  {
    team: 'Zeo',
    owner: 'rocky_desantos_called_shot',
    color: 'blue'
  }
);

export default deck;