import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const card: Record<string, BaseRangerCard> = { 
  desperateMeasures: {
    name: 'Desperate Measures',
    type: 'attack',
    text: [
      'If there is no energy in the shared energy pool, add 1 ¤ to this attack.',
    ],
    energy: 0,
    shields: 1, 
    attack: [
      {
        value: 2, 
      }, 
    ], 
  },

  solarStrike: {
    name: 'Solar Strike',
    type: 'attack',
    text: [
      'Before you play this card, any Ranger may reveal an attack card with an energy cost of 1 or zero. This card gains the energy cost, attack value, and effect text of that card.',
    ],
    energy: 0,
    shields: 2, 
    attack: [
      {
        value: -1, 
      }, 
    ], 
  },

  strongerTogether: {
    name: 'Stronger Together',
    type: 'reaction',
    text: [
      'Play this card after another Ranger uses an ability that is limited to once per battle. That Ranger may use that ability an extra time during this battle.',
    ],
    energy: 0,
    shields: 2, 
  },

  novaFlare: {
    name: 'Nova Flare',
    type: 'maneuver',
    text: [
      'Roll 4 dice and deal that much ¤, divided among any number of enemy cards. Remove all energy from the shared energy pool.',
    ],
    energy: 2,
    shields: 3, 
  },

  solarix: {
    name: 'Solarix',
    type: 'maneuver',
    text: [
      'Any Ranger may immediately play 1 card without paying its energy cost.',
    ],
    energy: 1,
    shields: 1, 
  },

  voidChakram: {
    name: 'Void Chakram',
    type: 'attack',
    text: [
      'After you resolve this attack, if there is no energy in the shared energy pool, gain 3 energy.',
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
    [card.desperateMeasures, 2],
    [card.solarStrike, 2],
    [card.strongerTogether, 2],
    [card.novaFlare, 2],
    [card.solarix, 1],
    [card.voidChakram, 1] 
  ],
  {
    team: 'Violet Solar Ranger',
    owner: 'violet_solar_ranger_ellarien',
    color: 'unknown'
  }
);

export default deck;
