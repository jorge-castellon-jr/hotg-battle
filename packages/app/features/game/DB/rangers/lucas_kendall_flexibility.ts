import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const keep_your_cool0: BaseRangerCard = {
  name: 'KEEP YOUR COOL',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense. Add 2 [SHIELD] to that card. If that card gets discarded for defense, gain 1 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const stylish_strike1: BaseRangerCard = {
  name: 'STYLISH STRIKE',
  type: 'attack',
  text: ['If there are more cards in your hand than in your discard pile, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const chrono_thrust2: BaseRangerCard = {
  name: 'CHRONO THRUST',
  type: 'attack',
  text: ['If this attack defeats the target, the next time any Ranger reveals a card for defense during this battle, add 1 [SHIELD] to that card.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const switch_it_up3: BaseRangerCard = {
  name: 'SWITCH IT UP!',
  type: 'maneuver',
  text: ['Any Ranger may shuffle their hand into their deck, then draw any number of cards. That Ranger may then immediately play 1 card.'],
  energy: 0,
  shields: 3,
};

const chrono_blaster4: BaseRangerCard = {
  name: 'CHRONO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets.'],
  energy: 2,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const v_2_blaster5: BaseRangerCard = {
  name: 'V-2 BLASTER',
  type: 'attack',
  text: ['Reveal 1 card from your hand. For each [SHIELD] on that card, add 1 die to this attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [keep_your_cool0, 2],
    [stylish_strike1, 2],
    [chrono_thrust2, 2],
    [switch_it_up3, 2],
    [chrono_blaster4, 1],
    [v_2_blaster5, 1]
  ],
  {
    team: 'Time Force',
    owner: 'lucas_kendall_flexibility',
    color: 'blue'
  }
);

export default deck;