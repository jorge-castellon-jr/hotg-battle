import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const clever_tactics0: BaseRangerCard = {
  name: 'CLEVER TACTICS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Any Ranger may choose 1 card from their discard pile and add it to their hand. Place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
};

const perfect_strike1: BaseRangerCard = {
  name: 'PERFECT STRIKE',
  type: 'attack',
  text: ['If Samurai Shield is in your hand, place this card on top of your deck instead of discarding it. Otherwise, you may reroll any number of dice during this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const cross_counter2: BaseRangerCard = {
  name: 'CROSS COUNTER',
  type: 'reaction',
  text: ['Play this card when an enemy card deals damage to a Ranger. If Samurai Shield is in your hand, reduce that damage by 2. Otherwise, deal 1 [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 2,
};

const cyclone_slash3: BaseRangerCard = {
  name: 'CYCLONE SLASH',
  type: 'attack',
  text: ['After you resolve this attack, if Samurai Shield is in your hand, you may discard it to perform a second attack with 3 dice.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const samurai_shield4: BaseRangerCard = {
  name: 'SAMURAI SHIELD',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense add 2 [SHIELD] to that card.'],
  energy: 0,
  shields: 1,
};

const samurai_saber5: BaseRangerCard = {
  name: 'SAMURAI SABER',
  type: 'attack',
  text: ['After you resolve this attack, if Samurai Shield is in your hand, gain 1 [ENERGY]. Otherwise, you may perform a second attack with 2 dice.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [clever_tactics0, 2],
    [perfect_strike1, 2],
    [cross_counter2, 2],
    [cyclone_slash3, 2],
    [samurai_shield4, 1],
    [samurai_saber5, 1]
  ],
  {
    team: 'Ninja Storm',
    owner: 'cameron_watanabe_super_samurai_mode',
    color: 'green'
  }
);

export default deck;