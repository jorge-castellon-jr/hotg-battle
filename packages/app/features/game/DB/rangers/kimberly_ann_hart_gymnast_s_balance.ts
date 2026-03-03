import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const take_aim0: BaseRangerCard = {
  name: 'TAKE AIM',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. You may immediately play another card. If it is an attack, you may reroll any number of dice during that attack.'],
  energy: 0,
  shields: 1,
};

const arrow_shot1: BaseRangerCard = {
  name: 'ARROW SHOT',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const flying_kick2: BaseRangerCard = {
  name: 'FLYING KICK',
  type: 'attack',
  text: ['Gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const acrobatics3: BaseRangerCard = {
  name: 'ACROBATICS',
  type: 'reaction',
  text: ['Play this card when you reveal a card for defense to add the revealed card to your hand instead of discarding it or placing it on the bottom of your deck.'],
  energy: 0,
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

const arrow_shot5: BaseRangerCard = {
  name: 'ARROW SHOT',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [take_aim0, 2],
    [arrow_shot1, 2],
    [flying_kick2, 2],
    [acrobatics3, 2],
    [blade_blaster4, 1],
    [arrow_shot5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'kimberly_ann_hart_gymnast_s_balance',
    color: 'pink'
  }
);

export default deck;