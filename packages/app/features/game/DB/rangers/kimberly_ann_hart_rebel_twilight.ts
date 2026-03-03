import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const veteran_instincts0: BaseRangerCard = {
  name: 'VETERAN INSTINCTS',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. You may draw up to 2 cards, then you may immediately play another card.'],
  energy: 0,
  shields: 1,
};

const ptera_kick1: BaseRangerCard = {
  name: 'PTERA KICK',
  type: 'attack',
  text: ['After you resolve this attack, if the target was not defeated, return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const piercing_shot2: BaseRangerCard = {
  name: 'PIERCING SHOT',
  type: 'attack',
  text: ['If this attack defeats the target, deal any remaining [HIT] from this attack to an enemy card adjacent to the target.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const scorned_shot3: BaseRangerCard = {
  name: 'SCORNED SHOT',
  type: 'reaction',
  text: ['Play this card after an enemy card resolves to roll 2 dice and deal that much [HIT] to that enemy card.'],
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
    [veteran_instincts0, 2],
    [ptera_kick1, 2],
    [piercing_shot2, 2],
    [scorned_shot3, 2],
    [blade_blaster4, 1],
    [arrow_shot5, 1]
  ],
  {
    team: 'Solar',
    owner: 'kimberly_ann_hart_rebel_twilight',
    color: 'pink'
  }
);

export default deck;