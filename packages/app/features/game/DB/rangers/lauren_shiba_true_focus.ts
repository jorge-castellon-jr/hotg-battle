import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const discipline0: BaseRangerCard = {
  name: 'DISCIPLINE',
  type: 'reaction',
  text: ['When any Ranger performs an attack, play this card to allow that Ranger to reroll any number of dice.'],
  energy: 0,
  shields: 1,
};

const strafe_burst1: BaseRangerCard = {
  name: 'STRAFE BURST',
  type: 'attack',
  text: ['For each [MISS] rolled during this attack, deal 1 [HIT] to an enemy card adjacent to your target.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const burn_out2: BaseRangerCard = {
  name: 'BURN OUT',
  type: 'attack',
  text: ['After rolling, you may choose 1 die from this attack and deal it\'s [HIT] to an enemy card adjacent to the target instead,'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const hold_the_line3: BaseRangerCard = {
  name: 'HOLD THE LINE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Each Ranger in this battle may draw 1 card and then place 1 card from their hand back on top of their deck.'],
  energy: 0,
  shields: 3,
};

const spin_sword4: BaseRangerCard = {
  name: 'SPIN SWORD',
  type: 'attack',
  text: ['Before rolling, you may spend any amount of [ENERGY] to add that many dice to this attack.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const black_box5: BaseRangerCard = {
  name: 'BLACK BOX',
  type: 'maneuver',
  text: ['You may immediately play another card. If it is an attack, double the [HIT] dealt by that attack.a'],
  energy: 2,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [discipline0, 2],
    [strafe_burst1, 2],
    [burn_out2, 2],
    [hold_the_line3, 2],
    [spin_sword4, 1],
    [black_box5, 1]
  ],
  {
    team: 'Samurai',
    owner: 'lauren_shiba_true_focus',
    color: 'red'
  }
);

export default deck;