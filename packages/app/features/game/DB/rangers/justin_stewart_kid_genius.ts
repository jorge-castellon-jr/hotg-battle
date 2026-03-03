import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const earnest_impact0: BaseRangerCard = {
  name: 'EARNEST IMPACT',
  type: 'attack',
  text: ['Add 1 die to this attack for each [ENERGY] spent to play this card. After you resolve this attack, gain an amount of [ENERGY] equal to the [HIT] results.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const perfect_opportunity1: BaseRangerCard = {
  name: 'PERFECT OPPORTUNITY',
  type: 'maneuver',
  text: ['Draw until you have 3 cards in your hand. If you hand contains exactly 1 card with 1 ⛊, 1 card with 2 ⛊, and 1 card with 3 ⛊, gain 3 [ENERGY]. Another Ranger may immediately play 1 card.'],
  energy: 0,
  shields: 2,
};

const blue_shift_blast2: BaseRangerCard = {
  name: 'BLUE SHIFT BLAST',
  type: 'attack',
  text: ['If there is no [ENERGY] in the shared energy pool, gain 1 [ENERGY] and you may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const youthful_spirit3: BaseRangerCard = {
  name: 'YOUTHFUL SPIRIT',
  type: 'reaction',
  text: ['You may play this card from your discard pile. Play this card when any Ranger suffers damage. Reduce that damage by 1 for each [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 3,
};

const auto_blaster4: BaseRangerCard = {
  name: 'AUTO BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const turbo_hand_blasters5: BaseRangerCard = {
  name: 'TURBO HAND BLASTERS',
  type: 'attack',
  text: ['Add 1 die to this attack for each [ENERGY] spent to play this card. If you have no cards in your hand, you may perform this attack twice.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 1 }],
};

const deck: RangerCard[] = createDeck(
  [
    [earnest_impact0, 2],
    [perfect_opportunity1, 2],
    [blue_shift_blast2, 2],
    [youthful_spirit3, 2],
    [auto_blaster4, 1],
    [turbo_hand_blasters5, 1]
  ],
  {
    team: 'Turbo',
    owner: 'justin_stewart_kid_genius',
    color: 'blue'
  }
);

export default deck;