import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const fists_of_iron0: BaseRangerCard = {
  name: 'FISTS OF IRON',
  type: 'attack',
  text: ['After rolling, you may convert 1 [MISS] result to a [HIT] result.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const hit_fission1: BaseRangerCard = {
  name: 'HIT FISSION',
  type: 'reaction',
  text: ['Play this card when a die result is converted. Gain 1 [ENERGY]. Any Ranger may draw up to 2 cards.'],
  energy: 0,
  shields: 2,
};

const counter_thrust2: BaseRangerCard = {
  name: 'COUNTER THRUST',
  type: 'attack',
  text: ['If this attack targets an enemy card with the FAST keyword, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const up_the_ante3: BaseRangerCard = {
  name: 'UP THE ANTE',
  type: 'attack',
  text: ['The next time any Ranger performa sn attack during this battle, add 1 die to that attack.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2, fixed: true }],
};

const deltamax_fire4: BaseRangerCard = {
  name: 'DELTAMAX FIRE',
  type: 'maneuver',
  text: ['Perform an attack with 3 dice that targets a food soldier card of your choice. Another ranger may then perform an attack with 3 dice that targets a different foot soldier card.'],
  energy: 2,
  shields: 1,
};

const deltamax_burst5: BaseRangerCard = {
  name: 'DELTAMAX BURST',
  type: 'reaction',
  text: ['Play this card after any Ranger rolls dice for an attack. Convert up to 5 die results to [HIT][HIT] results.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [fists_of_iron0, 2],
    [hit_fission1, 2],
    [counter_thrust2, 2],
    [up_the_ante3, 2],
    [deltamax_fire4, 1],
    [deltamax_burst5, 1]
  ],
  {
    team: 'S.P.D.',
    owner: 'sydney_syd_drew_transmutation',
    color: 'pink'
  }
);

export default deck;