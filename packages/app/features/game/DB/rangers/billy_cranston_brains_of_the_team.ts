import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const counter_jab0: BaseRangerCard = {
  name: 'COUNTER JAB',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const knowledge_is_power1: BaseRangerCard = {
  name: 'KNOWLEDGE IS POWER',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. A Ranger of your choice may search their deck for a card and add it to their hand. If they do, they must shuffle their deck.'],
  energy: 0,
  shields: 2,
};

const tactical_strike2: BaseRangerCard = {
  name: 'TACTICAL STRIKE',
  type: 'attack',
  text: ['After you play this card, place it on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const mighty_maces3: BaseRangerCard = {
  name: 'MIGHTY MACES',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 3,
  attack: [{ value: 3 }],
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const tactical_strike5: BaseRangerCard = {
  name: 'TACTICAL STRIKE',
  type: 'attack',
  text: ['After you play this card, place it on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [counter_jab0, 2],
    [knowledge_is_power1, 2],
    [tactical_strike2, 2],
    [mighty_maces3, 2],
    [blade_blaster4, 1],
    [tactical_strike5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'billy_cranston_brains_of_the_team',
    color: 'blue'
  }
);

export default deck;