import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  tacticalShot: {
    name: 'Tactical Shot',
    type: 'attack',
    text: [
      'The next time any Ranger suffers damage during this battle, reduce that damage by 1.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  patrolStrike: {
    name: 'Patrol Strike',
    type: 'attack -',
    text: [
      'Play this card when 1 or more Rangers suffer damage. Reduce the damage that up to 2 of those Rangers suffer by 2.',
    ],
    energy: 1,
    shields: 2, 
  },

  barrierBreak: {
    name: 'Barrier Break',
    type: 'reaction',
    text: [
      'If the target of this attack is a foot soldier card, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
  },

  barricade: {
    name: 'Barricade',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. If that damage was reduced, deal 2 ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 2, 
  },

  deltamaxFire: {
    name: 'Deltamax Fire',
    type: 'maneuver',
    text: [
      'Perform an attack with 3 dice that targets a foot soldier card of your choice. Another Ranger may then perform an attack with 3 dice that targets a different foot soldier card.',
    ],
    energy: 2,
    shields: 1, 
  },

  deltamaxSniper: {
    name: 'Deltamax Sniper',
    type: 'attack',
    text: [
      'If the target of this attack has the GUARD keyword, place this card on top of your deck instead of discarding it.',
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
    [card.tacticalShot, 2],
    [card.patrolStrike, 2],
    [card.barrierBreak, 2],
    [card.barricade, 2],
    [card.deltamaxFire, 1],
    [card.deltamaxSniper, 1] 
  ],
  {
    team: 'Spd',
    owner: 'spd_blue_ranger_schuyler_sky_tate',
    color: 'blue'
  }
);

export default deck;
