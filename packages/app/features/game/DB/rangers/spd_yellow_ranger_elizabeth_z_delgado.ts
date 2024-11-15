import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  multiStrike: {
    name: 'Multi Strike',
    type: 'attack',
    text: [
      'After you resolve this attack, you may perform an additional attack with 1 die.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sideswipe: {
    name: 'Sideswipe',
    type: 'attack',
    text: [
      'Another Ranger may draw 2 cards. If they do, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  sleightOfHand: {
    name: 'Sleight Of Hand',
    type: 'reaction',
    text: [
      'Play this card after any Ranger rolls dice for an attack. Remove 1 die from that attack to gain energy equal to the ¤ of that result.',
    ],
    energy: 0,
    shields: 2, 
  },

  doubleTeam: {
    name: 'Double Team',
    type: 'maneuver',
    text: [
      'Another Ranger may immediately play 1 attack card. After rolling, they may choose 1 die result and add 1 die to the attack with the same result.',
    ],
    energy: 0,
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

  deltamaxRiot: {
    name: 'Deltamax Riot',
    type: 'attack',
    text: [
      'After rolling, choose 1 die result. The next time any Ranger performs an attack during this battle, add 2 dice to that attack with the same result.',
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
    [card.multiStrike, 2],
    [card.sideswipe, 2],
    [card.sleightOfHand, 2],
    [card.doubleTeam, 2],
    [card.deltamaxFire, 1],
    [card.deltamaxRiot, 1] 
  ],
  {
    team: 'Spd',
    owner: 'spd_yellow_ranger_elizabeth_z_delgado',
    color: 'yellow'
  }
);

export default deck;
