import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  perfectPlanning: {
    name: 'Perfect Planning',
    type: 'maneuver',
    text: [
      'Gain 1 energy. Reveal the top card of your deck. The next time any Ranger performs an attack during this battle, add 1 die to that attack for each shield on the revealed card.',
    ],
    energy: 0,
    shields: 1, 
  },

  risingSlash: {
    name: 'Rising Slash',
    type: 'attack',
    text: [
      'After you resolve this attack, you and another Ranger may each draw 1 card.',
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

  reversalOfFortune: {
    name: 'Reversal Of Fortune',
    type: 'reaction',
    text: [
      'Play this card when any Ranger has 2 or fewer cards left in their deck. They may choose 1 card from their discard pile and place it on the top or bottom of their deck.',
    ],
    energy: 0,
    shields: 2, 
  },

  rapidBlast: {
    name: 'Rapid Blast',
    type: 'attack',
    text: [
      'Discard the top card of your deck. Instead of choosing a target, this attack deals its full ¤ to a number of enemy cards equal to the number of shields on the discarded card.',
    ],
    energy: 2,
    shields: 3, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  dinoSaber: {
    name: 'Dino Saber',
    type: 'attack',
    text: [
      'Any Ranger may draw 1 card. If they do, you may ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
        fixed: true, 
      }, 
    ], 
  },

  dinoMorpherBlast: {
    name: 'Dino Morpher Blast',
    type: 'attack',
    text: [
      'After you resolve this attack, any Ranger with a once-per-battle ability may gain an extra use of that ability for this battle.',
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
    [card.perfectPlanning, 2],
    [card.risingSlash, 2],
    [card.reversalOfFortune, 2],
    [card.rapidBlast, 2],
    [card.dinoSaber, 1],
    [card.dinoMorpherBlast, 1] 
  ],
  {
    team: 'Dino Charge Purple Kendall',
    owner: 'dino_charge_purple_kendall_morgan',
    color: 'unknown'
  }
);

export default deck;
