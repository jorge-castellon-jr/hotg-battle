import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const not_done_yet0: BaseRangerCard = {
  name: 'NOT DONE YET!',
  type: 'maneuver',
  text: ['Gain 1 hit token. You may immediately play 1 card from your discard pile.'],
  energy: 1,
  shields: 1,
};

const cross_chop1: BaseRangerCard = {
  name: 'CROSS CHOP',
  type: 'attack',
  text: ['After you play this card, you may spend 1 hit token to place it on top of your deck instead of discarding it.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const charging_strike2: BaseRangerCard = {
  name: 'CHARGING STRIKE',
  type: 'attack',
  text: ['You may spend any number of hit tokens to gain an equal amount of [ENERGY].'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const avenging_strike3: BaseRangerCard = {
  name: 'AVENGING STRIKE',
  type: 'attack',
  text: ['You may spend any number of hit tokens to add an equal number of dice to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const power_pod_sword4: BaseRangerCard = {
  name: 'POWER POD SWORD',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that [HIT] among any number of targets.'],
  energy: 1,
  shields: 1,
};

const power_hatchets5: BaseRangerCard = {
  name: 'POWER HATCHETS',
  type: 'attack',
  text: ['You may spend any number of hit tokens to reroll an equal number of dice during this attack. After you perform this attack, gain 3 hit tokens.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [not_done_yet0, 2],
    [cross_chop1, 2],
    [charging_strike2, 2],
    [avenging_strike3, 2],
    [power_pod_sword4, 1],
    [power_hatchets5, 1]
  ],
  {
    team: 'Zeo',
    owner: 'adam_park_vanguard',
    color: 'green'
  }
);

export default deck;