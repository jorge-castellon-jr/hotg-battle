import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const multi_strike0: BaseRangerCard = {
  name: 'MULTI STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, you may perform an additional attack with 1 die.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const sleight_of_hand1: BaseRangerCard = {
  name: 'SLEIGHT OF HAND',
  type: 'reaction',
  text: ['Play this card after any Ranger rolls dice for any attack. Remove 1 die from that attack to gain [ENERGY] equal to the [HIT] of that result.'],
  energy: 0,
  shields: 2,
};

const sideswipe2: BaseRangerCard = {
  name: 'SIDESWIPE',
  type: 'attack',
  text: ['Another Ranger may draw 2 cards. If they do, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const double_team3: BaseRangerCard = {
  name: 'DOUBLE TEAM',
  type: 'maneuver',
  text: ['Another Ranger may immediately play 1 attack card. After rolling, they may choose 1 die result and add 1 die to the attack with the same result.'],
  energy: 0,
  shields: 3,
};

const deltamax_fire4: BaseRangerCard = {
  name: 'DELTAMAX FIRE',
  type: 'maneuver',
  text: ['Perform an attack with 3 dice that targets a food soldier card of your choice. Another ranger may then perform an attack with 3 dice that targets a different foot soldier card.'],
  energy: 2,
  shields: 1,
};

const deltamax_riot5: BaseRangerCard = {
  name: 'DELTAMAX RIOT',
  type: 'attack',
  text: ['After rolling, choose 1 die result. The next time any Ranger performs an attack during this battle, add 2 dice to that attack with the same result.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [multi_strike0, 2],
    [sleight_of_hand1, 2],
    [sideswipe2, 2],
    [double_team3, 2],
    [deltamax_fire4, 1],
    [deltamax_riot5, 1]
  ],
  {
    team: 'S.P.D.',
    owner: 'elizabeth_z_delgado_replication',
    color: 'yellow'
  }
);

export default deck;