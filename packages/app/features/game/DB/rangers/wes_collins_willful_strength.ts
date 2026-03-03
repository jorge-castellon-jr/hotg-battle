import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const chrono_break0: BaseRangerCard = {
  name: 'CHRONO BREAK',
  type: 'attack',
  text: ['If this attack defeats the target, discard the top card of your deck, then place this card on top of your deck instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const arrow_shot1: BaseRangerCard = {
  name: 'ARROW SHOT',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const pay_it_forward2: BaseRangerCard = {
  name: 'PAY IT FORWARD',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Another Ranger may immediately play an attack card. Treat that card’s attack value as 3 dice (if it is not special).'],
  energy: 0,
  shields: 2,
};

const brazen_strike3: BaseRangerCard = {
  name: 'BRAZEN STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, draw 1 card.'],
  energy: 0,
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

const v_1_blaster5: BaseRangerCard = {
  name: 'V-1 BLASTER',
  type: 'attack',
  text: ['Any Ranger may discard 1 attack card from their hand with an energy cost of 1 or zero. This card gains the ability text of that card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 6 }],
};

const deck: RangerCard[] = createDeck(
  [
    [chrono_break0, 2],
    [arrow_shot1, 2],
    [pay_it_forward2, 2],
    [brazen_strike3, 2],
    [chrono_blaster4, 1],
    [v_1_blaster5, 1]
  ],
  {
    team: 'Time Force',
    owner: 'wes_collins_willful_strength',
    color: 'red'
  }
);

export default deck;