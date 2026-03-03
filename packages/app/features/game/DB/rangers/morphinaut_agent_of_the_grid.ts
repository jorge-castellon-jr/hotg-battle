import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const invisible_hero0: BaseRangerCard = {
  name: 'INVISIBLE HERO',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2. If your figure is on your character card, you may play this card in any battle, regardless of location.'],
  energy: 0,
  shields: 1,
};

const phantom_shot1: BaseRangerCard = {
  name: 'PHANTOM SHOT',
  type: 'attack',
  text: ['After you resolve this attack, you may set this card aside. If you do, return it to your hand when your figure leaves a location.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const wraith_strike2: BaseRangerCard = {
  name: 'WRAITH STRIKE',
  type: 'attack',
  text: ['If your figure is on your character card, you may play this card in any battle, regardless of location.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const edge_of_the_grid3: BaseRangerCard = {
  name: 'EDGE OF THE GRID',
  type: 'reaction',
  text: ['Play this card when any Ranger performs a maneuver. Draw up to 3 cards. Choose an equal number of cards from your discard pile and shuffle them back into your deck.'],
  energy: 1,
  shields: 3,
};

const phantom_cloak4: BaseRangerCard = {
  name: 'PHANTOM CLOAK',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Move your figure from its current location to your character card.'],
  energy: 0,
  shields: 1,
};

const power_ruby_blast5: BaseRangerCard = {
  name: 'POWER RUBY BLAST',
  type: 'maneuver',
  text: ['Deal 2 [HIT] each to a number of enemy cards equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [invisible_hero0, 2],
    [phantom_shot1, 2],
    [wraith_strike2, 2],
    [edge_of_the_grid3, 2],
    [phantom_cloak4, 1],
    [power_ruby_blast5, 1]
  ],
  {
    team: 'Turbo',
    owner: 'morphinaut_agent_of_the_grid',
    color: 'black'
  }
);

export default deck;