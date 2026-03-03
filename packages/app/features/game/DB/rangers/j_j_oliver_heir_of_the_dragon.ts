import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const green_crash0: BaseRangerCard = {
  name: 'GREEN CRASH',
  type: 'reaction',
  text: ['Play this card when an effect would reduce a card’s energy cost below zero. Gain 1 [ENERGY]. Deal 1 [HIT] to an enemy card of your choice.'],
  energy: 0,
  shields: 1,
};

const got_you_covered1: BaseRangerCard = {
  name: 'GOT YOU COVERED',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Choose up to 2 cards from other Ranger discard piles and place those cards on the bottom of their respective decks in any order.'],
  energy: 0,
  shields: 2,
};

const setup_strike2: BaseRangerCard = {
  name: 'SETUP STRIKE',
  type: 'attack',
  text: ['The next time any Ranger plays a card during this battle, reduce it\'s energy cost by 1.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const sweeping_shot3: BaseRangerCard = {
  name: 'SWEEPING SHOT',
  type: 'attack',
  text: ['After you resolve this attack, deal 1 [HIT] to a foot soldier card of your choice.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const deltamax_fire4: BaseRangerCard = {
  name: 'DELTAMAX FIRE',
  type: 'maneuver',
  text: ['Perform an attack with 3 dice that targets a food soldier card of your choice. Another ranger may then perform an attack with 3 dice that targets a different foot soldier card.'],
  energy: 2,
  shields: 1,
};

const deltamax_booster5: BaseRangerCard = {
  name: 'DELTAMAX BOOSTER',
  type: 'attack',
  text: ['The next time any Ranger plays a card during this battle, reduce it\'s energy cost by 3.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [green_crash0, 2],
    [got_you_covered1, 2],
    [setup_strike2, 2],
    [sweeping_shot3, 2],
    [deltamax_fire4, 1],
    [deltamax_booster5, 1]
  ],
  {
    team: 'S.P.D.',
    owner: 'j_j_oliver_heir_of_the_dragon',
    color: 'green'
  }
);

export default deck;