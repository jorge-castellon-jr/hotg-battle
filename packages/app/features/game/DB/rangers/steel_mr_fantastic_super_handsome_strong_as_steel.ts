import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const silver_swagger0: BaseRangerCard = {
  name: 'SILVER SWAGGER',
  type: 'maneuver',
  text: ['Discard the top card of your deck. Another ranger may immediately play 1 attack card with an energy cost of zero. Add 2 dice to that attack.'],
  energy: 0,
  shields: 1,
};

const striker_beast_blast1: BaseRangerCard = {
  name: 'STRIKER BEAST BLAST',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may discard a copy of Striker Beast Blast from their hand to perform an attack with 2 dice.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const striker_saber_silver2: BaseRangerCard = {
  name: 'STRIKER SABER SILVER',
  type: 'attack',
  text: ['Any Ranger may reveal a card from their hand with “Striker Saber” in it\'s name to gain 1 [ENERGY].'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const brazen_strike3: BaseRangerCard = {
  name: 'BRAZEN STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, you must draw 1 card.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 3 }],
};

const i_am_amazing4: BaseRangerCard = {
  name: 'I AM AMAZING',
  type: 'reaction',
  text: ['Play this card at the start of a battle. You may draw 1 card, gain 1 [ENERGY], or deal 1 [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 1,
};

const striker_beast_slash5: BaseRangerCard = {
  name: 'STRIKER BEAST SLASH',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may discard a card from their hand with “Striker Saber” in it\'s name to perform an attack with 4 dice.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [silver_swagger0, 2],
    [striker_beast_blast1, 2],
    [striker_saber_silver2, 2],
    [brazen_strike3, 2],
    [i_am_amazing4, 1],
    [striker_beast_slash5, 1]
  ],
  {
    team: 'Beast Morphers',
    owner: 'steel_mr_fantastic_super_handsome_strong_as_steel',
    color: 'silver'
  }
);

export default deck;