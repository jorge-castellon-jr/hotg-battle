import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const snap_kick0: BaseRangerCard = {
  name: 'SNAP KICK',
  type: 'attack',
  text: ['Add 1 die to this attack if this card was not the first card played during this turn.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const double_up1: BaseRangerCard = {
  name: 'DOUBLE UP',
  type: 'maneuver',
  text: ['Any Ranger may search their deck and discard pile for 2 cards with the same name and add them both to their hand. If they searched their deck, they must shuffle it.'],
  energy: 0,
  shields: 1,
};

const unstoppable_force2: BaseRangerCard = {
  name: 'UNSTOPPABLE FORCE',
  type: 'reaction',
  text: ['Play this card when any Ranger defeats an enemy card. Remove all excess hit tokens on that card and gain that much [ENERGY],'],
  energy: 0,
  shields: 3,
};

const griffin_strike3: BaseRangerCard = {
  name: 'GRIFFIN STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, you may draw 1 card. If you do, you may immediately play 1 card with an energy cost of zero'],
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
    [snap_kick0, 2],
    [double_up1, 2],
    [unstoppable_force2, 2],
    [griffin_strike3, 2],
    [blade_blaster4, 1],
    [power_daggers5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'aisha_campbell_momentum',
    color: 'yellow'
  }
);

export default deck;