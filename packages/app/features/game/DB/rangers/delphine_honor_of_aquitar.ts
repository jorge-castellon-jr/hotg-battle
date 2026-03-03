import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const aquitian_knuckle0: BaseRangerCard = {
  name: 'AQUITIAN KNUCKLE',
  type: 'attack',
  text: ['If you roll at least 1 [MISS] result during this attack, deal 3 [HIT] to the target.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const false_swipe1: BaseRangerCard = {
  name: 'FALSE SWIPE',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack. Convert all [HIT]and [HIT][HIT] results to [MISS] results. The Rangers may take an additional turn after this one.'],
  energy: 0,
  shields: 2,
};

const feinting_slash2: BaseRangerCard = {
  name: 'FEINTING SLASH',
  type: 'attack',
  text: ['If you roll at least 1 [MISS] result during this attack, return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const encouraging_word3: BaseRangerCard = {
  name: 'ENCOURAGING WORD',
  type: 'reaction',
  text: ['Play this card when another Ranger rolls any [MISS] results during an attack. That Ranger may choose 1 card from their discard pile and place it on the bottom of their deck.'],
  energy: 0,
  shields: 3,
};

const aquitan_laser4: BaseRangerCard = {
  name: 'AQUITAN LASER',
  type: 'attack',
  text: ['Add 1 die to this attack for each [ENERGY] spent to play this card. You may reroll any number of dice during this attack.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 1 }],
};

const aquitian_saber5: BaseRangerCard = {
  name: 'AQUITIAN SABER',
  type: 'attack',
  text: ['Gain 1 [ENERGY] for each [MISS] result rolled during this attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 6 }],
};

const deck: RangerCard[] = createDeck(
  [
    [aquitian_knuckle0, 2],
    [false_swipe1, 2],
    [feinting_slash2, 2],
    [encouraging_word3, 2],
    [aquitan_laser4, 1],
    [aquitian_saber5, 1]
  ],
  {
    team: 'Aquitar',
    owner: 'delphine_honor_of_aquitar',
    color: 'white'
  }
);

export default deck;