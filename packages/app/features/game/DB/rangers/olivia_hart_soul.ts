import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const dagger_solo0: BaseRangerCard = {
  name: 'DAGGER SOLO',
  type: 'maneuver',
  text: ['For the rest of this battle, the energy cost of all combat cards is reduced by 1.'],
  energy: 1,
  shields: 1,
};

const solo_strike1: BaseRangerCard = {
  name: 'SOLO STRIKE',
  type: 'attack',
  text: ['Before rolling, you may remove 1 die from this attack. If you do, return this card to your hand instead of discarding it after the attack resolves.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const dragon_rush2: BaseRangerCard = {
  name: 'DRAGON RUSH',
  type: 'attack',
  text: ['After you resolve this attack, you may perform a second attack with 2 dice.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 1 }],
};

const dragon_shield3: BaseRangerCard = {
  name: 'DRAGON SHIELD',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3. The next time you perform an attack during this battle, add 1 die to that attack.'],
  energy: 1,
  shields: 3,
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const dragon_dagger5: BaseRangerCard = {
  name: 'DRAGON DAGGER',
  type: 'attack',
  text: ['Perform this attack twice. (You may choose a new target for the second attack. Any effects applied to the first attack apply to both attacks.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [dagger_solo0, 2],
    [solo_strike1, 2],
    [dragon_rush2, 2],
    [dragon_shield3, 2],
    [blade_blaster4, 1],
    [dragon_dagger5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'olivia_hart_soul',
    color: 'green'
  }
);

export default deck;