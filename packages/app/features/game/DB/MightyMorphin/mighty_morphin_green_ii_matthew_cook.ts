import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
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

  dragonDagger: {
    name: 'Dragon Dagger',
    type: 'attack',
    text: [
      'Perform this attack twice. (You may choose a new target for the second attack. Any effects applied to the first attack apply both attacks.)',
    ],
    energy: 3,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  daggerSolo: {
    name: 'Dagger Solo',
    type: 'maneuver',
    text: [
      'For the rest of this battle, the energy cost of all combat cards is reduced by 1.',
    ],
    energy: 1,
    shields: 1, 
  },

  soloStrike: {
    name: 'Solo Strike',
    type: 'attack',
    text: [
      'Before rolling, you may remove 1 die from this attack. If you do, return this card to your hand instead of discarding it after this attack resolves.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  dragonRush: {
    name: 'Dragon Rush',
    type: 'attack',
    text: [
      'After you resolve this attack, you may perform a second attack with 2 dice.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 1, 
      }, 
    ], 
  },

  dragonShield: {
    name: 'Dragon Shield',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage to reduce that damage by 3. The next time you perform an attack during this battle, add 1 die to that attack.',
    ],
    energy: 1,
    shields: 3, 
  },

  zordStrike: {
    name: 'Zord Strike',
    type: 'attack',
    text: [
      'You may exhaust 1 Zord card before rolling. If you do, add 3 dice to this attack and you may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  dragonsBlessing: {
    name: 'Dragons Blessing',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by 3. During the next Ranger turn in battle, instead of playing a card, that Ranger may perform 2 attacks with 3 dice each.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.bladeBlaster, 1],
    [card.dragonDagger, 1],
    [card.daggerSolo, 2],
    [card.soloStrike, 2],
    [card.dragonRush, 2],
    [card.dragonShield, 2],
    [card.zordStrike, 1],
    [card.dragonsBlessing, 1] 
  ],
  {
    team: 'Mighty Morphin',
    owner: 'mighty_morphin_green_ii_matthew_cook',
    color: 'green'
  }
);

export default deck;
