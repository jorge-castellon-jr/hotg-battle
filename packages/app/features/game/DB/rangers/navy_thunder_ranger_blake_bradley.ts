import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  tornadoStar: {
    name: 'Tornado Star',
    type: 'reaction',
    text: [
      'Play this card when any Ranger attacks an enemy card with the GUARD keyword. Gain 1 energy and add 1 die to that attack.',
    ],
    energy: 0,
    shields: 1, 
  },

  thunderBlaster: {
    name: 'Thunder Blaster',
    type: 'attack',
    text: [
      'Any Ranger may discard a card named "Thunder Blaster." If they do, add 2 dice to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  crashingThunderKick: {
    name: 'Crashing Thunder Kick',
    type: 'attack',
    text: [
      'Any Ranger may reveal a card from their hand with "Thunder Kick" in its name. If they do, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
        fixed: true, 
      }, 
    ], 
  },

  thunderBlade: {
    name: 'Thunder Blade',
    type: 'attack',
    text: [
      'If this attack targets an enemy card with the GUARD keyword, you may deal an equal amount of ¤ to an enemy card adjacent to the target.',
    ],
    energy: 2,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  thunderStaff: {
    name: 'Thunder Staff',
    type: 'attack',
    text: [
      'Another Ranger may reveal a card from their hand named "Thunder Staff." If they do, return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  navyAntler: {
    name: 'Navy Antler',
    type: 'attack',
    text: [
      'If this attack defeats an enemy card with the GUARD keyword, deal any excess ¤ from this attack to each enemy card adjacent to the target.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.tornadoStar, 2],
    [card.thunderBlaster, 2],
    [card.crashingThunderKick, 2],
    [card.thunderBlade, 2],
    [card.thunderStaff, 1],
    [card.navyAntler, 1] 
  ],
  {
    team: 'Navy Thunder Ranger Blake',
    owner: 'navy_thunder_ranger_blake_bradley',
    color: 'blue'
  }
);

export default deck;
