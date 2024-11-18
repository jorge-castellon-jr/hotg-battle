import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  teamTactics: {
    name: 'Team Tactics',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Another Ranger of your choice may immediately play 1 card.',
    ],
    energy: 0,
    shields: 1, 
  },

  tyrannoSlash: {
    name: 'Tyranno Slash',
    type: 'attack',
    text: [
      'You may reroll any number of dice during this attack.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  leadTheCharge: {
    name: 'Lead The Charge',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack during this battle, add 1 die to that attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  block: {
    name: 'Block',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 3.',
    ],
    energy: 0,
    shields: 3, 
  },

  bladeBlaster: {
    name: 'Blade Blaster',
    type: 'attack',
    text: [
      'This attack deals an amount of ¤ equal to the amount of energy spent to play this card. You may divide this ¤ among any number of targets.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  powerSword: {
    name: 'Power Sword',
    type: 'attack',
    text: [
      'The next time any Ranger performs an attack during this battle, add 2 dice to that attack.',
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
    [card.teamTactics, 2],
    [card.tyrannoSlash, 2],
    [card.leadTheCharge, 2],
    [card.block, 2],
    [card.bladeBlaster, 1],
    [card.powerSword, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_red_i_jason_lee_scott',
    color: 'red'
  }
);

export default deck;
