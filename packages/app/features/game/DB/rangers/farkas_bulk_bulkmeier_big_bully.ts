import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const big_pig_energy0: BaseRangerCard = {
  name: 'BIG PIG ENERGY',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. The next time you perform an attack during this battle, add 2 dice to that attack. After you play this card, place it on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
};

const hip_check1: BaseRangerCard = {
  name: 'HIP CHECK',
  type: 'attack',
  text: ['After you resolve this attack, suffer 1 damage for each [MISS] result rolled.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 3 }],
};

const fight_dirty2: BaseRangerCard = {
  name: 'FIGHT DIRTY',
  type: 'reaction',
  text: ['Play this card when another Rangers suffers damage to increase the damage by 1, then roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 2,
};

const fist_bump_strike3: BaseRangerCard = {
  name: 'FIST-BUMP STRIKE',
  type: 'attack',
  text: ['Offer a fist bump to another Ranger in your location. If they accept, deal 1 [HIT] to an enemy card of that Ranger’s choice.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const hip_check4: BaseRangerCard = {
  name: 'HIP CHECK',
  type: 'attack',
  text: ['After you resolve this attack, suffer 1 damage for each [MISS] result rolled.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 3 }],
};

const cockroach_combo5: BaseRangerCard = {
  name: 'COCKROACH COMBO',
  type: 'attack',
  text: ['Another Ranger may discard 1 card from their hand to add 2 dice to this attack. If that card is named Cockroach Combo, add 4 dice instead.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const power_bomb6: BaseRangerCard = {
  name: 'POWER BOMB',
  type: 'attack',
  text: ['After you resolve this attack, flip this card onto the combat sequence from a height of at least 12 inches. When it lands, deal 3 [HIT] to each enemy card it touches.'],
  energy: 2,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [big_pig_energy0, 2],
    [hip_check1, 2],
    [fight_dirty2, 2],
    [fist_bump_strike3, 2],
    [hip_check4, 2],
    [cockroach_combo5, 1],
    [power_bomb6, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'farkas_bulk_bulkmeier_big_bully',
    color: 'purple'
  }
);

export default deck;