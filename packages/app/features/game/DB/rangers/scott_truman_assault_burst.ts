import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const attack_sequence_mustang0: BaseRangerCard = {
  name: 'ATTACK SEQUENCE MUSTANG',
  type: 'reaction',
  text: ['Play this card at the start of any enemy turn in battle. For each [ENERGY] spent to play this card, reduce all damage dealt to Rangers by 1 until the end of this turn'],
  energy: 0,
  shields: 1,
};

const condor_strike1: BaseRangerCard = {
  name: 'CONDOR STRIKE',
  type: 'attack',
  text: ['Deal 1 [HIT] to a number of enemy cards, other than the target, equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const redline_slash2: BaseRangerCard = {
  name: 'REDLINE SLASH',
  type: 'attack',
  text: ['If there is no [ENERGY] in the shared pool, add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const rev_the_engines3: BaseRangerCard = {
  name: 'REV THE ENGINES',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. The next time any Ranger performs an attack in this battle, add 2 dice to that attack.'],
  energy: 0,
  shields: 3,
};

const nitro_blaster4: BaseRangerCard = {
  name: 'NITRO BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among a number of targets equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3 }],
};

const street_saber_strike5: BaseRangerCard = {
  name: 'STREET SABER STRIKE',
  type: 'attack',
  text: ['Before rolling, if any effects add dice to this attack, you may choose 1 of those effects and apply it an additional time.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [attack_sequence_mustang0, 2],
    [condor_strike1, 2],
    [redline_slash2, 2],
    [rev_the_engines3, 2],
    [nitro_blaster4, 1],
    [street_saber_strike5, 1]
  ],
  {
    team: 'RPM',
    owner: 'scott_truman_assault_burst',
    color: 'red'
  }
);

export default deck;