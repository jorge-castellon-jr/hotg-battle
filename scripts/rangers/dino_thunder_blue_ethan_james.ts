import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  shieldBash: {
    name: 'Shield Bash',
    type: 'attack',
    text: [
      'After you perform this attack, you may discard 1 reaction card from your hand. If you do, return this card to your hand instead of discarding it.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  improvise: {
    name: 'Improvise',
    type: 'reaction',
    text: [
      'Play this card when any Ranger performs an attack. Reveal the top card of that Ranger\'s deck. If it is an attack card, add 1 die to that Ranger's attack. Otherwise, gain 1 energy.',
    ],
    energy: 0,
    shields: 2, 
  },

  lowKick: {
    name: 'Low Kick',
    type: 'attack',
    text: [
      'During this attack, all ¤¤ results are treated as ○ results.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: 4, 
      }, 
    ], 
  },

  triceraSkin: {
    name: 'Tricera Skin',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by 3.',
    ],
    energy: 0,
    shields: 3, 
  },

  thundermaxSaber: {
    name: 'Thundermax Saber',
    type: 'attack',
    text: [
      'If any other effects add dice to this attack, add +1 die to this attack. You may divide the ¤ from this attack among any number of targets.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  triceraShield: {
    name: 'Tricera Shield',
    type: 'reaction',
    text: [
      'Play this card when any Ranger suffers damage. Reduce that damage by 3. The next time any Ranger performs an attack during this battle, add 3 dice to that attack.',
    ],
    energy: 3,
    shields: 3, 
  }
}

const deck: RangerCard[] = createDeck(
  [
    [card.shieldBash, 2],
    [card.improvise, 2],
    [card.lowKick, 2],
    [card.triceraSkin, 2],
    [card.thundermaxSaber, 1],
    [card.triceraShield, 1] 
  ],
  {
    team: 'Dino Thunder',
    owner: 'dino_thunder_blue_ethan_james',
    color: 'blue'
  }
);

export default deck;
