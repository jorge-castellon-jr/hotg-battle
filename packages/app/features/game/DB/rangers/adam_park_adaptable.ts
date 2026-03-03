import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const rapid_hit0: BaseRangerCard = {
  name: 'RAPID HIT',
  type: 'attack',
  text: ['After you resolve this attack, perform a second attack with 1 die. While this card is the top card of your discard pile, add 1 die to each of your attacks.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const exploit_opening1: BaseRangerCard = {
  name: 'EXPLOIT OPENING',
  type: 'reaction',
  text: ['Play this card when another Ranger defeats an enemy card with an attack. Deal 1 [HIT] to an enemy card adjacent to the target.'],
  energy: 0,
  shields: 2,
};

const leapfrog_strike2: BaseRangerCard = {
  name: 'LEAPFROG STRIKE',
  type: 'attack',
  text: ['While this card is the top card of your discard pile, gain 1 [ENERGY] each time you perform an attack'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const cosmic_cannon3: BaseRangerCard = {
  name: 'COSMIC CANNON',
  type: 'attack',
  text: ['While this card is the top card of your discard pile, ignore the GUARD keyword when choosing targets for your attacks.'],
  energy: 1,
  shields: 3,
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

const power_axe5: BaseRangerCard = {
  name: 'POWER AXE',
  type: 'attack',
  text: ['After rolling, choose 2 dice from this attack and deal that much [HIT] to each enemy card adjacent to the target.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [rapid_hit0, 2],
    [exploit_opening1, 2],
    [leapfrog_strike2, 2],
    [cosmic_cannon3, 2],
    [blade_blaster4, 1],
    [power_axe5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'adam_park_adaptable',
    color: 'black'
  }
);

export default deck;