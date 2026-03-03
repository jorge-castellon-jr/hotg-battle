import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const tornado_takedown0: BaseRangerCard = {
  name: 'TORNADO TAKEDOWN',
  type: 'attack',
  text: ['If this attack defeats the target, place this card on top of your deck instead of discarding it. Another Ranger may draw 1 card.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const rapid_metabolism1: BaseRangerCard = {
  name: 'RAPID METABOLISM',
  type: 'reaction',
  text: ['Play this card when an enemy card drains [ENERGY] or deals [HIT]. Prevent up to 3 drain and gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
};

const rabbit_punch2: BaseRangerCard = {
  name: 'RABBIT PUNCH',
  type: 'attack',
  text: ['After you resolve this attack, you may draw 1 card. If you do, you may perform a second attack with 1 die.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const backflip3: BaseRangerCard = {
  name: 'BACKFLIP',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Reduce that damage by twice the amount of [ENERGY] spent to play this card. Then gain 1 [ENERGY].'],
  energy: 0,
  shields: 3,
};

const beast_x_blaster4: BaseRangerCard = {
  name: 'BEAST-X BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. Place this card on the bottom of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const beast_x_spin_saber5: BaseRangerCard = {
  name: 'BEAST-X SPIN SABER',
  type: 'attack',
  text: ['Add a number of dice to this attack equal to the amount of [ENERGY] spent to play this card. If you spent at least 3 [ENERGY], return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [tornado_takedown0, 2],
    [rapid_metabolism1, 2],
    [rabbit_punch2, 2],
    [backflip3, 2],
    [beast_x_blaster4, 1],
    [beast_x_spin_saber5, 1]
  ],
  {
    team: 'Beast Morphers',
    owner: 'zoey_reeves_problem_solver',
    color: 'yellow'
  }
);

export default deck;