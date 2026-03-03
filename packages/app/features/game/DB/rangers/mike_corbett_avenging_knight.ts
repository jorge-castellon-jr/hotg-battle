import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const sacrifice0: BaseRangerCard = {
  name: 'SACRIFICE',
  type: 'maneuver',
  text: ['Discard the top card of your deck. Up to 2 other Rangers in your location may each choose 1 card from their discard pile and add it to their hand or place it on top of their deck.'],
  energy: 0,
  shields: 1,
};

const magna_defense1: BaseRangerCard = {
  name: 'MAGNA DEFENSE',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2. If there is a card named Magna Defense in your discard pile, reduce that damage by 4 instead.'],
  energy: 0,
  shields: 2,
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
    [sacrifice0, 2],
    [magna_defense1, 2],
    [noble_blow2, 2],
    [valiant_charge3, 2],
    [magna_blaster4, 1],
    [magna_blade5, 1]
  ],
  {
    team: 'Galaxy',
    owner: 'mike_corbett_avenging_knight',
    color: 'black'
  }
);

export default deck;