import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  fullMoonSlash: {
    name: 'Full Moon Slash',
    type: 'attack',
    text: [
      'Gain 1 energy for each ○ result rolled during this attack.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  howlingWolf: {
    name: 'Howling Wolf',
    type: 'reaction',
    text: [
      'Play this card at the start of any Ranger turn. Gain 1 energy. You may draw 1 card. The next time any Ranger performs an attack during this battle, they may reroll any number of dice.',
    ],
    energy: 1,
    shields: 2, 
  },

  clawsOfTheWolf: {
    name: 'Claws Of The Wolf',
    type: 'attack',
    text: [
      'During the next Ranger turn in this battle, instead of playing a card, you may perform an attack with 3 dice.',
    ],
    energy: 2,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  trickShot: {
    name: 'Trick Shot',
    type: 'attack',
    text: [
      'If you roll any ○ results during this attack, deal 1 ¤ to another enemy card that is not adjacent to the target.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  laserPool: {
    name: 'Laser Pool',
    type: 'maneuver',
    text: [
      'Until the end of this battle, each time an enemy card is defeated, deal 1 ¤ to another enemy card that is not adjacent to the defeated card.',
    ],
    energy: 1,
    shields: 1, 
  },

  lunarCue: {
    name: 'Lunar Cue',
    type: 'attack',
    text: [
      'After you resolve this attack, you may ready 1 exhausted Zord card.',
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
    [card.fullMoonSlash, 2],
    [card.howlingWolf, 2],
    [card.clawsOfTheWolf, 2],
    [card.trickShot, 2],
    [card.laserPool, 1],
    [card.lunarCue, 1] 
  ],
  {
    team: 'Lunar Wolf Ranger Merrick',
    owner: 'lunar_wolf_ranger_merrick_baliton',
    color: 'silver'
  }
);

export default deck;
