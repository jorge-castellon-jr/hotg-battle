import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const full_moon_slash0: BaseRangerCard = {
  name: 'FULL MOON SLASH',
  type: 'attack',
  text: ['Gain 1 [ENERGY] for each [MISS] result rolled during this attack.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const claws_of_the_wolf1: BaseRangerCard = {
  name: 'CLAWS OF THE WOLF',
  type: 'attack',
  text: ['During the next Ranger turn in this battle, instead of playing a card, you may perform an attack with 3 dice.'],
  energy: 2,
  shields: 2,
  attack: [{ value: 3 }],
};

const howling_wolf2: BaseRangerCard = {
  name: 'HOWLING WOLF',
  type: 'reaction',
  text: ['Play this card at the start of any Ranger turn. Gain 1 [ENERGY]. You may draw 1 card. The next time any Ranger performs an attack during this battle, they may reroll any number of dice.'],
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

const laser_pool4: BaseRangerCard = {
  name: 'LASER POOL',
  type: 'maneuver',
  text: ['Until the end of this battle, each time an enemy card is defeated, deal 1 [HIT] to another enemy card that is not adjacent to the defeated card.'],
  energy: 1,
  shields: 1,
};

const lunar_cue5: BaseRangerCard = {
  name: 'LUNAR CUE',
  type: 'attack',
  text: ['After you resolve this attack, you may ready 1 exhausted Zord card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [full_moon_slash0, 2],
    [claws_of_the_wolf1, 2],
    [howling_wolf2, 2],
    [trick_shot3, 2],
    [laser_pool4, 1],
    [lunar_cue5, 1]
  ],
  {
    team: 'Wild Force',
    owner: 'merrick_baliton_lone_wolf',
    color: 'silver'
  }
);

export default deck;