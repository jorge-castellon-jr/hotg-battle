import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const comet_kick0: BaseRangerCard = {
  name: 'COMET KICK',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const orbital_dropkick1: BaseRangerCard = {
  name: 'ORBITAL DROPKICK',
  type: 'maneuver',
  text: ['During the next Ranger turn in this battle, instead of playing a card, you may perform an attack with 3 dice, then deal 1 [HIT] to each enemy card adjacent to the target.'],
  energy: 0,
  shields: 2,
};

const tough_stuff2: BaseRangerCard = {
  name: 'TOUGH STUFF',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense. Double the number of [SHIELD] on that card.'],
  energy: 0,
  shields: 2,
};

const sweeping_strike3: BaseRangerCard = {
  name: 'SWEEPING STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, deal 1 [HIT] to an enemy card adjacent to the target.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const astro_blaster4: BaseRangerCard = {
  name: 'ASTRO BLASTER',
  type: 'reaction',
  text: ['Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 [HIT] to that attack for each [ENERGY] spent to play this card (max 3).'],
  energy: 0,
  shields: 1,
};

const satellite_stunner5: BaseRangerCard = {
  name: 'SATELLITE STUNNER',
  type: 'maneuver',
  text: ['Choose up to 2 foot soldier cards, 1 monster card, or 1 boss card. For each card chosen, add hit tokens until it has a number equal to 1 less than its health value.'],
  energy: 2,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [comet_kick0, 2],
    [orbital_dropkick1, 2],
    [tough_stuff2, 2],
    [sweeping_strike3, 2],
    [astro_blaster4, 1],
    [satellite_stunner5, 1]
  ],
  {
    team: 'Space',
    owner: 'cassie_chan_ready_to_rock',
    color: 'pink'
  }
);

export default deck;