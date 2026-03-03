import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const defiant_strike0: BaseRangerCard = {
  name: 'DEFIANT STRIKE',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const do_or_die1: BaseRangerCard = {
  name: 'DO OR DIE',
  type: 'attack',
  text: ['If at least 2 Ranger Operator Series Black cards are removed from the game, gain 2 EN [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const defy_fate2: BaseRangerCard = {
  name: 'DEFY FATE',
  type: 'maneuver',
  text: ['Deal 1 [HIT] to an enemy card of your choice. Then choose 1 combat card that is removed from the game and return it to the top of the corresponding Ranger deck.'],
  energy: 0,
  shields: 2,
};

const final_impact3: BaseRangerCard = {
  name: 'FINAL IMPACT',
  type: 'attack',
  text: ['For each [ENERGY] spent to play this card, add 2 dice to this attack. After resolving this attack, remove this card from the game.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const nitro_blaster4: BaseRangerCard = {
  name: 'NITRO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among a number of targets equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3 }],
};

const rocket_blaster5: BaseRangerCard = {
  name: 'ROCKET BLASTER',
  type: 'attack',
  text: ['For each Ranger Operator Series Black card that is removed from the game, reduce the [ENERGY] cost of this card by 1 and add 1 die to this attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [defiant_strike0, 2],
    [do_or_die1, 2],
    [defy_fate2, 2],
    [final_impact3, 2],
    [nitro_blaster4, 1],
    [rocket_blaster5, 1]
  ],
  {
    team: 'RPM',
    owner: 'dillon_defiant_defense',
    color: 'black'
  }
);

export default deck;