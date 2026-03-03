import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const finishing_blow0: BaseRangerCard = {
  name: 'FINISHING BLOW',
  type: 'attack',
  text: ['Add 1 die to this attack for each hit token on the targeted enemy card.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const jurassic_counter1: BaseRangerCard = {
  name: 'JURASSIC COUNTER',
  type: 'reaction',
  text: ['Play this card when an enemy card deals damage to any Ranger. Gain 1 [ENERGY] and deal 1 [HIT] to that enemy card'],
  energy: 0,
  shields: 2,
};

const wave_strike2: BaseRangerCard = {
  name: 'WAVE STRIKE',
  type: 'attack',
  text: ['You must deal the [HIT] of each die from this attack to a different target.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 3 }],
};

const fire_strike3: BaseRangerCard = {
  name: 'FIRE STRIKE',
  type: 'attack',
  text: ['The next time any Ranger performs an attack, that Ranger may reroll any number of dice during that attack.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const energy_orb4: BaseRangerCard = {
  name: 'ENERGY ORB',
  type: 'attack',
  text: ['Skip the next Ranger turn in this battle.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 5 }],
};

const brachio_staff5: BaseRangerCard = {
  name: 'BRACHIO STAFF',
  type: 'maneuver',
  text: ['Choose 2 attack cards in your discard pile with an energy cost of 1 or less and play them both, one at a time, without paying their energy costs.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [finishing_blow0, 2],
    [jurassic_counter1, 2],
    [wave_strike2, 2],
    [fire_strike3, 2],
    [energy_orb4, 1],
    [brachio_staff5, 1]
  ],
  {
    team: 'Dino Thunder',
    owner: 'tommy_oliver_legendary_mentor',
    color: 'black'
  }
);

export default deck;