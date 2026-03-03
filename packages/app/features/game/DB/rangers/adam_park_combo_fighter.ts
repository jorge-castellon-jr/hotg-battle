import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const ninja_vanish0: BaseRangerCard = {
  name: 'NINJA VANISH',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Gain 1 hit token. Reduce that damage by an amount equal to the number of hit tokens you have.'],
  energy: 0,
  shields: 1,
};

const shadow_burst1: BaseRangerCard = {
  name: 'SHADOW BURST',
  type: 'attack',
  text: ['When paying this cards energy cost, you may spend hit tokens instead of ENERGY.'],
  energy: 2,
  shields: 2,
  attack: [{ value: 4 }],
};

const frog_style2: BaseRangerCard = {
  name: 'FROG STYLE',
  type: 'attack',
  text: ['While this card is in your discard pile, you may spend 1 hit token. If you do, return this card to your hand.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const ninja_strike3: BaseRangerCard = {
  name: 'NINJA STRIKE',
  type: 'maneuver',
  text: ['Gain 1 hit token. You may spend up to 3  hit tokens. Deal that much [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 3,
};

const ninjetti_power4: BaseRangerCard = {
  name: 'NINJETTI POWER',
  type: 'maneuver',
  text: ['Gain an amount of [ENERGY] equal to the number of hit tokens you have. Another Ranger may immediately play 1 card.'],
  energy: 1,
  shields: 1,
};

const shadow_clone5: BaseRangerCard = {
  name: 'SHADOW CLONE',
  type: 'attack',
  text: ['Spend up to 3 hit tokens. Instead of choosing a target, this attack deals its full [HIT] to a number of enemy cards equal to the number of hit tokens spent +1.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [ninja_vanish0, 2],
    [shadow_burst1, 2],
    [frog_style2, 2],
    [ninja_strike3, 1],
    [ninjetti_power4, 1],
    [shadow_clone5, 2]
  ],
  {
    team: 'Mighty Morphin Ninja',
    owner: 'adam_park_combo_fighter',
    color: 'black'
  }
);

export default deck;