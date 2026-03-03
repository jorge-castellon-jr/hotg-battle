import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const thunder_shield0: BaseRangerCard = {
  name: 'THUNDER SHIELD',
  type: 'reaction',
  text: ['Play this card at the start of any enemy turn in battle. Treat the first card each Ranger reveals for defense this turn as having a shield value of 3.'],
  energy: 0,
  shields: 1,
};

const thunder_blaster1: BaseRangerCard = {
  name: 'THUNDER BLASTER',
  type: 'attack',
  text: ['Any Ranger may discard a card named “Thunder Blaster.” If they do, add 2 dice to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const flashing_thunder_kick2: BaseRangerCard = {
  name: 'FLASHING THUNDER KICK',
  type: 'attack',
  text: ['Any Ranger may reveal a card from their hand with “Thunder Kick” in its name. If they do, deal 1 [HIT] to an enemy card without the GUARD keyword.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2, fixed: true }],
};

const thunder_glider_cycle3: BaseRangerCard = {
  name: 'THUNDER GLIDER CYCLE',
  type: 'maneuver',
  text: ['Choose 1 card from your discard pile and add it to your hand. Then deal 3 [HIT] to an enemy card without the GUARD keyword.'],
  energy: 2,
  shields: 3,
};

const thunder_staff4: BaseRangerCard = {
  name: 'THUNDER STAFF',
  type: 'attack',
  text: ['Another Ranger may reveal a card from their hand named “Thunder Staff.” If they do, return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const crimson_blaster5: BaseRangerCard = {
  name: 'CRIMSON BLASTER',
  type: 'attack',
  text: ['If this attack defeats an enemy card without the GUARD keyword, gain 2 [ENERGY] and another Ranger may immediately play 1 card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [thunder_shield0, 2],
    [thunder_blaster1, 2],
    [flashing_thunder_kick2, 2],
    [thunder_glider_cycle3, 2],
    [thunder_staff4, 1],
    [crimson_blaster5, 1]
  ],
  {
    team: 'Ninja Storm',
    owner: 'hunter_bradley_roaring_thunder',
    color: 'red'
  }
);

export default deck;