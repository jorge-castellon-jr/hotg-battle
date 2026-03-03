import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const intercepting_strike0: BaseRangerCard = {
  name: 'INTERCEPTING STRIKE',
  type: 'reaction',
  text: ['Play this card when any Ranger discards a card for defense. Deal an amount of [HIT] equal to the number of [SHIELD] on the discarded chard to an enemy card of your choice.'],
  energy: 1,
  shields: 2,
};

const rapid_kicks1: BaseRangerCard = {
  name: 'RAPID KICKS',
  type: 'attack',
  text: ['After rolling, remove 2 dice from this attack'],
  energy: 1,
  shields: 2,
  attack: [{ value: 4 }],
};

const chain_combo2: BaseRangerCard = {
  name: 'CHAIN COMBO',
  type: 'attack',
  text: ['After rolling, remove 1 die from this attack'],
  energy: 0,
  shields: 2,
  attack: [{ value: 3 }],
};

const building_momentum3: BaseRangerCard = {
  name: 'BUILDING MOMENTUM',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Any Ranger may immediately play 1 card with an energy cost of zero. If that card is an attack, add 1 die to that attack, then after rolling remove 1 die from that attack.'],
  energy: 0,
  shields: 3,
};

const power_pod_sword4: BaseRangerCard = {
  name: 'POWER POD SWORD',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that [HIT] among any number of targets.'],
  energy: 1,
  shields: 1,
};

const power_double_clubs5: BaseRangerCard = {
  name: 'POWER DOUBLE CLUBS',
  type: 'attack',
  text: ['After rolling, remove 2 dice from this attack. Then perform a second attack with 2 dice, targeting an enemy card adjacent to the first target.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [intercepting_strike0, 2],
    [rapid_kicks1, 2],
    [chain_combo2, 2],
    [building_momentum3, 2],
    [power_pod_sword4, 1],
    [power_double_clubs5, 1]
  ],
  {
    team: 'Solar',
    owner: 'tanya_sloan_yellow_flare',
    color: 'yellow'
  }
);

export default deck;