import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const pack_tactics0: BaseRangerCard = {
  name: 'PACK TACTICS',
  type: 'reaction',
  text: ['Play this card after another Ranger rolls dice for an attack. Add 1 die to that attack for each [HIT][HIT] result. If they roll a [HIT][HIT] result on the extra die, repeat this process.'],
  energy: 0,
  shields: 1,
};

const fury_swipes1: BaseRangerCard = {
  name: 'FURY SWIPES',
  type: 'attack',
  text: ['When rolling dice for this attack, you may treat 2 [HIT] results as 1 [HIT][HIT] result.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const beastial_cunning2: BaseRangerCard = {
  name: 'BEASTIAL CUNNING',
  type: 'maneuver',
  text: ['Roll 2 dice and gain an amount of [ENERGY] equal to the [HIT] results. Another Ranger may immediately play 1 card with an energy cost of zero.'],
  energy: 0,
  shields: 2,
};

const pounce3: BaseRangerCard = {
  name: 'POUNCE',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack. After rolling, you may convert 1 result to a [HIT][HIT] result if the target is adjacent to at least 1 enemy card with the GUARD keyword.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const omega_forever4: BaseRangerCard = {
  name: 'OMEGA FOREVER',
  type: 'reaction',
  text: ['Play this card at the end of a battle. Roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 1,
};

const omega_claws5: BaseRangerCard = {
  name: 'OMEGA CLAWS',
  type: 'attack',
  text: ['After you resolve this attack, perform another attack with 2 dice. If you roll at least 1 [HIT][HIT] result during that attack, perform another attack with 2 dice. Repeat this process until you roll no [HIT][HIT] results.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [pack_tactics0, 2],
    [fury_swipes1, 2],
    [beastial_cunning2, 2],
    [pounce3, 2],
    [omega_forever4, 1],
    [omega_claws5, 1]
  ],
  {
    team: 'Omega',
    owner: 'yale_of_saard_omega_beast_power',
    color: 'blue'
  }
);

export default deck;