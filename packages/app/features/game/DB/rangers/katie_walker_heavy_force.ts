import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const ground_and_pound0: BaseRangerCard = {
  name: 'GROUND AND POUND',
  type: 'attack',
  text: ['If the target of this attack has already been resolved, add 1 die to this attack.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const competitive_strength1: BaseRangerCard = {
  name: 'COMPETITIVE STRENGTH',
  type: 'reaction',
  text: ['Play this card when another Ranger performs an attack. Roll 3 dice. The attacking Ranger may ignore their roll and use yours instead.'],
  energy: 0,
  shields: 2,
};

const all_or_nothing2: BaseRangerCard = {
  name: 'ALL OR NOTHING',
  type: 'maneuver',
  text: ['Gain 3 [ENERGY]. Another Ranger may immediately play 1 card. Remove all [ENERGY] from the shared energy pool at the end of this turn.'],
  energy: 1,
  shields: 2,
};

const chrono_cross3: BaseRangerCard = {
  name: 'CHRONO CROSS',
  type: 'attack',
  text: ['If this attack defeats an enemy card with the GUARD keyword, deal 1 [HIT] to an enemy card of your choice.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 3 }],
};

const chrono_blaster4: BaseRangerCard = {
  name: 'CHRONO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets.'],
  energy: 2,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const v_4_blaster5: BaseRangerCard = {
  name: 'V-4 BLASTER',
  type: 'attack',
  text: ['Gain 1 [ENERGY]. You may remove any number of dice from this attack before rolling to increase the amount of [ENERGY] gained by the same number.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [ground_and_pound0, 2],
    [competitive_strength1, 2],
    [all_or_nothing2, 2],
    [chrono_cross3, 2],
    [chrono_blaster4, 1],
    [v_4_blaster5, 1]
  ],
  {
    team: 'Time Force',
    owner: 'katie_walker_heavy_force',
    color: 'yellow'
  }
);

export default deck;