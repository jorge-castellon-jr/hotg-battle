import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const highland_strike0: BaseRangerCard = {
  name: 'HIGHLAND STRIKE',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 2,
  attack: [{ value: 2, fixed: true }],
};

const push_the_limit1: BaseRangerCard = {
  name: 'PUSH THE LIMIT',
  type: 'maneuver',
  text: ['Gain 2 [ENERGY]. Another Ranger may perform an attack with 2 dice.'],
  energy: 0,
  shields: 2,
};

const weaponized_morph2: BaseRangerCard = {
  name: 'WEAPONIZED MORPH',
  type: 'maneuver',
  text: ['Gain 2 [ENERGY]. Deal 1 [HIT] to a number of enemy cards equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 2,
};

const im_scottish3: BaseRangerCard = {
  name: 'I’M SCOTTISH!',
  type: 'maneuver',
  text: ['Deal 2 [HIT] to an enemy card of your choice. DEAL +1 [HIT] to that card if it has already resolved.'],
  energy: 1,
  shields: 2,
};

const nitro_blaster4: BaseRangerCard = {
  name: 'NITRO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among a number of targets equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3 }],
};

const turbo_cannon5: BaseRangerCard = {
  name: 'TURBO CANNON',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may immediately play 1 maneuver card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [highland_strike0, 2],
    [push_the_limit1, 2],
    [weaponized_morph2, 2],
    [im_scottish3, 2],
    [nitro_blaster4, 1],
    [turbo_cannon5, 1]
  ],
  {
    team: 'RPM',
    owner: 'flynn_mcallistair_time_burst',
    color: 'blue'
  }
);

export default deck;