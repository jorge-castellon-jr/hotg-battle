import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  shrewdTactics: {
    name: 'Shrewd Tactics',
    type: 'maneuver',
    text: [
      'Any Ranger may immediately play 1 card. Reduce its energy cost by 1.',
    ],
    energy: 0,
    shields: 1, 
  },

  attackOfOpportunity: {
    name: 'Attack Of Opportunity',
    type: 'attack',
    text: [
      'If another Ranger has played an attack or maneuver card during this turn, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  hybridMagnum: {
    name: 'Hybrid Magnum',
    type: 'attack',
    text: [
      'After you resolve this attack, you may deal 1 ¤ to that target or another Ranger may immediately play 1 card with an energy cost of zero.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  itsAllComingTogether: {
    name: 'Its All Coming Together',
    type: 'reaction',
    text: [
      'Play this card at the end of any Ranger turn in battle. Gain 1 energy for each Ranger who has played a card during this turn (including you).',
    ],
    energy: 1,
    shields: 3, 
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

  deltamaxBlasters: {
    name: 'Deltamax Blasters',
    type: 'attack',
    text: [
      'After you resolve this attack, you may perform an additional attack with 3 dice or another Ranger may immediately play 1 card.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.shrewdTactics, 2],
    [card.attackOfOpportunity, 2],
    [card.hybridMagnum, 2],
    [card.itsAllComingTogether, 2],
    [card.deltamaxFire, 1],
    [card.deltamaxBlasters, 1] 
  ],
  {
    team: 'Spd',
    owner: 'spd_red_ranger_jack_landors',
    color: 'red'
  }
);

export default deck;
