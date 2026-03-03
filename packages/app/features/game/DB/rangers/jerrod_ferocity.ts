import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const claws_of_fire0: BaseRangerCard = {
  name: 'CLAWS OF FIRE',
  type: 'maneuver',
  text: ['Choose an enemy card with a health value of 4 or less. Immediately defeat that card.'],
  energy: 2,
  shields: 1,
};

const intercepting_strike1: BaseRangerCard = {
  name: 'INTERCEPTING STRIKE',
  type: 'reaction',
  text: ['Play this card when any Ranger discards a card for defense. Deal an amount of [HIT] to an enemy card of your choice equal to the number of [SHIELD] on the discarded card.'],
  energy: 1,
  shields: 2,
};

const lions_roar2: BaseRangerCard = {
  name: 'LION’S ROAR',
  type: 'maneuver',
  text: ['Gain 2 [ENERGY]. Until the next Ranger turn in this battle, each time a Ranger suffers damage, reduce that damage by 2.'],
  energy: 0,
  shields: 2,
};

const lion_combo3: BaseRangerCard = {
  name: 'LION COMBO',
  type: 'reaction',
  text: ['Play this card when any Ranger defeats an enemy card with an attack. You may perform an attack with 2 dice.'],
  energy: 1,
  shields: 3,
};

const zocato_power4: BaseRangerCard = {
  name: 'ZOCATO POWER',
  type: 'reaction',
  text: ['Play this card at the start of any Ranger turn. Until the end of this turn, add 1 die to each attack.'],
  energy: 1,
  shields: 1,
};

const spirit_of_the_lion5: BaseRangerCard = {
  name: 'SPIRIT OF THE LION',
  type: 'maneuver',
  text: ['Until the end of this battle, at the end of each Ranger turn (including this one), if you did not perform an attack, you may perform an attack with 2 dice.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [claws_of_fire0, 2],
    [intercepting_strike1, 2],
    [lions_roar2, 2],
    [lion_combo3, 2],
    [zocato_power4, 1],
    [spirit_of_the_lion5, 1]
  ],
  {
    team: 'Jungle Fury',
    owner: 'jerrod_ferocity',
    color: 'black'
  }
);

export default deck;