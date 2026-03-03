import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const ready_stance0: BaseRangerCard = {
  name: 'READY STANCE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Deal 1 [HIT] to an enemy card of your choice. Place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
};

const take_the_initiative1: BaseRangerCard = {
  name: 'TAKE THE INITIATIVE',
  type: 'reaction',
  text: ['REACTION (missprint as a maneuver) Play this card at the start of a battle. The Rangers may either ignore the FAST keyword to take the first turn in battle or ignore the GUARD keyword during their first turn in battle.'],
  energy: 1,
  shields: 2,
};

const leading_slash2: BaseRangerCard = {
  name: 'LEADING SLASH',
  type: 'attack',
  text: ['After rolling, you may remove any number of dice from this attack. The next time any Ranger performs an attack during this battle, add an equal number of dice to that attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const fire_strike3: BaseRangerCard = {
  name: 'FIRE STRIKE',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, they may reroll any number of dice during that attack.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const omega_forever4: BaseRangerCard = {
  name: 'OMEGA FOREVER',
  type: 'reaction',
  text: ['Play this card at the end of a battle. Roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 1,
};

const tyranno_slash5: BaseRangerCard = {
  name: 'TYRANNO SLASH',
  type: 'attack',
  text: ['You may reroll any number of dice during this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [ready_stance0, 2],
    [take_the_initiative1, 2],
    [leading_slash2, 2],
    [fire_strike3, 2],
    [omega_forever4, 1],
    [tyranno_slash5, 1]
  ],
  {
    team: 'Omega',
    owner: 'trini_kwan_double_fire',
    color: 'red'
  }
);

export default deck;