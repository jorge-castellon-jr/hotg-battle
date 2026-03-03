import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const strategic_defense0: BaseRangerCard = {
  name: 'STRATEGIC DEFENSE',
  type: 'reaction',
  text: ['Play this card at the start of a battle. Gain 1 [ENERGY]. Each Ranger may look at the top 2 cards of their deck and put them back in any order.'],
  energy: 0,
  shields: 1,
};

const precision_tactics1: BaseRangerCard = {
  name: 'PRECISION TACTICS',
  type: 'maneuver',
  text: ['A Ranger of your choice may immediately play 1 card. If that card is an attack, they may remove any number of dice before rolling to add that much [HIT] to that attack.'],
  energy: 0,
  shields: 2,
};

const buster_rifle2: BaseRangerCard = {
  name: 'BUSTER RIFLE',
  type: 'attack',
  text: ['Reveal the top card of your deck. This attack deals an amount of [HIT] equal to the number of [SHIELD] on that card.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const cosmic_cleave3: BaseRangerCard = {
  name: 'COSMIC CLEAVE',
  type: 'attack',
  text: ['If this attack defeats the target, you may place this card on top of your deck instead of discarding it.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const astro_blaster4: BaseRangerCard = {
  name: 'ASTRO BLASTER',
  type: 'reaction',
  text: ['Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 [HIT] to that attack for each [ENERGY] spent to play this card (max 3).'],
  energy: 0,
  shields: 1,
};

const astro_axe5: BaseRangerCard = {
  name: 'ASTRO AXE',
  type: 'attack',
  text: ['Reveal the top card of your deck and 1 card from your hand. This attack deals an amount of [HIT] equal to the number of [SHIELD] on those cards.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [strategic_defense0, 2],
    [precision_tactics1, 2],
    [buster_rifle2, 2],
    [cosmic_cleave3, 2],
    [astro_blaster4, 1],
    [astro_axe5, 1]
  ],
  {
    team: 'Space',
    owner: 't_j_johnson_level_headed',
    color: 'blue'
  }
);

export default deck;