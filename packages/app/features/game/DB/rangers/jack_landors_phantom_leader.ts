import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const shrewd_tactics0: BaseRangerCard = {
  name: 'SHREWD TACTICS',
  type: 'maneuver',
  text: ['Any Ranger may immediately play 1 card. Reduce its energy cost by 1.'],
  energy: 0,
  shields: 1,
};

const attack_of_opportunity1: BaseRangerCard = {
  name: 'ATTACK OF OPPORTUNITY',
  type: 'attack',
  text: ['If another Ranger has played an attack or maneuver card during this turn, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const hybrid_magnum2: BaseRangerCard = {
  name: 'HYBRID MAGNUM',
  type: 'attack',
  text: ['After you resolve this attack, you may deal 1 [HIT] to that target or another Ranger may immediately play 1 card with an energy cost of zero.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1, fixed: true }],
};

const its_all_coming_together3: BaseRangerCard = {
  name: 'IT’S ALL COMING TOGETHER',
  type: 'reaction',
  text: ['Play this card at the end of any Ranger turn in battle. Gain 1 [ENERGY] for each Ranger who has played a card during this turn (including you).'],
  energy: 1,
  shields: 3,
};

const deltamax_fire4: BaseRangerCard = {
  name: 'DELTAMAX FIRE',
  type: 'maneuver',
  text: ['Perform an attack with 3 dice that targets a good soldier card of your choice. Another ranger may then perform an attack with 3 dice that targets a different foot soldier card.'],
  energy: 2,
  shields: 1,
};

const delta_blasters5: BaseRangerCard = {
  name: 'DELTA BLASTERS',
  type: 'attack',
  text: ['After you resolve this attack, you may perform an additional attack with 3 dice or another Ranger may immediately play 1 card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [shrewd_tactics0, 2],
    [attack_of_opportunity1, 2],
    [hybrid_magnum2, 2],
    [its_all_coming_together3, 2],
    [deltamax_fire4, 1],
    [delta_blasters5, 1]
  ],
  {
    team: 'S.P.D.',
    owner: 'jack_landors_phantom_leader',
    color: 'red'
  }
);

export default deck;