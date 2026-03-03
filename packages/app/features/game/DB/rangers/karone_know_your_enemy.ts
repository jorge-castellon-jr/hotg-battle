import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const lights_of_orion0: BaseRangerCard = {
  name: 'LIGHTS OF ORION',
  type: 'maneuver',
  text: ['Draw 1 card. Any Ranger may immediately play 1 card. If they do, reduce its energy cost by 2.'],
  energy: 0,
  shields: 1,
};

const shatter_blast1: BaseRangerCard = {
  name: 'SHATTER BLAST',
  type: 'attack',
  text: ['If this attack does not defeat the target, deal 1 [HIT] to each enemy card adjacent to the target.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const phantom_laser2: BaseRangerCard = {
  name: 'PHANTOM LASER',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const dark_insight3: BaseRangerCard = {
  name: 'DARK INSIGHT',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack. They may ignore the GUARD keyword when choosing a target for that attack. If the target has the GUARD keyword, gain 1 [ENERGY].'],
  energy: 0,
  shields: 3,
};

const transdagger_pink4: BaseRangerCard = {
  name: 'TRANSDAGGER PINK',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack. If the target does not have the GUARD keyword, return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const quasar_saber5: BaseRangerCard = {
  name: 'QUASAR SABER',
  type: 'attack',
  text: ['Add 1 die to this attack for each enemy figure in this location.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [lights_of_orion0, 2],
    [shatter_blast1, 2],
    [phantom_laser2, 2],
    [dark_insight3, 2],
    [transdagger_pink4, 1],
    [quasar_saber5, 1]
  ],
  {
    team: 'Galaxy',
    owner: 'karone_know_your_enemy',
    color: 'pink'
  }
);

export default deck;