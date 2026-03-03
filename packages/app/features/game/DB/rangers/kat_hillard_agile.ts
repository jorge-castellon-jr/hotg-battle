import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const agile_shot0: BaseRangerCard = {
  name: 'AGILE SHOT',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const fancy_footwork1: BaseRangerCard = {
  name: 'FANCY FOOTWORK',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Gain 1 [ENERGY]. That Ranger may look at the top 2 cards of their decks and place each card on the top or bottom of their deck, in any order.'],
  energy: 0,
  shields: 2,
};

const cats_grace2: BaseRangerCard = {
  name: 'CAT’S GRACE',
  type: 'maneuver',
  text: ['Reveal the top card of your deck. If it is an attack, you may immediately play it and add 1 die to that attack. You may place this card on the bottom of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
};

const tai_chi_combo3: BaseRangerCard = {
  name: 'TAI-CHI COMBO',
  type: 'attack',
  text: ['Look at the top 2 cards of your deck. Place each card on the top or bottom of your deck, in any order.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const arrow_shot5: BaseRangerCard = {
  name: 'ARROW SHOT',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [agile_shot0, 2],
    [fancy_footwork1, 2],
    [cats_grace2, 2],
    [tai_chi_combo3, 2],
    [blade_blaster4, 1],
    [arrow_shot5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'kat_hillard_agile',
    color: 'pink'
  }
);

export default deck;