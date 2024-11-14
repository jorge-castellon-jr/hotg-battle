import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  brainstorm: {
    name: 'Brainstorm',
    type: 'maneuver',
    text: [
      'Reveal the top card of any Ranger deck. Gain an amount of energy equal to the number of shields on that card. Another Ranger may then immediately play 1 card with an energy cost of zero.',
    ],
    energy: 1,
    shields: 1, 
  },

  chronoTrigger: {
    name: 'Chrono Trigger',
    type: 'attack',
    text: [
      'If this attack defeats the target, any Ranger may take the top card from their discard pile and place it on the top or bottom of their deck.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  electroBooster: {
    name: 'Electro Booster',
    type: 'attack',
    text: [
      'If the target of this attack drains energy, add 2 dice to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  ambiguousWarning: {
    name: 'Ambiguous Warning',
    type: 'reaction',
    text: [
      'Play this card at the start of a battle. Shuffle this card into another Ranger\'s deck.',
      '★ When this card is revealed for defense, gain 1 energy.',
    ],
    energy: 0,
    shields: 3, 
  },

  chronoBlaster: {
    name: 'Chrono Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 2,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  v3Blaster: {
    name: 'V3 Blaster',
    type: 'attack',
    text: [
      'You may remove any number of dice from this attack before rolling. For each die removed, any Ranger may take the top card from their discard pile and place it on top of their deck.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.brainstorm, 2],
    [card.chronoTrigger, 2],
    [card.electroBooster, 2],
    [card.ambiguousWarning, 2],
    [card.chronoBlaster, 1],
    [card.v3Blaster, 1] 
  ],
  {
    team: 'Time Force',
    owner: 'time_force_green_trip',
    color: 'green'
  }
);

export default deck;
