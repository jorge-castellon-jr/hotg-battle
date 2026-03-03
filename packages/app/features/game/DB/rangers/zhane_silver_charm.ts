import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const total_confidence0: BaseRangerCard = {
  name: 'TOTAL CONFIDENCE',
  type: 'maneuver',
  text: ['Another Ranger may immediately play 1 attack card. If that attack defeats the target, gain 2 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const silver_strike1: BaseRangerCard = {
  name: 'SILVER STRIKE',
  type: 'attack',
  text: ['If there is at least 3 [ENERGY] in the shared energy pool, return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const argent_charge2: BaseRangerCard = {
  name: 'ARGENT CHARGE',
  type: 'attack',
  text: ['Gain 2 [ENERGY]. You may reroll any number of dice during this attack. Two Dice'],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const telekinesis3: BaseRangerCard = {
  name: 'TELEKINESIS',
  type: 'reaction',
  text: ['Play this card at the start of a battle. Any Ranger may take the top card from their discard pile and add it to their hand.'],
  energy: 0,
  shields: 3,
};

const silverizer_blast4: BaseRangerCard = {
  name: 'SILVERIZER BLAST',
  type: 'reaction',
  text: ['Play this card after any Ranger gains [ENERGY]. Deal an amount of [HIT] to an enemy card of your choice equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
};

const silverizer_slash5: BaseRangerCard = {
  name: 'SILVERIZER SLASH',
  type: 'attack',
  text: ['Instead of choosing a target, this attack deals its full [HIT] to a number of enemy cards equal to the amount of [ENERGY] spent to play this card (max 4).'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [total_confidence0, 2],
    [silver_strike1, 2],
    [argent_charge2, 2],
    [telekinesis3, 2],
    [silverizer_blast4, 1],
    [silverizer_slash5, 1]
  ],
  {
    team: 'Space',
    owner: 'zhane_silver_charm',
    color: 'silver'
  }
);

export default deck;