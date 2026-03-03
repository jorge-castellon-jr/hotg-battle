import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const rising_tide0: BaseRangerCard = {
  name: 'Rising Tide',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. The next time any Ranger plays an attack card during this battle, add 1 die to that attack for each [ENERGY] spent to play that card. That Ranger may divide the [HIT] from that attack among any number of targets.'],
  energy: 0,
  shields: 1,
};

const wave_strike1: BaseRangerCard = {
  name: 'WAVE STRIKE',
  type: 'attack',
  text: ['You must deal the [HIT] from each die rolled during this attack to a different target.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 3 }],
};

const healing_stream2: BaseRangerCard = {
  name: 'HEALING STREAM',
  type: 'maneuver',
  text: ['A Ranger may choose cards with a total of up to 6 [SHIELD] from their discard pile and shuffle them into their deck. They may then draw up to 3 cards.'],
  energy: 1,
  shields: 3,
};

const mystic_morpher3: BaseRangerCard = {
  name: 'MYSTIC MORPHER',
  type: 'maneuver',
  text: ['You may immediately play 1 maneuver card from your discard pile. If you spend 1 [ENERGY], you may play an attack card instead. '],
  energy: 0,
  shields: 1,
};

const deck: RangerCard[] = createDeck(
  [
    [rising_tide0, 2],
    [wave_strike1, 2],
    [healing_stream2, 2],
    [mystic_morpher3, 1]
  ],
  {
    team: 'Mystic Force',
    owner: 'madison_rocca_fluid_as_the_sea',
    color: 'blue'
  }
);

export default deck;