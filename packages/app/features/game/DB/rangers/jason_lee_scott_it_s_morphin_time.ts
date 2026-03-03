import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const team_tactics0: BaseRangerCard = {
  name: 'TEAM TACTICS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Another Ranger of your choice may immediately play 1 card.'],
  energy: 0,
  shields: 1,
};

const lead_the_charge1: BaseRangerCard = {
  name: 'LEAD THE CHARGE',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, add 1 die to that attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const tyranno_slash2: BaseRangerCard = {
  name: 'TYRANNO SLASH',
  type: 'attack',
  text: ['You may reroll any number of dice during this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const block3: BaseRangerCard = {
  name: 'BLOCK',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3.'],
  energy: 0,
  shields: 3,
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const power_sword5: BaseRangerCard = {
  name: 'POWER SWORD',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, add 2 dice to that attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [team_tactics0, 2],
    [lead_the_charge1, 2],
    [tyranno_slash2, 2],
    [block3, 2],
    [blade_blaster4, 1],
    [power_sword5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'jason_lee_scott_it_s_morphin_time',
    color: 'red'
  }
);

export default deck;