import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const knights_ferocity0: BaseRangerCard = {
  name: 'KNIGHT’S FEROCITY',
  type: 'attack',
  text: ['After you resolve this attack, look at the top 3 cards of your deck. Discard 1 and place the other 2 back on top of your deck in any order.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3 }],
};

const strike_for_the_fallen1: BaseRangerCard = {
  name: 'STRIKE FOR THE FALLEN',
  type: 'attack',
  text: ['Choose 1 attack card from your discard pile. This card gains the effect text of that card.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const noble_blow2: BaseRangerCard = {
  name: 'NOBLE BLOW',
  type: 'attack',
  text: ['If there is a card named Noble Blow in your discard pile, gain 2 [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const valiant_charge3: BaseRangerCard = {
  name: 'VALIANT CHARGE',
  type: 'attack',
  text: ['If there is a card named Valiant Charge in your discard pile, add 2 dice to this attack.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const magna_blaster4: BaseRangerCard = {
  name: 'MAGNA BLASTER',
  type: 'attack',
  text: ['You may divide the [HIT] from this attack among any number of targets. If there is a card named Magna Blade in your discard pile, add 2 dice to this attack.'],
  energy: 2,
  shields: 1,
  attack: [{ value: 3 }],
};

const magna_blade5: BaseRangerCard = {
  name: 'MAGNA BLADE',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack. If there is a card named Magna Blaster in your discard pile, you may reroll any number of dice during this attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [knights_ferocity0, 2],
    [strike_for_the_fallen1, 2],
    [noble_blow2, 2],
    [valiant_charge3, 2],
    [magna_blaster4, 1],
    [magna_blade5, 1]
  ],
  {
    team: 'Galaxy',
    owner: 'magna_defender_old_wounds',
    color: 'black'
  }
);

export default deck;