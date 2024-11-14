import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  specterBarrage: {
    name: 'Specter Barrage',
    type: 'attack',
    text: [
      'If the target of this attack has the GUARD keyword, you may deal any amount of ¤ from this attack to an enemy card adjacent to the target instead.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  phantomLaser: {
    name: 'Phantom Laser',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 1,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
      {
        value: 1, 
        fixed: true, 
      }, 
    ], 
  },

  invisibleHero: {
    name: 'Invisible Hero',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 2. If your figure is on your character card, you may play this card in any battle, regardless of location.',
    ],
    energy: 0,
    shields: 1, 
  },

  wraithStrike: {
    name: 'Wraith Strike',
    type: 'attack',
    text: [
      'If your figure is on your character card, you may play this card in any battle, regardless of location.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  phantomShot: {
    name: 'Phantom Shot',
    type: 'attack',
    text: [
      'After you resolve this attack, you may set this card aside. If you do, return it to your hand when your figure leaves a location.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  edgeOfTheGrid: {
    name: 'Edge Of The Grid',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an maneuver. Draw up to 3 cards. Choose an equal number of cards from your discard pile and shuffle them back into your deck.',
    ],
    energy: 1,
    shields: 3, 
  },

  phantomCloak: {
    name: 'Phantom Cloak',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Move your figure from its current location to your character card.',
    ],
    energy: 0,
    shields: 1, 
  },

  powerRubyBlast: {
    name: 'Power Ruby Blast',
    type: 'maneuver',
    text: [
      'Deal 2 ¤ each to a number of enemy cards equal to the amount of energy spent to play this card.',
    ],
    energy: 0,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.specterBarrage, 2],
    [card.phantomLaser, 2],
    [card.invisibleHero, 2],
    [card.wraithStrike, 2],
    [card.phantomShot, 2],
    [card.edgeOfTheGrid, 2],
    [card.phantomCloak, 1],
    [card.powerRubyBlast, 1] 
  ],
  {
    team: 'Phantom Ranger I',
    owner: 'phantom_ranger_i_morphinaut',
    color: 'unknown'
  }
);

export default deck;
