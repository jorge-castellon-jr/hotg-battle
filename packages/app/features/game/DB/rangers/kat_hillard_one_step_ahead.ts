import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const dancers_grace0: BaseRangerCard = {
  name: 'DANCER’S GRACE',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Look at the top 2 cards of your deck and put them back in any order. Then you may immediately play another card.'],
  energy: 0,
  shields: 1,
};

const tai_chi_strike1: BaseRangerCard = {
  name: 'TAI CHI STRIKE',
  type: 'attack',
  text: ['Gain 1 [ENERGY] for each [MISS] result you roll during this attack. If you played this card from the top of your deck, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const disc_throw2: BaseRangerCard = {
  name: 'DISC THROW',
  type: 'attack',
  text: ['After you play this card, if you played it from the top of your deck, return it to the top of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const fire_cloud3: BaseRangerCard = {
  name: 'FIRE CLOUD',
  type: 'attack',
  text: ['If you played this card from the top of your deck, you may divide this [HIT] between any 2 adjacent targets and ignore the GUARD keyword when choosing targets for this attack.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 3 }],
};

const power_pod_sword4: BaseRangerCard = {
  name: 'POWER POD SWORD',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that [HIT] among any number of targets.'],
  energy: 1,
  shields: 1,
};

const power_disc5: BaseRangerCard = {
  name: 'POWER DISC',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3 and deal 3 [HIT] to an enemy card of your choice.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [dancers_grace0, 2],
    [tai_chi_strike1, 2],
    [disc_throw2, 2],
    [fire_cloud3, 2],
    [power_pod_sword4, 1],
    [power_disc5, 1]
  ],
  {
    team: 'Zeo',
    owner: 'kat_hillard_one_step_ahead',
    color: 'pink'
  }
);

export default deck;