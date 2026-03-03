import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const venom_charge0: BaseRangerCard = {
  name: 'VENOM CHARGE',
  type: 'maneuver',
  text: ['Attack this card to an enemy card. At the end of each enemy turn in battle, deal 1 [HIT] to that enemy card. Another Ranger math immediately play 1 card.'],
  energy: 2,
  shields: 1,
};

const hydra_coil1: BaseRangerCard = {
  name: 'HYDRA COIL',
  type: 'attack',
  text: ['After you resolve this attack, attack this card to the target. Deal 1 [HIT] to the attacked enemy card after it resolves.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2, fixed: true }],
};

const hydra_shield2: BaseRangerCard = {
  name: 'HYDRA SHIELD',
  type: 'reaction',
  text: ['Play this card after any Ranger performs a maneuver. Gain 1 [ENERGY] and place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
};

const enduring_strike3: BaseRangerCard = {
  name: 'ENDURING STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, choose 1 card from your discard pile and place it on the bottom of your deck.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const rhea_swords5: BaseRangerCard = {
  name: 'RHEA SWORDS',
  type: 'attack',
  text: ['After you resolve this attack, you may perform a second attack with 2 dice. Then you may perform a third attack with 3 dice.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 1 }],
};

const deck: RangerCard[] = createDeck(
  [
    [venom_charge0, 2],
    [hydra_coil1, 2],
    [hydra_shield2, 2],
    [enduring_strike3, 2],
    [blade_blaster4, 1],
    [rhea_swords5, 1]
  ],
  {
    team: 'HyperForce',
    owner: 'joe_shih_enduring_strength',
    color: 'green'
  }
);

export default deck;