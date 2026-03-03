import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const barricade0: BaseRangerCard = {
  name: 'BARRICADE',
  type: 'reaction',
  text: ['Play this card when 1 or more Rangers suffer damage. Reduce the damage that up to 2 of those Rangers suffer by 2.'],
  energy: 0,
  shields: 2,
};

const barrier_break1: BaseRangerCard = {
  name: 'BARRIER BREAK',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. If that damage was reduced, deal 2 [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 2,
};

const tactical_shot2: BaseRangerCard = {
  name: 'TACTICAL SHOT',
  type: 'attack',
  text: ['The next time any Ranger suffers damage during this battle, reduce that damage by 1.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const patrol_strike3: BaseRangerCard = {
  name: 'PATROL STRIKE',
  type: 'attack',
  text: ['If the target of this attack is a foot soldier card, gain 1 [ENERGY].'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const deltamax_fire4: BaseRangerCard = {
  name: 'DELTAMAX FIRE',
  type: 'maneuver',
  text: ['Perform an attack with 3 dice that targets a food soldier card of your choice. Another ranger may then perform an attack with 3 dice that targets a different foot soldier card.'],
  energy: 2,
  shields: 1,
};

const deltamax_sniper5: BaseRangerCard = {
  name: 'DELTAMAX SNIPER',
  type: 'attack',
  text: ['If the target of this attack has the GUARD keyword, place this card on top of your deck instead of discarding it.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [barricade0, 2],
    [barrier_break1, 2],
    [tactical_shot2, 2],
    [patrol_strike3, 2],
    [deltamax_fire4, 1],
    [deltamax_sniper5, 1]
  ],
  {
    team: 'S.P.D.',
    owner: 'schuyler_sky_tate_barrier_field',
    color: 'blue'
  }
);

export default deck;