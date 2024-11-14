import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  airSlash: {
    name: 'Air Slash',
    type: 'attack',
    text: [
      'You may remove up to 2 dice from this attack before rolling. For each die you remove, deal 1 ¤ to an enemy card that has not suffered any ¤.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  trickyMixup: {
    name: 'Tricky MixUp',
    type: 'reaction',
    text: [
      'Play this card after another Ranger resolves an attack. Gain 1 energy. You may remove 1 hit token from the target and place 1 hit token each on up to 2 other enemy cards.',
    ],
    energy: 0,
    shields: 2, 
  },

  fakeoutStrike: {
    name: 'Fakeout Strike',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each enemy card adjacent to the target that has suffered ¤ or been defeated.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  cantTouchThis: {
    name: 'Cant Touch This',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 1 for each enemy card in this battle that has suffered ¤ or been defeated.',
    ],
    energy: 1,
    shields: 3, 
  },

  omegaForever: {
    name: 'Omega Forever',
    type: 'reaction',
    text: [
      'Play this card at the end of a battle. Roll 2 dice and deal that much ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 1, 
  },

  omegaKamas: {
    name: 'Omega Kamas',
    type: 'attack',
    text: [
      'Deal 3 ¤, divided among any number of enemy cards adjacent to the target.',
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
    [card.airSlash, 2],
    [card.trickyMixup, 2],
    [card.fakeoutStrike, 2],
    [card.cantTouchThis, 2],
    [card.omegaForever, 1],
    [card.omegaKamas, 1] 
  ],
  {
    team: 'Omega',
    owner: 'omega_black_ranger_zack_taylor',
    color: 'black'
  }
);

export default deck;
