import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  notDoneYet: {
    name: 'Not Done Yet',
    type: 'maneuver',
    text: [
      'Gain 1 hit token. You may immediately play 1 card from your discard pile.',
      '★ If this card is revealed for defense, you may spend any number of hit tokens to add an equal number of shields to this card.',
    ],
    energy: 1,
    shields: 1, 
  },

  crossChop: {
    name: 'Cross Chop',
    type: 'attack',
    text: [
      'After you play this card, you may spend 1 hit token to place it on top of your deck instead of discarding it.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  avengingStrike: {
    name: 'Avenging Strike',
    type: 'attack',
    text: [
      'You may spend any number of hit tokens to add an equal number of dice to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  chargingStrike: {
    name: 'Charging Strike',
    type: 'attack',
    text: [
      'You may either gain 1 hit token or spend any number of hit tokens to gain an equal amount of energy.',
    ],
    energy: 0,
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

  powerHatchets: {
    name: 'Power Hatchets',
    type: 'attack',
    text: [
      'You may spend any number of hit tokens to reroll an equal number of dice during this attack. After you perform this attack, gain 3 hit tokens.',
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
    [card.notDoneYet, 2],
    [card.crossChop, 2],
    [card.avengingStrike, 2],
    [card.chargingStrike, 2],
    [card.powerPodSword, 1],
    [card.powerHatchets, 1] 
  ],
  {
    team: 'Zeo Ranger Iv',
    owner: 'zeo_ranger_iv_green_adam_park',
    color: 'green'
  }
);

export default deck;
