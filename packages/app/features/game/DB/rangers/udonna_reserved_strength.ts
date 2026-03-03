import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const discipline0: BaseRangerCard = {
  name: 'DISCIPLINE',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack. They may reroll any number of dice during that attack.'],
  energy: 0,
  shields: 1,
};

const mystic_frost1: BaseRangerCard = {
  name: 'MYSTIC FROST',
  type: 'maneuver',
  text: ['Deal 2 [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 2,
};

const cold_spell2: BaseRangerCard = {
  name: 'COLD SPELL',
  type: 'reaction',
  text: ['Play this card after another Ranger resolves a card. If that card has a ★  effect, they may place that card on top of their deck instead of discarding it. Otherwise, gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
};

const winters_guile3: BaseRangerCard = {
  name: 'WINTER’S GUILE',
  type: 'attack',
  text: ['If you roll at least 1 [MISS] result during this attack, any Ranger may immediately play 1 card with an energy cost of zero.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 3 }],
};

const flash_freeze4: BaseRangerCard = {
  name: 'FLASH FREEZE',
  type: 'attack',
  text: ['If you roll at least 2 [MISS] results during this attack, the Rangers may take an additional turn after this one.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const snow_staff5: BaseRangerCard = {
  name: 'SNOW STAFF',
  type: 'attack',
  text: ['After you resolve this attack, choose up to 2 cards from another Ranger’s discard pile and place them on top of their deck, in any order.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [discipline0, 2],
    [mystic_frost1, 2],
    [cold_spell2, 2],
    [winters_guile3, 2],
    [flash_freeze4, 1],
    [snow_staff5, 1]
  ],
  {
    team: 'Mystic Force',
    owner: 'udonna_reserved_strength',
    color: 'white'
  }
);

export default deck;