import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const dragon_shield0: BaseRangerCard = {
  name: 'DRAGON SHIELD',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3. The next time you perform an attack during this battle, add 1 die to that attack.'],
  energy: 1,
  shields: 3,
};

const dragon_dagger1: BaseRangerCard = {
  name: 'DRAGON DAGGER',
  type: 'attack',
  text: ['Perform this attack twice.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const team_tactics2: BaseRangerCard = {
  name: 'TEAM TACTICS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Another Ranger of your choice may immediately play 1 card.'],
  energy: 0,
  shields: 1,
};

const lead_the_charge3: BaseRangerCard = {
  name: 'LEAD THE CHARGE',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, add 1 die to that attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const tyranno_slash4: BaseRangerCard = {
  name: 'TYRANNO SLASH',
  type: 'attack',
  text: ['You may reroll any number of dice during this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const block5: BaseRangerCard = {
  name: 'BLOCK',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3.'],
  energy: 0,
  shields: 3,
};

const blade_blaster6: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const power_sword7: BaseRangerCard = {
  name: 'POWER SWORD',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, add 2 dice to that attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [dragon_shield0, 1],
    [dragon_dagger1, 1],
    [team_tactics2, 2],
    [lead_the_charge3, 2],
    [tyranno_slash4, 2],
    [block5, 2],
    [blade_blaster6, 1],
    [power_sword7, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'jason_lee_scott_legacy_of_the_dragon',
    color: 'red'
  }
);

export default deck;