import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  stuntRider: {
    name: 'Stunt Rider',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by 2. The next time any Ranger performs an attack in this battle, they may divide the ¤ among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
  },

  flareKick: {
    name: 'Flare Kick',
    type: 'attack',
    text: [
      'Gain an amount of energy equal to the number of ¤ results rolled during this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  loadedStrike: {
    name: 'Loaded Strike',
    type: 'attack',
    text: [
      'If there is at least 4 energy in the shared pool, add 1 die to this attack.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  powerSurge: {
    name: 'Power Surge',
    type: 'maneuver',
    text: [
      'Gain an amount of energy equal to twice the amount of energy spent to play this card (max 5).',
    ],
    energy: 0,
    shields: 3, 
  },

  nitroBlaster: {
    name: 'Nitro Blaster',
    type: 'attack',
    text: [
      'You may divide the ¤ from this attack among a number of targets equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  zipCharger: {
    name: 'Zip Charger',
    type: 'maneuver',
    text: [
      'Place this card on your character card. Until the end of this battle, when a Ranger spends energy place 1 energy token on this card. Discard this card at the start of a Ranger turn to deal 2 ¤ to an enemy card, +1 ¤ for every token on this card.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.stuntRider, 2],
    [card.flareKick, 2],
    [card.loadedStrike, 2],
    [card.powerSurge, 2],
    [card.nitroBlaster, 1],
    [card.zipCharger, 1] 
  ],
  {
    team: 'Ranger Operator Series',
    owner: 'ranger_operator_series_yellow_summer_landsdown',
    color: 'yellow'
  }
);

export default deck;
