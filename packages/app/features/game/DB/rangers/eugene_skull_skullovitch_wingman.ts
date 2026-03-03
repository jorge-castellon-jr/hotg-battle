import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const finger_guns0: BaseRangerCard = {
  name: 'FINGER GUNS',
  type: 'attack',
  text: ['Point at one or two enemy cards and say “pew pew.” this attack deals 2 [HIT], divided as you choose between those enemy cards.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const chancey_chop1: BaseRangerCard = {
  name: 'CHANCEY CHOP',
  type: 'attack',
  text: ['Before rolling, choose evens or odds. If the number of [HIT] results you roll matches your choice, gain 1 [ENERGY] and return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const fight_or_flight2: BaseRangerCard = {
  name: 'FIGHT OR FLIGHT',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to flip a coin: If heads, deal 2 [HIT] to an enemy card of your choice. If tails, reduce the damage by 2.'],
  energy: 0,
  shields: 2,
};

const high_five_strike3: BaseRangerCard = {
  name: 'HIGH-FIVE STRIKE',
  type: 'attack',
  text: ['Offer a high five to another Ranger in your location. If they accept, that Ranger may immediately play 1 card, reducing its energy cost by 1.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 1 }],
};

const cockroach_combo4: BaseRangerCard = {
  name: 'COCKROACH COMBO',
  type: 'attack',
  text: ['Another Ranger may discard 1 card from their hand to add 2 dice to this attack. If that card is named Cockroach Combo, add 4 dice instead.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const power_nap5: BaseRangerCard = {
  name: 'POWER NAP',
  type: 'maneuver',
  text: ['Roll 5 dice. For each [HIT] result, any Ranger may choose 1 card from their discard pile and return it to the top of their deck.'],
  energy: 2,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [finger_guns0, 2],
    [chancey_chop1, 2],
    [fight_or_flight2, 2],
    [high_five_strike3, 2],
    [cockroach_combo4, 1],
    [power_nap5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'eugene_skull_skullovitch_wingman',
    color: 'orange'
  }
);

export default deck;