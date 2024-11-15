import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  letsParty: {
    name: 'Lets Party',
    type: 'maneuver',
    text: [
      'Choose up to 2 enemy cards and attach 1 energy token to each of them. After you play this card, a Ranger of your choice may immediately play 1 card.',
    ],
    energy: 0,
    shields: 1, 
  },

  powerSpin: {
    name: 'Power Spin',
    type: 'attack',
    text: [
      'After you resolve this attack, deal 1 ¤ to each enemy card, other than the target, with at least 1 energy token attached to it.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  tripleThreat: {
    name: 'Triple Threat',
    type: 'attack',
    text: [
      'Before rolling, attach 1 energy token to the target of this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  recklessAssault: {
    name: 'Reckless Assault',
    type: 'attack',
    text: [
      'If this attack defeats the target, you may immediately play another card.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  powerPodSword: {
    name: 'Power Pod Sword',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack to add 1 die to that attack. That Ranger may divide that ¤ among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
  },

  powerAxes: {
    name: 'Power Axes',
    type: 'attack',
    text: [
      'Instead of choosing a target, this attack deals its full ¤ to each enemy card with at least 1 energy token attached to it.',
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
    [card.letsParty, 2],
    [card.powerSpin, 2],
    [card.tripleThreat, 2],
    [card.recklessAssault, 2],
    [card.powerPodSword, 1],
    [card.powerAxes, 1] 
  ],
  {
    team: 'Zeo Ranger Iii',
    owner: 'zeo_ranger_iii_blue_rocky_desantos',
    color: 'blue'
  }
);

export default deck;
