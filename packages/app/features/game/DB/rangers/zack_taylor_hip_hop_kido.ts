import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const reckless_blow0: BaseRangerCard = {
  name: 'RECKLESS BLOW',
  type: 'attack',
  text: ['Before rolling, you may discard the top card of your deck to add 2 dice to this attack.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const smooth_moves1: BaseRangerCard = {
  name: 'SMOOTH MOVES',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2 and gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
};

const mammoth_slam2: BaseRangerCard = {
  name: 'MAMMOTH SLAM',
  type: 'attack',
  text: ['If there are 4 or more cards in your discard pile, add 1 die to this attack'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const sweeping_strike3: BaseRangerCard = {
  name: 'SWEEPING STRIKE',
  type: 'attack',
  text: ['Deal 1 [HIT] to an enemy card adjacent to the target.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
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
    [reckless_blow0, 2],
    [smooth_moves1, 2],
    [mammoth_slam2, 2],
    [sweeping_strike3, 2],
    [blade_blaster4, 1],
    [power_axe5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'zack_taylor_hip_hop_kido',
    color: 'black'
  }
);

export default deck;