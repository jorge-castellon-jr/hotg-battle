import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const inspiring_presence0: BaseRangerCard = {
  name: 'INSPIRING PRESENCE',
  type: 'maneuver',
  text: ['After you play this card, another Ranger of your choice may immediately play 1 card.'],
  energy: 0,
  shields: 1,
};

const armored_blow1: BaseRangerCard = {
  name: 'ARMORED BLOW',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const lightning_rod2: BaseRangerCard = {
  name: 'LIGHTNING ROD',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 2,
  attack: [{ value: 2 }],
};

const emergency_shields3: BaseRangerCard = {
  name: 'EMERGENCY SHIELDS!',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2.'],
  energy: 0,
  shields: 2,
};

const gold_rush4: BaseRangerCard = {
  name: 'GOLD RUSH',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const golden_power_staff5: BaseRangerCard = {
  name: 'GOLDEN POWER STAFF',
  type: 'attack',
  text: ['Resolve the 王 ability on any 1 card in your discard pile.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 6 }],
};

const deck: RangerCard[] = createDeck(
  [
    [inspiring_presence0, 2],
    [armored_blow1, 2],
    [lightning_rod2, 2],
    [emergency_shields3, 2],
    [gold_rush4, 1],
    [golden_power_staff5, 1]
  ],
  {
    team: 'Zeo',
    owner: 'trey_of_triforia_power_of_triforia',
    color: 'gold'
  }
);

export default deck;