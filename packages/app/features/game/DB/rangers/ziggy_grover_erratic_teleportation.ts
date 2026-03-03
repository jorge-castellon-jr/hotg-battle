import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const trickster0: BaseRangerCard = {
  name: 'TRICKSTER',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense. That Ranger may swap the revealed card with another card in their hand.'],
  energy: 0,
  shields: 1,
};

const sneak_attack1: BaseRangerCard = {
  name: 'SNEAK ATTACK',
  type: 'reaction',
  text: ['Play this card after another Ranger performs a maneuver to immediately perform an attack with 2 dice.'],
  energy: 0,
  shields: 2,
};

const chancey_chop2: BaseRangerCard = {
  name: 'CHANCEY CHOP',
  type: 'attack',
  text: ['Before rolling, choose evens of odds. If the number of [HIT] results you roll matches your choice, gain 1 [ENERGY] and return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const warped_strike3: BaseRangerCard = {
  name: 'WARPED STRIKE',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 3,
  attack: [{ value: 1 }],
};

const nitro_blaster4: BaseRangerCard = {
  name: 'NITRO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among a number of targets equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3 }],
};

const turbo_axe5: BaseRangerCard = {
  name: 'TURBO AXE',
  type: 'attack',
  text: ['You may play this card in any battle, regardless of location. Move your figure to the location of that battle. If you were already in that location, add 2 dice to this attack instead.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [trickster0, 2],
    [sneak_attack1, 2],
    [chancey_chop2, 2],
    [warped_strike3, 2],
    [nitro_blaster4, 1],
    [turbo_axe5, 1]
  ],
  {
    team: 'RPM',
    owner: 'ziggy_grover_erratic_teleportation',
    color: 'green'
  }
);

export default deck;