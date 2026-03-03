import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const take_aim0: BaseRangerCard = {
  name: 'TAKE AIM',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. You may immediately play another card. If that card is an attack, you may reroll any number of dice during that attack.'],
  energy: 0,
  shields: 1,
};

const precise_shot1: BaseRangerCard = {
  name: 'PRECISE SHOT',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const rapid_fire2: BaseRangerCard = {
  name: 'RAPID FIRE',
  type: 'reaction',
  text: ['Play this card when any Ranger rolls any [MISS] results during an attack. Add 2 dice to that attack.'],
  energy: 1,
  shields: 2,
};

const trick_shot3: BaseRangerCard = {
  name: 'TRICK SHOT',
  type: 'attack',
  text: ['If you roll any [MISS] results during this attack, deal 1 [HIT] to another enemy card that is not adjacent to the target.'],
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

const star_slinger5: BaseRangerCard = {
  name: 'STAR  SLINGER',
  type: 'attack',
  text: ['After rolling, choose 2 dice from this attack and deal that much [HIT] each to up to 2 other enemy cards that are not adjacent to the target.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [take_aim0, 2],
    [precise_shot1, 2],
    [rapid_fire2, 2],
    [trick_shot3, 2],
    [astro_blaster4, 1],
    [star_slinger5, 1]
  ],
  {
    team: 'Space',
    owner: 'ashley_hammond_optimism',
    color: 'yellow'
  }
);

export default deck;