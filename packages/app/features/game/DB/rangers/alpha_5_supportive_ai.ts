import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  teamEffort: {
    name: 'Team Effort',
    type: 'reaction',
    text: [
      'Play this card after any Ranger plays an attack card with an energy cost of zero. Another Ranger may immediately play 1 card.',
    ],
    energy: 1,
    shields: 1, 
  },

  combatProtocol: {
    name: 'Combat Protocol',
    type: 'maneuver',
    text: [
      'Another Ranger may perform an attack with 2 dice. That Ranger may choose to either reroll any number of dice during that attack or gain 1 energy.',
    ],
    energy: 0,
    shields: 1, 
  },

  energyBarrier: {
    name: 'Energy Barrier',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Roll 3 dice. Reduce that damage by the number of ¤ results rolled.',
    ],
    energy: 0,
    shields: 2, 
  },

  coordination: {
    name: 'Coordination',
    type: 'reaction',
    text: [
      'Play this card before another Ranger performs an attack. Add 1 die to that attack. That Ranger may return that card to their hand instead of discarding it.',
    ],
    energy: 1,
    shields: 3, 
  },

  zordMaintenance: {
    name: 'Zord Maintenance',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Ready 1 exhausted Zord card of your choice.',
    ],
    energy: 0,
    shields: 1, 
  },

  battleTeleport: {
    name: 'Battle Teleport',
    type: 'maneuver',
    text: [
      'Move any Ranger from the Command Center to an outer location of your choice. If a battle is currently taking place in that location, that Ranger may immediately play 1 card.',
    ],
    energy: 2,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.teamEffort, 2],
    [card.combatProtocol, 2],
    [card.energyBarrier, 2],
    [card.coordination, 2],
    [card.zordMaintenance, 1],
    [card.battleTeleport, 1] 
  ],
  {
    team: 'Alpha 5 Supportive',
    owner: 'alpha_5_supportive_ai',
    color: 'blue'
  }
);

export default deck;
