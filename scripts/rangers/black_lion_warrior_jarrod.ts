import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  clawsOfFire: {
    name: 'Claws Of Fire',
    type: 'maneuver',
    text: [
      'Choose an enemy card with a health value of 4 or less. Immediately defeat that card.',
    ],
    energy: 2,
    shields: 1, 
  },

  lionsRoar: {
    name: 'Lions Roar',
    type: 'maneuver',
    text: [
      'Gain 2 energy. Until the next Ranger turn in this battle, each time a Ranger suffers damage, reduce that damage by 2.',
    ],
    energy: 0,
    shields: 2, 
  },

  interceptingStrike: {
    name: 'Intercepting Strike',
    type: 'reaction',
    text: [
      'Play this card when any Ranger discards a card for defense. Deal an amount of ¤ to an enemy card of your choice equal to the number of shields on the discarded card.',
    ],
    energy: 1,
    shields: 2, 
  },

  lionCombo: {
    name: 'Lion Combo',
    type: 'reaction',
    text: [
      'Play this card when any Ranger defeats an enemy card with an attack. You may perform an attack with 2 dice.',
    ],
    energy: 1,
    shields: 3, 
  },

  zocatoPower: {
    name: 'Zocato Power',
    type: 'reaction',
    text: [
      'Play this card at the start of any Ranger turn. Until the end of this turn, add 1 die to each attack.',
    ],
    energy: 1,
    shields: 1, 
  },

  spiritOfTheLion: {
    name: 'Spirit Of The Lion',
    type: 'maneuver',
    text: [
      'Until the end of this battle, at the end of each Ranger turn (including this one), if you did not perform an attack, you may perform an attack with 2 dice.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.clawsOfFire, 2],
    [card.lionsRoar, 2],
    [card.interceptingStrike, 2],
    [card.lionCombo, 2],
    [card.zocatoPower, 1],
    [card.spiritOfTheLion, 1] 
  ],
  {
    team: '',
    owner: 'black_lion_warrior_jarrod',
    color: 'black'
  }
);

export default deck;
