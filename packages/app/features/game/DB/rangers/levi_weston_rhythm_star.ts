import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const harmonize0: BaseRangerCard = {
  name: 'HARMONIZE',
  type: 'maneuver',
  text: ['Another Ranger may immediately play 1 card. After that card resolves, choose 1 card with the same shield value from your discard pile and add it to your hand.'],
  energy: 0,
  shields: 1,
};

const storm_star_lightning1: BaseRangerCard = {
  name: 'STORM STAR LIGHTNING',
  type: 'maneuver',
  text: ['Choose 1 enemy card, then deal 1 [HIT] to each enemy card adjacent to it. You may discard 1 card from your hand to repeat this effect once.'],
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

const opening_act3: BaseRangerCard = {
  name: 'OPENING ACT',
  type: 'attack',
  text: ['Draw 1 card. Another Ranger may immediately play 1 card with an energy cost of 1.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const superstar_supercharge4: BaseRangerCard = {
  name: 'SUPERSTAR SUPERCHARGE',
  type: 'attack',
  text: ['Add 1 die to this attack for each [ENERGY] spent to play this card. If this card is not the first card played during this turn, add 2 more dice to this attack.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const chrono_blaster5: BaseRangerCard = {
  name: 'CHRONO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets.'],
  energy: 2,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const deck: RangerCard[] = createDeck(
  [
    [harmonize0, 2],
    [storm_star_lightning1, 2],
    [chrono_saber2, 2],
    [opening_act3, 2],
    [superstar_supercharge4, 1],
    [chrono_blaster5, 1]
  ],
  {
    team: 'Ninja Steel',
    owner: 'levi_weston_rhythm_star',
    color: 'gold'
  }
);

export default deck;