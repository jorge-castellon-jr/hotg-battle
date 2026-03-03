import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const tornado_star0: BaseRangerCard = {
  name: 'TORNADO STAR',
  type: 'reaction',
  text: ['Play this card when any Ranger attacks an enemy card with the GUARD keyword. Gain 1 [ENERGY] and add 1 die to that attack.'],
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

const crashing_thunder_kick2: BaseRangerCard = {
  name: 'CRASHING THUNDER KICK',
  type: 'attack',
  text: ['Any Ranger may reveal a card from their hand with “Thunder Kick” in its name. If they do, gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2, fixed: true }],
};

const thunder_blade3: BaseRangerCard = {
  name: 'THUNDER BLADE',
  type: 'attack',
  text: ['If this attack targets an enemy card with the GUARD keyword, you may deal an equal amount of [HIT] to an enemy card adjacent to the target.'],
  energy: 2,
  shields: 3,
  attack: [{ value: 3 }],
};

const thunder_staff4: BaseRangerCard = {
  name: 'THUNDER STAFF',
  type: 'attack',
  text: ['Another Ranger may reveal a card from their hand named “Thunder Staff.” If they do, return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const navy_antler5: BaseRangerCard = {
  name: 'NAVY ANTLER',
  type: 'attack',
  text: ['If this attack defeats an enemy card with the GUARD keyword, deal any excess [HIT] from this attack to each enemy card adjacent to the target.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [tornado_star0, 2],
    [thunder_blaster1, 2],
    [crashing_thunder_kick2, 2],
    [thunder_blade3, 2],
    [thunder_staff4, 1],
    [navy_antler5, 1]
  ],
  {
    team: 'Ninja Storm',
    owner: 'blake_bradley_crashing_thunder',
    color: 'blue'
  }
);

export default deck;