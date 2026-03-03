import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const drago_strike0: BaseRangerCard = {
  name: 'DRAGO STRIKE',
  type: 'attack',
  text: [''],
  energy: 2,
  shields: 1,
  attack: [{ value: 4 }],
};

const misdirection1: BaseRangerCard = {
  name: 'MISDIRECTION',
  type: 'reaction',
  text: ['Play this card when an enemy card deals damage. Gain 1 [ENERGY]. You may divide that damage among any number of Rangers.'],
  energy: 0,
  shields: 2,
};

const arrow_shot2: BaseRangerCard = {
  name: 'ARROW SHOT',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const dash__slash3: BaseRangerCard = {
  name: 'DASH & SLASH',
  type: 'attack',
  text: ['Before rolling, you may place 1 card from your hand on the bottom of your deck, if you do, add 2 dice to this attack.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 1, fixed: true }],
};

const laser_arrows4: BaseRangerCard = {
  name: 'LASER ARROWS',
  type: 'attack',
  text: ['Add a number of dice to this attack equal to the amount of [ENERGY] spent to play this card. If this attack defeats the target, you may divide any excess [HIT] among enemy cards adjacent to the target.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const drago_sword5: BaseRangerCard = {
  name: 'DRAGO SWORD',
  type: 'maneuver',
  text: ['Choose 1 attack card from your discard pile with an energy cost of 2 or less. Play that card without paying its energy cost. Add 3 dice to that attack.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [drago_strike0, 2],
    [misdirection1, 2],
    [arrow_shot2, 2],
    [dash__slash3, 2],
    [laser_arrows4, 1],
    [drago_sword5, 1]
  ],
  {
    team: 'Dino Thunder',
    owner: 'trent_mercer_fierce_impact',
    color: 'white'
  }
);

export default deck;