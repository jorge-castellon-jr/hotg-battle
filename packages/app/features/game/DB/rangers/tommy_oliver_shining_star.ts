import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const lead_by_example0: BaseRangerCard = {
  name: 'LEAD BY EXAMPLE',
  type: 'maneuver',
  text: ['You may immediately play another card. Then another Ranger of your choice may immediately play 1 card.'],
  energy: 1,
  shields: 1,
};

const red_riposte1: BaseRangerCard = {
  name: 'RED RIPOSTE',
  type: 'reaction',
  text: ['Play this card when any Ranger reveals a card for defense to add 2 [SHIELD] to that card.'],
  energy: 0,
  shields: 2,
};

const star_strike2: BaseRangerCard = {
  name: 'STAR STRIKE',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const flying_power_kick3: BaseRangerCard = {
  name: 'FLYING POWER KICK',
  type: 'attack',
  text: [''],
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

const zeo_battle_sword5: BaseRangerCard = {
  name: 'ZEO BATTLE SWORD',
  type: 'attack',
  text: ['After you resolve this attack, reveal up to 2 cards from your hand and resolve the ★ abilities on those cards as if they were revealed for defense.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [lead_by_example0, 2],
    [red_riposte1, 2],
    [star_strike2, 2],
    [flying_power_kick3, 2],
    [power_pod_sword4, 1],
    [zeo_battle_sword5, 1]
  ],
  {
    team: 'Zeo',
    owner: 'tommy_oliver_shining_star',
    color: 'red'
  }
);

export default deck;