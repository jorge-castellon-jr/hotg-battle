import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const overclock0: BaseRangerCard = {
  name: 'OVERCLOCK',
  type: 'attack',
  text: ['Discard another card from your hand, then gain 1 [ENERGY] for each [SHIELD] on that card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const covering_fire1: BaseRangerCard = {
  name: 'COVERING FIRE',
  type: 'reaction',
  text: ['Play this card when another Ranger plays a maneuver. Roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 1,
  shields: 2,
};

const chrono_saber2: BaseRangerCard = {
  name: 'CHRONO SABER',
  type: 'attack',
  text: ['If this attack defeats the target, gain 2 [ENERGY].'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const warp_vector3: BaseRangerCard = {
  name: 'WARP VECTOR',
  type: 'attack',
  text: ['Choose 1 card from your discard pile and place it on top of your deck.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const chrono_blaster4: BaseRangerCard = {
  name: 'CHRONO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets.'],
  energy: 2,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const v_5_blaster5: BaseRangerCard = {
  name: 'V-5 BLASTER',
  type: 'attack',
  text: ['Before rolling, add 1 die to this attack for each [ENERGY] remaining in the shared pool.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [overclock0, 2],
    [covering_fire1, 2],
    [chrono_saber2, 2],
    [warp_vector3, 2],
    [chrono_blaster4, 1],
    [v_5_blaster5, 1]
  ],
  {
    team: 'Time Force',
    owner: 'jen_scotts_contingency',
    color: 'pink'
  }
);

export default deck;