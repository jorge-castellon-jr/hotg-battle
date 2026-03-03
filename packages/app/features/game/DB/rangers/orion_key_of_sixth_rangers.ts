import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const cresting_strike0: BaseRangerCard = {
  name: 'CRESTING STRIKE',
  type: 'attack',
  text: ['Draw 1 card from your key deck.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const active_ranger_key1: BaseRangerCard = {
  name: 'ACTIVE RANGER KEY',
  type: 'maneuver',
  text: ['Gain the character ability of 1 of your key deck’s linked character cards until the end of this battle. Another Ranger may immediately play 1 card.'],
  energy: 0,
  shields: 2,
};

const sixfold_guard2: BaseRangerCard = {
  name: 'SIXFOLD GUARD',
  type: 'reaction',
  text: ['Play this card when you reveal a card for defense. Gain 1 [ENERGY] and draw 1 card from your key deck. Add the shield value of the drawn card to the shield value of the revealed card.'],
  energy: 0,
  shields: 2,
};

const sixfold_strike3: BaseRangerCard = {
  name: 'SIXFOLD STRIKE',
  type: 'attack',
  text: ['You may discard 1 key card to the return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 3 }],
};

const legandary_final_strike4: BaseRangerCard = {
  name: 'LEGANDARY FINAL STRIKE',
  type: 'maneuver',
  text: ['Play any number of key cards, one at a time, with a total shield value of up to 6 [SHIELD].'],
  energy: 1,
  shields: 2,
};

const super_silver_spear5: BaseRangerCard = {
  name: 'SUPER SILVER SPEAR',
  type: 'attack',
  text: ['Draw up to 2 cards from your key deck.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 6 }],
};

const deck: RangerCard[] = createDeck(
  [
    [cresting_strike0, 2],
    [active_ranger_key1, 2],
    [sixfold_guard2, 2],
    [sixfold_strike3, 2],
    [legandary_final_strike4, 1],
    [super_silver_spear5, 1]
  ],
  {
    team: 'Super Megaforce',
    owner: 'orion_key_of_sixth_rangers',
    color: 'silver'
  }
);

export default deck;