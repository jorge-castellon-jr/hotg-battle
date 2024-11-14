import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  ramRush: {
    name: 'Ram Rush',
    type: 'attack',
    text: [
      '★ If this card is discarded for defense, the next time you perform an attack during this battle, add 1 die to that attack.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  protectAndServe: {
    name: 'Protect And Serve',
    type: 'reaction',
    text: [
      'When another Ranger would discard a card for defense, play this card to gain 1 energy and allow that Ranger to place the card on the bottom of their deck instead of discarding it.',
    ],
    energy: 0,
    shields: 2, 
  },

  criusCannon: {
    name: 'Crius Cannon',
    type: 'attack',
    text: [
      'If this attack defeats the target, deal 1 ¤ to an enemy card adjacent to the target.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  headbutt: {
    name: 'Headbutt',
    type: 'attack',
    text: [
      'After you resolve this attack, if the target had the GUARD keyword, return this card to your hand instead of discarding it.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
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

  criusHammer: {
    name: 'Crius Hammer',
    type: 'attack',
    text: [
      'The next time any Ranger suffers damage during this battle, reduce that damage by 2.',
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
    [card.ramRush, 2],
    [card.protectAndServe, 2],
    [card.criusCannon, 2],
    [card.headbutt, 2],
    [card.bladeBlaster, 1],
    [card.criusHammer, 1] 
  ],
  {
    team: 'Hyperforce',
    owner: 'hyperforce_yellow_jack_thomas',
    color: 'yellow'
  }
);

export default deck;
