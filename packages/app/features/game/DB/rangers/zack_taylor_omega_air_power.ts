import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const air_slash0: BaseRangerCard = {
  name: 'AIR SLASH',
  type: 'attack',
  text: ['You may remove up to 2 dice from this attack before rolling. For each die you remove, deal 1 [HIT] to an enemy card that has not suffered any [HIT].'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const fakeout_strike1: BaseRangerCard = {
  name: 'FAKEOUT STRIKE',
  type: 'attack',
  text: ['Add dice to this attack for each enemy card adjacent to the target that has suffered any [HIT] or been defeated.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const tricky_mix_up2: BaseRangerCard = {
  name: 'TRICKY MIX-UP',
  type: 'reaction',
  text: ['Play this card after another Ranger resolves an attack. Gain 1 [ENERGY]. You may remove 1 hit token from the target and place 1 hit token each on up to 2 other enemy cards.'],
  energy: 0,
  shields: 2,
};

const cant_touch_this3: BaseRangerCard = {
  name: 'CAN’T TOUCH THIS',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 1 for each enemy card in this battle that has suffered [HIT] or been defeated.'],
  energy: 1,
  shields: 3,
};

const omega_forever4: BaseRangerCard = {
  name: 'OMEGA FOREVER',
  type: 'reaction',
  text: ['Play this card at the end of a battle. Roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 1,
};

const omega_kamas5: BaseRangerCard = {
  name: 'OMEGA KAMAS',
  type: 'attack',
  text: ['Deal 3 [HIT], divide among any number of enemy cards adjacent to the target.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [air_slash0, 2],
    [fakeout_strike1, 2],
    [tricky_mix_up2, 2],
    [cant_touch_this3, 2],
    [omega_forever4, 1],
    [omega_kamas5, 1]
  ],
  {
    team: 'Omega',
    owner: 'zack_taylor_omega_air_power',
    color: 'black'
  }
);

export default deck;