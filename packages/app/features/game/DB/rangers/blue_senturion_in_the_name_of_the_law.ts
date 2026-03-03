import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const red_light_strike0: BaseRangerCard = {
  name: 'RED LIGHT STRIKE',
  type: 'attack',
  text: ['If this attack targets an enemy card with the FAST keyword, place this card on the bottom of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const deputized_action1: BaseRangerCard = {
  name: 'DEPUTIZED ACTION',
  type: 'reaction',
  text: ['Play this card before any Ranger rolls dice for an attack. Add 1 die to that attack for each keyword the target has (FAST, GUARD, PASSIVE).'],
  energy: 0,
  shields: 2,
};

const protect_and_serve_bs2: BaseRangerCard = {
  name: 'PROTECT AND SERVE (BS)',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense. Add 1 [SHIELD] to that card for each enemy card with the FAST or GUARD keywords. Gain 1 [ENERGY] for each enemy card with the PASSIVE keyword.'],
  energy: 0,
  shields: 2,
};

const blue_blaster3: BaseRangerCard = {
  name: 'BLUE BLASTER',
  type: 'attack',
  text: ['Add 1 die to this attack for each  spent to play this card. Add 1 die to this attack for each keyword the target has (FAST, GUARD, PASSIVE).'],
  energy: 0,
  shields: 3,
  attack: [{ value: 1 }],
};

const senturion_cycle4: BaseRangerCard = {
  name: 'SENTURION CYCLE',
  type: 'maneuver',
  text: ['A Ranger of your choice may move to this location and draw up to 5 cards. That Ranger may then immediately play 1 attack card. They may rerolll any number of dice during that attack.'],
  energy: 2,
  shields: 1,
};

const senturion_synergizer5: BaseRangerCard = {
  name: 'SENTURION SYNERGIZER',
  type: 'attack',
  text: ['Reduce the energy cost of this card by 1 for each keyword the target has (FAST, GUARD, PASSIVE).'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [red_light_strike0, 2],
    [deputized_action1, 2],
    [protect_and_serve_bs2, 2],
    [blue_blaster3, 2],
    [senturion_cycle4, 1],
    [senturion_synergizer5, 1]
  ],
  {
    team: 'Turbo',
    owner: 'blue_senturion_in_the_name_of_the_law',
    color: 'blue'
  }
);

export default deck;