import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  mercuryStrike: {
    name: 'Mercury Strike',
    type: 'attack',
    text: [
      'During this attack, convert all ○ results to ¤¤ results and vice versa.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  chainCombo: {
    name: 'Chain Combo',
    type: 'attack',
    text: [
      'After rolling, remove 1 die from this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  mercuryGuard: {
    name: 'Mercury Guard',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Roll 3 dice. For each die, you may either reduce that damage or gain energy equal to the ¤ results.',
    ],
    energy: 0,
    shields: 2, 
  },

  metalSniper: {
    name: 'Metal Sniper',
    type: 'attack',
    text: [
      'Add a number of dice to this attack equal to the amount of energy spent to play this card. You may ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  mercuryOverdrive: {
    name: 'Mercury Overdrive',
    type: 'maneuver',
    text: [
      'Until the end of this battle, each time a Ranger rolls at least 1 ¤¤ result, gain 1 energy. Place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
  },

  driveDetector: {
    name: 'Drive Detector',
    type: 'attack',
    text: [
      'After rolling, you may remove 1 die from this attack. If you do, any Ranger may search their deck for a card, add it to their hand, and then shuffle their deck.',
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
    [card.mercuryStrike, 2],
    [card.chainCombo, 2],
    [card.mercuryGuard, 2],
    [card.metalSniper, 2],
    [card.mercuryOverdrive, 1],
    [card.driveDetector, 1] 
  ],
  {
    team: 'Mercury Ranger',
    owner: 'mercury_ranger_tyzonn',
    color: 'unknown'
  }
);

export default deck;
