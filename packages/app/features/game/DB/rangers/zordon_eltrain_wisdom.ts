import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const have_hope0: BaseRangerCard = {
  name: 'HAVE HOPE',
  type: 'reaction',
  text: ['Play this card after any Ranger discards a card for defense. Gain 2 [ENERGY].'],
  energy: 0,
  shields: 1,
};

const power_sword1: BaseRangerCard = {
  name: 'POWER SWORD',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, add 2 dice to that attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const force_of_will2: BaseRangerCard = {
  name: 'FORCE OF WILL',
  type: 'attack',
  text: ['After you resolve this attack, each Ranger in this battle may draw up to 2 cards.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2, fixed: true }],
};

const evil_begone3: BaseRangerCard = {
  name: 'EVIL BEGONE',
  type: 'attack',
  text: ['If this attack defeats the target, you may spend 1 [ENERGY]. If you do, remove 1 foot soldier figure from this location and place it on the experience track.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const may_the_power_protect_you4: BaseRangerCard = {
  name: 'MAY THE POWER PROTECT YOU',
  type: 'maneuver',
  text: ['Return up to 2 cards from any Ranger’s discard pile to the top of their deck, in any order. A different Ranger may immediately play 1 card.'],
  energy: 1,
  shields: 1,
};

const light_of_eltar5: BaseRangerCard = {
  name: 'LIGHT OF ELTAR',
  type: 'reaction',
  text: ['Play this card after you discard a card for defense. Deal 1 [HIT] to each enemy card.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [have_hope0, 2],
    [power_sword1, 2],
    [force_of_will2, 2],
    [evil_begone3, 2],
    [may_the_power_protect_you4, 1],
    [light_of_eltar5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'zordon_eltrain_wisdom',
    color: 'silver'
  }
);

export default deck;