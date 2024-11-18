import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  veteranInstincts: {
    name: 'Veteran Instincts',
    type: 'maneuver',
    text: [
      'Gain 1 energy. You may draw up to 2 cards, then you may immediately play another card.',
    ],
    energy: 0,
    shields: 1, 
  },

  pteraKick: {
    name: 'Ptera Kick',
    type: 'attack',
    text: [
      'After you resolve this attack, if the target was not defeated, return this card to your hand instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  piercingShot: {
    name: 'Piercing Shot',
    type: 'attack',
    text: [
      'If this attack defeats the target, deal any remaining ¤ from this attack to an enemy card adjacent to the target.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  scornedShot: {
    name: 'Scorned Shot',
    type: 'reaction',
    text: [
      'Play this card after an enemy card resolves to roll 2 dice and deal that much ¤ to that enemy card.',
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

  bowOfDarkness: {
    name: 'Bow Of Darkness',
    type: 'attack',
    text: [
      'Ignore the GUARD keyword when choosing a target for this attack.',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 5, 
        fixed: true, 
      }, 
    ], 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.veteranInstincts, 2],
    [card.pteraKick, 2],
    [card.piercingShot, 2],
    [card.scornedShot, 2],
    [card.bladeBlaster, 1],
    [card.bowOfDarkness, 1] 
  ],
  {
    team: 'Rebel Ranger Slayer Kimberly Ann',
    owner: 'rebel_ranger_slayer_kimberly_ann_hart',
    color: 'unknown'
  }
);

export default deck;
