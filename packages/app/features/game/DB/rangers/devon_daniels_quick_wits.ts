import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const lightning_reflexes0: BaseRangerCard = {
  name: 'LIGHTNING REFLEXES',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Before revealing any cards for defense, that Ranger may look at the top card of their deck and may swap it with a card in their hand. Gain 1 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const accelerate1: BaseRangerCard = {
  name: 'ACCELERATE',
  type: 'maneuver',
  text: ['Any Ranger may immediately play 1 card. If it is an attack, add 1 die to that attack.'],
  energy: 0,
  shields: 2,
};

const flicker_jab2: BaseRangerCard = {
  name: 'FLICKER JAB',
  type: 'attack',
  text: ['You may remove 1 die from this attack before rolling. If you do, place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const unleash_the_beast3: BaseRangerCard = {
  name: 'UNLEASH THE BEAST',
  type: 'attack',
  text: ['After you resolve this attack, another Ranger may discard 1 card from their hand to perform an attack with 2 dice.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const beast_x_blaster4: BaseRangerCard = {
  name: 'BEAST-X BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. Place this card on the bottom of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const cheetah_claws5: BaseRangerCard = {
  name: 'CHEETAH CLAWS',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may immediately play 1 card. If they do, skip the next Ranger turn in this battle.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 6 }],
};

const deck: RangerCard[] = createDeck(
  [
    [lightning_reflexes0, 2],
    [accelerate1, 2],
    [flicker_jab2, 2],
    [unleash_the_beast3, 2],
    [beast_x_blaster4, 1],
    [cheetah_claws5, 1]
  ],
  {
    team: 'Beast Morphers',
    owner: 'devon_daniels_quick_wits',
    color: 'red'
  }
);

export default deck;