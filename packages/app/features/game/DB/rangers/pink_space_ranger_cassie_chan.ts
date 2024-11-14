import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  cometKick: {
    name: 'Comet Kick',
    type: 'attack',
    text: [
      '★ When this card is revealed for defense, you may gain 1 energy or add 1 shield to this card.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  toughStuff: {
    name: 'Tough Stuff',
    type: 'reaction',
    text: [
      'Play this card when any Ranger reveals a card for defense. Double the number of shields on that card.',
      '★ When this card is revealed for defense, you may spend 1 energy to add 2 shields to this card.',
    ],
    energy: 0,
    shields: 2, 
  },

  orbitalDropkick: {
    name: 'Orbital Dropkick',
    type: 'maneuver',
    text: [
      'During the next Ranger turn in this battle, instead of playing a card, you may perform an attack with 3 dice, then deal 1 ¤ to each enemy card adjacent to the target.',
    ],
    energy: 0,
    shields: 2, 
  },

  sweepingStrike: {
    name: 'Sweeping Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, deal 1 ¤ to an enemy card adjacent to the target.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  astroBlaster: {
    name: 'Astro Blaster',
    type: 'reaction',
    text: [
      'Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 ¤ to that attack for each energy spent to play this card (max 3).',
    ],
    energy: 0,
    shields: 1, 
  },

  satelliteStunner: {
    name: 'Satellite Stunner',
    type: 'maneuver',
    text: [
      'Choose up to 2 foot soldier cards, 1 monster card, or 1 boss card. For each card chosen, add hit tokens until it has a number equal to 1 less than its health value.',
    ],
    energy: 2,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.cometKick, 2],
    [card.toughStuff, 2],
    [card.orbitalDropkick, 2],
    [card.sweepingStrike, 2],
    [card.astroBlaster, 1],
    [card.satelliteStunner, 1] 
  ],
  {
    team: '',
    owner: 'pink_space_ranger_cassie_chan',
    color: 'pink'
  }
);

export default deck;
