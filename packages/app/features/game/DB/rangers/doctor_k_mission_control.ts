import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const get_in_gear0: BaseRangerCard = {
  name: 'GET IN GEAR!',
  type: 'reaction',
  text: ['Play this card when any Ranger plays an attack card. Treat that card’s attack value as 3 dice. Add 1 die to that attack for each [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
};

const its_not_spandex1: BaseRangerCard = {
  name: 'IT’S NOT SPANDEX!',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense. Add 2 [SHIELD] to that card. Play this card when any Ranger performs the RECOVER action. Subtract 2 [SHIELD] from any card'],
  energy: 0,
  shields: 2,
};

const necessary_risks2: BaseRangerCard = {
  name: 'NECESSARY RISKS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Any Ranger may discard 1 card to perform an attack with 3 dice.'],
  energy: 0,
  shields: 3,
};

const synchronized_attack3: BaseRangerCard = {
  name: 'SYNCHRONIZED ATTACK',
  type: 'maneuver',
  text: ['Two different Rangers must place 1 card from their hand on top of their deck. They may then, one at a time, each perform an attack with 2 dice.'],
  energy: 0,
  shields: 3,
};

const zord_maintenance4: BaseRangerCard = {
  name: 'ZORD MAINTENANCE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. React 1 exhausted Zord card of your choice.'],
  energy: 0,
  shields: 1,
};

const engine_cell5: BaseRangerCard = {
  name: 'ENGINE CELL',
  type: 'reaction',
  text: ['Play this card when any Ranger plays a card with an energy cost of X. Resolve that card as though they spent 5 [ENERGY] to play it.'],
  energy: 2,
  shields: 1,
};

const deck: RangerCard[] = createDeck(
  [
    [get_in_gear0, 2],
    [its_not_spandex1, 2],
    [necessary_risks2, 2],
    [synchronized_attack3, 2],
    [zord_maintenance4, 1],
    [engine_cell5, 1]
  ],
  {
    team: 'RPM',
    owner: 'doctor_k_mission_control',
    color: 'white'
  }
);

export default deck;