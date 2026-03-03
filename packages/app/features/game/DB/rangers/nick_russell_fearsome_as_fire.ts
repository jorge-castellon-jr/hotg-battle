import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const scorching_heat0: BaseRangerCard = {
  name: 'SCORCHING HEAT',
  type: 'maneuver',
  text: ['Roll 4 dice. Gain an amount of [ENERGY] equal to the results of 2 dice, then deal an amount of [HIT] equal to the results of the other 2 dice. You may divide that [HIT] among any number of enemy cards.'],
  energy: 0,
  shields: 1,
};

const ignite1: BaseRangerCard = {
  name: 'IGNITE',
  type: 'maneuver',
  text: ['Any Ranger may immediately play 1 attack card. After rolling dice for that attack, they may convert 1 result to a [HIT][HIT] result.'],
  energy: 1,
  shields: 2,
};

const phoenix_blast2: BaseRangerCard = {
  name: 'PHOENIX BLAST',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const fire_strike3: BaseRangerCard = {
  name: 'FIRE STRIKE',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, they may reroll any number of dice.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const mystic_morpher4: BaseRangerCard = {
  name: 'MYSTIC MORPHER',
  type: 'maneuver',
  text: ['You may immediately play 1 maneuver card from your discard pile. If you spend 1 [ENERGY], you may play an attack card instead. '],
  energy: 0,
  shields: 1,
};

const magi_staff_red5: BaseRangerCard = {
  name: 'MAGI STAFF RED',
  type: 'attack',
  text: ['After rolling dice for this attack, you may convert up to 2 results to [HIT][HIT] results.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [scorching_heat0, 2],
    [ignite1, 2],
    [phoenix_blast2, 2],
    [fire_strike3, 2],
    [mystic_morpher4, 1],
    [magi_staff_red5, 1]
  ],
  {
    team: 'Mystic Force',
    owner: 'nick_russell_fearsome_as_fire',
    color: 'red'
  }
);

export default deck;