import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const ground_and_pound0: BaseRangerCard = {
  name: 'GROUND AND POUND',
  type: 'attack',
  text: ['If the target of this attack has already resolved, add 1 die to this attack.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const hades_technique1: BaseRangerCard = {
  name: 'HADES TECHNIQUE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY] for each enemy card already defeated in this battle.'],
  energy: 0,
  shields: 2,
};

const cerberus_fang2: BaseRangerCard = {
  name: 'CERBERUS FANG',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const coeus_shield3: BaseRangerCard = {
  name: 'COEUS SHIELD',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2. Then, place this card on top of your deck instead of discarding it.'],
  energy: 1,
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

const coeus_axe5: BaseRangerCard = {
  name: 'COEUS AXE',
  type: 'attack',
  text: ['After you resolve this attack, deal 1 [HIT] to each enemy card that has already resolved.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [ground_and_pound0, 2],
    [hades_technique1, 2],
    [cerberus_fang2, 2],
    [coeus_shield3, 2],
    [blade_blaster4, 1],
    [coeus_axe5, 1]
  ],
  {
    team: 'HyperForce',
    owner: 'vesper_vasquez_cry_havoc',
    color: 'black'
  }
);

export default deck;