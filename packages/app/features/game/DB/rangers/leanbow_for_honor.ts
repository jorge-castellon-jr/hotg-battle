import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const counter_jab0: BaseRangerCard = {
  name: 'COUNTER JAB',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const blazing_storm_slash1: BaseRangerCard = {
  name: 'BLAZING STORM SLASH',
  type: 'attack',
  text: ['Before rolling, you may place 1 card from your hand on top of your deck. If you do, divide the [HIT] from this attack among any number of targets.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const wolf_armor2: BaseRangerCard = {
  name: 'WOLF ARMOR',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Reduce that damage by 2. '],
  energy: 0,
  shields: 2,
};

const mystic_flame3: BaseRangerCard = {
  name: 'MYSTIC FLAME',
  type: 'maneuver',
  text: ['Deal 1 [HIT] to an enemy card of your choice and up to 2 other adjacent enemy cards.'],
  energy: 1,
  shields: 3,
};

const shield_of_light4: BaseRangerCard = {
  name: 'SHIELD OF LIGHT',
  type: 'reaction',
  text: ['Play this card when any Ranger uses a ★ ability. Gain 3 [ENERGY] or add 2 [SHIELD] to the revealed card.'],
  energy: 0,
  shields: 1,
};

const knight_saber5: BaseRangerCard = {
  name: 'KNIGHT SABER',
  type: 'attack',
  text: [''],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [counter_jab0, 2],
    [blazing_storm_slash1, 2],
    [wolf_armor2, 2],
    [mystic_flame3, 2],
    [shield_of_light4, 1],
    [knight_saber5, 1]
  ],
  {
    team: 'Mystic Force',
    owner: 'leanbow_for_honor',
    color: 'red'
  }
);

export default deck;