import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  transdaggerPink: {
    name: 'Transdagger Pink',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack. If the target does not have the GUARD keyword, return this card to your hand instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  shatterBlast: {
    name: 'Shatter Blast',
    type: 'attack',
    text: [
      'If this attack does not defeat the target, deal 1 ¤ to each enemy card adjacent to the target.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  betaBow: {
    name: 'Beta Bow',
    type: 'attack',
    text: [
      'You may ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 2,
    shields: 2, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  },

  darkInsight: {
    name: 'Dark Insight',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. They may ignore the GUARD keyword when choosing a target for that attack. If the target has the GUARD keyword, gain 1 energy.',
    ],
    energy: 0,
    shields: 3, 
  },

  lightsOfOrion: {
    name: 'Lights Of Orion',
    type: 'maneuver',
    text: [
      'Draw 1 card. Any Ranger may immediately play 1 card. If they do, reduce its energy cost by 2.',
    ],
    energy: 0,
    shields: 1, 
  },

  quasarSaber: {
    name: 'Quasar Saber',
    type: 'attack',
    text: [
      'Add 1 die to this attack for each enemy figure in this location.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.transdaggerPink, 2],
    [card.shatterBlast, 2],
    [card.betaBow, 2],
    [card.darkInsight, 2],
    [card.lightsOfOrion, 1],
    [card.quasarSaber, 1] 
  ],
  {
    team: '',
    owner: 'pink_galaxy_ranger_ii_karone',
    color: 'pink'
  }
);

export default deck;
