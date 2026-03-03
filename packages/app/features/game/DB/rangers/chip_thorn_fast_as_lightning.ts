import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const stunning_spell0: BaseRangerCard = {
  name: 'STUNNING SPELL',
  type: 'maneuver',
  text: ['Gain 1  [ENERGY]. Another Ranger may immediately play 1 card with an energy cost of zero. Ignore the effect text of all enemy cards with the PASSIVE keyword until the end of this turn.'],
  energy: 0,
  shields: 1,
};

const sparking_strike1: BaseRangerCard = {
  name: 'SPARKING STRIKE',
  type: 'attack',
  text: ['The next time any Ranger performs a maneuver during this battle, deal 1 [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const phantom_laser2: BaseRangerCard = {
  name: 'PHANTOM LASER',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const gathering_storm3: BaseRangerCard = {
  name: 'GATHERING STORM',
  type: 'maneuver',
  text: ['Choose 1 card in any Ranger’s discard pile, and shuffle it back into their deck. Deal 1 [HIT] each to a number of enemy cards equal to that card’s shield value.'],
  energy: 1,
  shields: 3,
};

const mystic_morpher4: BaseRangerCard = {
  name: 'MYSTIC MORPHER',
  type: 'maneuver',
  text: ['You may immediately play 1 maneuver card from your discard pile. If you spend 1 [ENERGY], you may play an attack card instead. '],
  energy: 0,
  shields: 1,
};

const magi_staff_yellow5: BaseRangerCard = {
  name: 'MAGI STAFF YELLOW',
  type: 'attack',
  text: ['The next time any Ranger performs a maneuver during this battle, roll 2 dice and deal that much [HIT] to an enemy card of your choice.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [stunning_spell0, 2],
    [sparking_strike1, 2],
    [phantom_laser2, 2],
    [gathering_storm3, 2],
    [mystic_morpher4, 1],
    [magi_staff_yellow5, 1]
  ],
  {
    team: 'Mystic Force',
    owner: 'chip_thorn_fast_as_lightning',
    color: 'yellow'
  }
);

export default deck;