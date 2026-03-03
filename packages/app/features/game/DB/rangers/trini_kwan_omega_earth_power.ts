import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const find_weakness0: BaseRangerCard = {
  name: 'FIND WEAKNESS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. The next time any Ranger performs an attack during this battle, add 2 [HIT] to that attack.'],
  energy: 0,
  shields: 1,
};

const tenacious_blow1: BaseRangerCard = {
  name: 'TENACIOUS BLOW',
  type: 'attack',
  text: ['While this card is in your discard pile, it\'s shield value is reduced by 1.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const earth_smash2: BaseRangerCard = {
  name: 'EARTH SMASH',
  type: 'attack',
  text: ['After you resolve this attack, you may choose cards with a total of up to 2 [SHIELD] from your discard pile and place them on the bottom of your deck, in any order.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const avalanche_swing3: BaseRangerCard = {
  name: 'AVALANCHE SWING',
  type: 'attack',
  text: ['If you discard this card from your hand without playing it, you may spend 1 [ENERGY] to deal 1 [HIT] to an enemy card of your choice.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const omega_forever4: BaseRangerCard = {
  name: 'OMEGA FOREVER',
  type: 'reaction',
  text: ['Play this card at the end of a battle. Roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 1,
};

const omega_maul5: BaseRangerCard = {
  name: 'OMEGA MAUL',
  type: 'attack',
  text: ['You may play this card as normal or immediately after another Ranger resolves an attack or maneuver with an energy cost of 1 or zero.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [find_weakness0, 2],
    [tenacious_blow1, 2],
    [earth_smash2, 2],
    [avalanche_swing3, 2],
    [omega_forever4, 1],
    [omega_maul5, 1]
  ],
  {
    team: 'Omega',
    owner: 'trini_kwan_omega_earth_power',
    color: 'yellow'
  }
);

export default deck;