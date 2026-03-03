import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const quantum_trigger0: BaseRangerCard = {
  name: 'QUANTUM TRIGGER',
  type: 'maneuver',
  text: ['Gain an amount of [ENERGY] equal to the [HIT] result of your quantum die. Reroll your quantum die and draw up to 2 cards. You may then immediately play 1 additional card.'],
  energy: 0,
  shields: 1,
};

const focused_strike1: BaseRangerCard = {
  name: 'FOCUSED STRIKE',
  type: 'attack',
  text: ['After rolling you may convert 1 [MISS] result to a [HIT] result or convert 1 [HIT] result to a [HIT] [HIT] result.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const quantum_cut2: BaseRangerCard = {
  name: 'QUANTUM CUT',
  type: 'attack',
  text: ['Before rolling, add a number of dice to this attack equal to the [HIT] result of your quantum die. Then reroll your quantum die.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const solo_shot3: BaseRangerCard = {
  name: 'SOLO SHOT',
  type: 'attack',
  text: ['If you are the only player with a Ranger in this location, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const silver_guardian4: BaseRangerCard = {
  name: 'SILVER GUARDIAN',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Reduce that damage by an amount equal to double the [HIT] result of your quantum die. You may then return 1 card from your discard pile to your hand.'],
  energy: 0,
  shields: 1,
};

const quantum_defender5: BaseRangerCard = {
  name: 'QUANTUM DEFENDER',
  type: 'attack',
  text: ['After you resolve this attack, deal the [HIT] result of your quantum die to each enemy card adjacent to the target'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [quantum_trigger0, 2],
    [focused_strike1, 2],
    [quantum_cut2, 2],
    [solo_shot3, 2],
    [silver_guardian4, 1],
    [quantum_defender5, 1]
  ],
  {
    team: 'Time Force',
    owner: 'eric_meyers_quantum_power',
    color: 'red'
  }
);

export default deck;