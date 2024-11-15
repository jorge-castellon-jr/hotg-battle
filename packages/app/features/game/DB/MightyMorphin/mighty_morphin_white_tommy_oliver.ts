import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  feintingSlash: {
    name: 'Feinting Slash',
    type: 'attack',
    text: [
      'If you roll any ○ results during this attack, return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  flyingTiger: {
    name: 'Flying Tiger',
    type: 'attack',
    text: [
      'After you resolve this attack, you may spend 1 energy to allow another Ranger to immediately play 1 card with an energy cost of zero.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  flashKick: {
    name: 'Flash Kick',
    type: 'reaction',
    text: [
      'Play this card before the first turn of a battle to roll 2 dice and deal that much ¤ to the first enemy card in the combat sequence.',
    ],
    energy: 0,
    shields: 2, 
  },

  guardianArmor: {
    name: 'Guardian Armor',
    type: 'maneuver',
    text: [
      'Gain 2 energy. Place this card on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 3, 
  },

  sabasEyeBeams: {
    name: 'Sabas Eye Beams',
    type: 'maneuver',
    text: [
      'Deal 1 ¤ each to up to 4 enemy cards.',
    ],
    energy: 2,
    shields: 1, 
  },

  sabaSlash: {
    name: 'Saba Slash',
    type: 'attack',
    text: [
      'You may divide this ¤ among any number of targets.',
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
    [card.feintingSlash, 2],
    [card.flyingTiger, 2],
    [card.flashKick, 2],
    [card.guardianArmor, 2],
    [card.sabasEyeBeams, 1],
    [card.sabaSlash, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_white_tommy_oliver',
    color: 'white',
    subColor: 'gold'
  }
);

export default deck;
