import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const butterfly_kick0: BaseRangerCard = {
  name: 'BUTTERFLY KICK',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 2, fixed: true }],
};

const howling_wind1: BaseRangerCard = {
  name: 'HOWLING WIND',
  type: 'maneuver',
  text: ['Reduce the health value of up to 3 enemy cards by 1 each until the end of this turn. Another Ranger may immediately play 1 card.'],
  energy: 1,
  shields: 2,
};

const mimic_strike2: BaseRangerCard = {
  name: 'MIMIC STRIKE',
  type: 'attack',
  text: ['Before you resolve this attack, any Ranger may reveal 1 attack card from their hand with an energy cost of zero. If they do, this card gains that card’s effect text and attack value.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const soothing_breeze3: BaseRangerCard = {
  name: 'SOOTHING BREEZE',
  type: 'maneuver',
  text: ['Gain 2  [ENERGY]. You may return 1 card from another Ranger’s discard pile to the top of their deck.'],
  energy: 0,
  shields: 3,
};

const mystic_morpher4: BaseRangerCard = {
  name: 'MYSTIC MORPHER',
  type: 'maneuver',
  text: ['You may immediately play 1 maneuver card from your discard pile. If you spend 1 [ENERGY], you may play an attack card instead. '],
  energy: 0,
  shields: 1,
};

const magi_staff_pink5: BaseRangerCard = {
  name: 'MAGI STAFF PINK',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack. You may divide the [HIT] from this attack among any number of targets.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [butterfly_kick0, 2],
    [howling_wind1, 2],
    [mimic_strike2, 2],
    [soothing_breeze3, 2],
    [mystic_morpher4, 1],
    [magi_staff_pink5, 1]
  ],
  {
    team: 'Mystic Force',
    owner: 'vida_rocca_ever_changing_as_the_wind',
    color: 'pink'
  }
);

export default deck;