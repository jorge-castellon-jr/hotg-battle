import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const outpace0: BaseRangerCard = {
  name: 'OUTPACE',
  type: 'reaction',
  text: ['Play this card when an enemy card resolves. Reduce the damage that card deals by 1. If that card has the fast keyword, gain 1 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const extreme_speed1: BaseRangerCard = {
  name: 'EXTREME SPEED',
  type: 'maneuver',
  text: ['Any Ranger may immediately play 1 card. If it is the first attack card played during this battle, add 1 die to that attack. Otherwise, place this card on the bottom of your deck and you may draw 1 card.'],
  energy: 0,
  shields: 2,
};

const tyranno_slash2: BaseRangerCard = {
  name: 'TYRANNO SLASH',
  type: 'attack',
  text: ['You may reroll any number of dice during this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const corner_kick3: BaseRangerCard = {
  name: 'CORNER KICK',
  type: 'attack',
  text: ['After rolling, you may choose to deal the full [HIT] from this attack to an enemy card adjacent to the target instead.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const thundermax_saber4: BaseRangerCard = {
  name: 'THUNDERMAX SABER',
  type: 'attack',
  text: ['If any other effects add dice to this attack, add +1 die to this attack. You may divide the [HIT] from this attack among any number of targets.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const tyranno_staff5: BaseRangerCard = {
  name: 'TYRANNO STAFF',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets that have not yet resolved.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [outpace0, 2],
    [extreme_speed1, 2],
    [tyranno_slash2, 2],
    [corner_kick3, 2],
    [thundermax_saber4, 1],
    [tyranno_staff5, 1]
  ],
  {
    team: 'Dino Thunder',
    owner: 'connor_mcknight_swift_striker',
    color: 'red'
  }
);

export default deck;