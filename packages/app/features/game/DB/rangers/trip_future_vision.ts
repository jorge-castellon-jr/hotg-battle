import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const brainstorm0: BaseRangerCard = {
  name: 'BRAINSTORM',
  type: 'maneuver',
  text: ['Reveal the top card of any Ranger deck. Gain an amount of [ENERGY] equal to the number of [SHIELD] on that card. Another Ranger may then immediately play 1 card with an energy cost of zero.'],
  energy: 1,
  shields: 1,
};

const electro_booster1: BaseRangerCard = {
  name: 'ELECTRO BOOSTER',
  type: 'attack',
  text: ['If the target of this attack drains [ENERGY], add 2 dice to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const chrono_trigger2: BaseRangerCard = {
  name: 'CHRONO TRIGGER',
  type: 'attack',
  text: ['If this attack defeats the target, any Ranger may take the top card from their discard pile and place it on the top or bottom of their deck.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 1 }],
};

const ambiguous_warning3: BaseRangerCard = {
  name: 'AMBIGUOUS WARNING',
  type: 'reaction',
  text: ['Play this card at the start of a battle. Shuffle this card into another Ranger’s deck.'],
  energy: 0,
  shields: 3,
};

const chrono_blaster4: BaseRangerCard = {
  name: 'CHRONO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets.'],
  energy: 2,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const v_3_blaster5: BaseRangerCard = {
  name: 'V-3 BLASTER',
  type: 'attack',
  text: ['You may remove any number of dice from this attack before rolling. For each die removed, any Ranger may take the top card of their discard pile and place it on the bottom of their deck.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [brainstorm0, 2],
    [electro_booster1, 2],
    [chrono_trigger2, 2],
    [ambiguous_warning3, 2],
    [chrono_blaster4, 1],
    [v_3_blaster5, 1]
  ],
  {
    team: 'Time Force',
    owner: 'trip_future_vision',
    color: 'green'
  }
);

export default deck;