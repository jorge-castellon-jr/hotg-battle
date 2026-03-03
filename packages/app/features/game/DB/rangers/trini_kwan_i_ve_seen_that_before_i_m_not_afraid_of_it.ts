import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const precise_strike0: BaseRangerCard = {
  name: 'PRECISE STRIKE',
  type: 'attack',
  text: ['After you play this card, you may spend 1 [ENERGY] to shuffle it back into your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2, fixed: true }],
};

const twin_fang_teamwork1: BaseRangerCard = {
  name: 'TWIN-FANG TEAMWORK',
  type: 'reaction',
  text: ['Play this card after another Ranger resolves an attack to deal 1 [HIT] to the target of that attack.'],
  energy: 0,
  shields: 2,
};

const tenacity2: BaseRangerCard = {
  name: 'TENACITY',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Choose 2 cards from your discard pile and return them to the top of your deck, in any order.'],
  energy: 0,
  shields: 2,
};

const sabertooth_strike3: BaseRangerCard = {
  name: 'SABERTOOTH STRIKE',
  type: 'attack',
  text: ['If this attack defeats the target, you may immediately perform a second attack with 2 dice.'],
  energy: 1,
  shields: 2,
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

const power_daggers5: BaseRangerCard = {
  name: 'POWER DAGGERS',
  type: 'attack',
  text: ['After you resolve this attack, a Ranger of your choice may immediately play 1 card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [precise_strike0, 2],
    [twin_fang_teamwork1, 2],
    [tenacity2, 2],
    [sabertooth_strike3, 2],
    [blade_blaster4, 1],
    [power_daggers5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'trini_kwan_i_ve_seen_that_before_i_m_not_afraid_of_it',
    color: 'yellow'
  }
);

export default deck;