import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  dancersGrace: {
    name: 'Dancers Grace',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Look at the top 2 cards of your deck and put them back in any order. Then you may immediately play another card.',
    ],
    energy: 0,
    shields: 1, 
  },

  discThrow: {
    name: 'Disc Throw',
    type: 'attack',
    text: [
      'After you play this card, if you played it from the top of your deck, return it to the top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  taiChiStrike: {
    name: 'Tai Chi Strike',
    type: 'attack',
    text: [
      'Gain 1 energy for each ○ result you roll during this attack. If you played this card from the top of your deck, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  fireCloud: {
    name: 'Fire Cloud',
    type: 'attack',
    text: [
      'If you played this card from the top of your deck, you may divide this ¤ between any 2 adjacent targets and ignore the GUARD keyword when choosing targets for this attack.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 3, 
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

  powerDisc: {
    name: 'Power Disc',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 3 and deal 3 ¤ to an enemy card of your choice.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.dancersGrace, 2],
    [card.discThrow, 2],
    [card.taiChiStrike, 2],
    [card.fireCloud, 2],
    [card.powerPodSword, 1],
    [card.powerDisc, 1] 
  ],
  {
    team: 'Zeo Ranger I',
    owner: 'zeo_ranger_i_pink_katherine_hillard',
    color: 'pink'
  }
);

export default deck;
