import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const oceanus_blades0: BaseRangerCard = {
  name: 'OCEANUS BLADES',
  type: 'attack',
  text: ['After you resolve this attack, you and another Ranger of your choice may each draw 1 card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const tactical_strike1: BaseRangerCard = {
  name: 'TACTICAL STRIKE',
  type: 'attack',
  text: ['After you play this card, place it on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const python_grab2: BaseRangerCard = {
  name: 'PYTHON GRAB',
  type: 'maneuver',
  text: ['Attach this card to 1 enemy card. Reduce all damage dealt by that enemy card by 2. That enemy card looses the GUARD keyword for the rest of this battle.'],
  energy: 1,
  shields: 2,
};

const serpent_strike3: BaseRangerCard = {
  name: 'SERPENT STRIKE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Attack this card to 1 enemy card. After that enemy card resolves, deal 2 [HIT] to that enemy card.'],
  energy: 0,
  shields: 3,
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const oceanus_trident5: BaseRangerCard = {
  name: 'OCEANUS TRIDENT',
  type: 'attack',
  text: ['After you resolve this attack, choose up to 3 cards from Ranger discard piles and shuffle them back into their respective decks.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [oceanus_blades0, 2],
    [tactical_strike1, 2],
    [python_grab2, 2],
    [serpent_strike3, 2],
    [blade_blaster4, 1],
    [oceanus_trident5, 1]
  ],
  {
    team: 'HyperForce',
    owner: 'eddie_banks_technician',
    color: 'blue'
  }
);

export default deck;