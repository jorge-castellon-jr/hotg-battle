import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  sacrifice: {
    name: 'Sacrifice',
    type: 'maneuver',
    text: [
      'Discard the top card of your deck. Up to 2 other Rangers in your location may each choose 1 card from their discard pile and add it to their hand or place it on top of their deck.',
    ],
    energy: 0,
    shields: 1, 
  },

  knightsFerocity: {
    name: 'Knights Ferocity',
    type: 'attack',
    text: [
      'After you resolve this attack, look at the top 3 cards of your deck. Discard 1 and place the other 2 back on top of your deck in any order.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  strikeForTheFallen: {
    name: 'Strike For The Fallen',
    type: 'attack',
    text: [
      'Choose 1 attack card from your discard pile. This card gains the effect text of that card.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  nobleBlow: {
    name: 'Noble Blow',
    type: 'attack',
    text: [
      'If there is a card named Noble Blow in your discard pile, gain 2 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  valiantCharge: {
    name: 'Valiant Charge',
    type: 'attack',
    text: [
      'If there is a card named Valiant Charge in your discard pile, add 2 dice to this attack.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  magnaBlaster: {
    name: 'Magna Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among any number of targets. If there is a card named Magna Blade in your discard pile, add 2 dice to this attack.',
    ],
    energy: 2,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  magnaBlade: {
    name: 'Magna Blade',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack. If there is a card named Magna Blaster in your discard pile, you may reroll any number of dice during this attack.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 5, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.sacrifice, 2],
    [card.knightsFerocity, 2],
    [card.strikeForTheFallen, 2],
    [card.nobleBlow, 2],
    [card.valiantCharge, 2],
    [card.magnaBlaster, 1],
    [card.magnaBlade, 1] 
  ],
  {
    team: 'Magna Defender I Nameless',
    owner: 'magna_defender_i_nameless_warrior',
    color: 'black'
  }
);

export default deck;
