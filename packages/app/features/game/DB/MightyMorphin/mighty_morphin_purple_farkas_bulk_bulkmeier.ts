import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  bigPigEnergy: {
    name: 'Big Pig Energy',
    type: 'maneuver',
    text: [
      'Gain 1 energy. The next time you perform an attack during this battle, add 2 dice to that attack. After you play this card, place it on top of your deck instead of discarding it.',
    ],
    energy: 0,
    shields: 1, 
  },

  fightDirty: {
    name: 'Fight Dirty',
    type: 'reaction',
    text: [
      'Play this card when another Ranger suffers damage to increase the damage by 1, then roll 2 dice and deal that much ¤ to an enemy card of your choice.',
    ],
    energy: 0,
    shields: 2, 
  },

  fistbumpStrike: {
    name: 'FistBump Strike',
    type: 'attack',
    text: [
      'Offer a fist bump to another Ranger in your location. If they accept, deal 1 ¤ to an enemy card of that Ranger\'s choice.',
    ],
    energy: 1,
    shields: 2, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  hipCheck: {
    name: 'Hip Check',
    type: 'attack',
    text: [
      'After you resolve this attack, suffer 1 damage for each ○ result rolled.',
    ],
    energy: 0,
    shields: 3, 
    attack: [
      {
        value: 3, 
      }, 
    ], 
  },

  cockroachCombo: {
    name: 'Cockroach Combo',
    type: 'attack',
    text: [
      'Another Ranger may discard 1 card from their hand to add 2 dice to this attack. If the card is named Cockroach Combo, add 4 dice instead.',
    ],
    energy: 1,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  powerBomb: {
    name: 'Power Bomb',
    type: 'attack',
    text: [
      'After you resolve this attack, flip this card onto the combat sequence from a height of at least 12 inches. When it lands, deal 3 ¤ to each enemy card it touches.',
    ],
    energy: 2,
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
    [card.bigPigEnergy, 2],
    [card.fightDirty, 2],
    [card.fistbumpStrike, 2],
    [card.hipCheck, 2],
    [card.cockroachCombo, 1],
    [card.powerBomb, 1] 
  ],
  {
    team: 'Mighty Morphin Purple Farkas Bulk',
    owner: 'mighty_morphin_purple_farkas_bulk_bulkmeier',
    color: 'purple'
  }
);

export default deck;
