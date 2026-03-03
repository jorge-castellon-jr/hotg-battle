import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const risky_moves0: BaseRangerCard = {
  name: 'RISKY MOVES',
  type: 'maneuver',
  text: ['Suffer up to 3 damage. Another Ranger may immediately play 1 card. If it is an attack, add a number of dice to that attack equal to the amount of damage you suffered.'],
  energy: 1,
  shields: 1,
};

const haymaker1: BaseRangerCard = {
  name: 'HAYMAKER',
  type: 'attack',
  text: ['Add 1 die to this attack for each shield on the top card of your discard pile.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 1 }],
};

const sturdy_blow2: BaseRangerCard = {
  name: 'STURDY BLOW',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const square_up3: BaseRangerCard = {
  name: 'SQUARE UP',
  type: 'reaction',
  text: ['Play this card at the end of any turn in battle. If you suffered damage during this turn, gain 1 [ENERGY] and place this card on top of your deck.'],
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
    [risky_moves0, 2],
    [haymaker1, 2],
    [sturdy_blow2, 2],
    [square_up3, 2],
    [blade_blaster4, 1],
    [power_sword5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'rocky_desantos_bravery',
    color: 'red'
  }
);

export default deck;