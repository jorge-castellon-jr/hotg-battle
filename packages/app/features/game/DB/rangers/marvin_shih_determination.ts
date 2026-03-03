import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const find_weakness0: BaseRangerCard = {
  name: 'FIND WEAKNESS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. The next time any Ranger performs an attack during this battle, add 2 [HIT] to that attack.'],
  energy: 0,
  shields: 1,
};

const iapetus_blaster1: BaseRangerCard = {
  name: 'IAPETUS BLASTER',
  type: 'attack',
  text: ['Before rolling, you may spend 1 [ENERGY] to add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const double_slash2: BaseRangerCard = {
  name: 'DOUBLE SLASH',
  type: 'attack',
  text: ['After you resolve this attack, you may discard 1 card from your hand to perform a second attack with 2 dice, targeting a different enemy card.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const defensive_stance3: BaseRangerCard = {
  name: 'DEFENSIVE STANCE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Draw 1 card, then place this card on top of your deck instead of discarding it.'],
  energy: 0,
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

const iapetus_claws5: BaseRangerCard = {
  name: 'IAPETUS CLAWS',
  type: 'attack',
  text: ['After you resolve this attack, you may perform a second attack with 2 dice. Then you may perform a third attack with 1 die.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [find_weakness0, 2],
    [iapetus_blaster1, 2],
    [double_slash2, 2],
    [defensive_stance3, 2],
    [blade_blaster4, 1],
    [iapetus_claws5, 1]
  ],
  {
    team: 'HyperForce',
    owner: 'marvin_shih_determination',
    color: 'red'
  }
);

export default deck;