import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const stunt_rider0: BaseRangerCard = {
  name: 'STUNT RIDER',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Reduce that damage by 2. The next time any Ranger performs an attack in this battle, they may divide the [HIT] among any number of targets.'],
  energy: 1,
  shields: 1,
};

const flare_kick1: BaseRangerCard = {
  name: 'FLARE KICK',
  type: 'attack',
  text: ['Gain an amount of [ENERGY] equal to the number of [HIT] results rolled during this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const loaded_strike2: BaseRangerCard = {
  name: 'LOADED STRIKE',
  type: 'attack',
  text: ['If there is at least 4 [ENERGY] in the shared pool, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const power_surge3: BaseRangerCard = {
  name: 'POWER SURGE',
  type: 'maneuver',
  text: ['Gain an amount of [ENERGY] equal to twice the amount of [ENERGY] spent to play this card (max 5).'],
  energy: 0,
  shields: 3,
};

const nitro_blaster4: BaseRangerCard = {
  name: 'NITRO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among a number of targets equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3 }],
};

const zip_charger5: BaseRangerCard = {
  name: 'ZIP CHARGER',
  type: 'maneuver',
  text: ['Place this card on your character card. Until the end of this battle, when a Ranger spends [ENERGY] place 1 energy token on this card. Discard this card at the start of a Ranger turn to deal 2 [HIT] to an enemy card, +1 [HIT] for every token on this card.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [stunt_rider0, 2],
    [flare_kick1, 2],
    [loaded_strike2, 2],
    [power_surge3, 2],
    [nitro_blaster4, 1],
    [zip_charger5, 1]
  ],
  {
    team: 'RPM',
    owner: 'summer_landsdown_energy_butst',
    color: 'yellow'
  }
);

export default deck;