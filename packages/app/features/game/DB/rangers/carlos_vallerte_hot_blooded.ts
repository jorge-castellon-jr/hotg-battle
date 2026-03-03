import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const moon_fang_piercer0: BaseRangerCard = {
  name: 'MOON FANG PIERCER',
  type: 'attack',
  text: ['Before rolling, remove one die from this attack for each card remaining in your hand.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 5 }],
};

const covering_strike1: BaseRangerCard = {
  name: 'COVERING STRIKE',
  type: 'attack',
  text: ['Before you perform this attack, any Ranger may choose 1 card from their hand and place it on top of their deck.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const rising_moon2: BaseRangerCard = {
  name: 'RISING MOON',
  type: 'maneuver',
  text: ['Draw 1 card, then choose any number of cards from your hand and place them on top of your deck. Any Ranger may immediately play 1 card.'],
  energy: 0,
  shields: 2,
};

const meteor_smash3: BaseRangerCard = {
  name: 'METEOR SMASH',
  type: 'attack',
  text: ['Before rolling, you may discard 1 card from your hand to either gain 1 [ENERGY] or add 1 die to this attack.'],
  energy: 0,
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

const lunar_lance5: BaseRangerCard = {
  name: 'LUNAR LANCE',
  type: 'attack',
  text: ['You may discard 2 cards from your hand instead of playing this card’s energy cost.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [moon_fang_piercer0, 2],
    [covering_strike1, 2],
    [rising_moon2, 2],
    [meteor_smash3, 2],
    [astro_blaster4, 1],
    [lunar_lance5, 1]
  ],
  {
    team: 'Space',
    owner: 'carlos_vallerte_hot_blooded',
    color: 'black'
  }
);

export default deck;