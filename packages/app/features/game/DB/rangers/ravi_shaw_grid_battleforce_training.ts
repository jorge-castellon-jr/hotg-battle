import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const gorilla_smash0: BaseRangerCard = {
  name: 'GORILLA SMASH',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const heavy_throw1: BaseRangerCard = {
  name: 'HEAVY THROW',
  type: 'attack',
  text: ['Ignore the GUARD keyword when choosing a target for this attack. '],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const battleforce_technique2: BaseRangerCard = {
  name: 'BATTLEFORCE TECHNIQUE',
  type: 'maneuver',
  text: ['Choose 1 card each from 2 different Ranger discard piles. Place those cards on top of their respective decks. '],
  energy: 0,
  shields: 2,
};

const overheat3: BaseRangerCard = {
  name: 'OVERHEAT',
  type: 'reaction',
  text: ['Play this card when you perform an attack. Add 2 dice to that attack. If that attack defeats the target, a Ranger of your choice must suffer 3 damage.'],
  energy: 1,
  shields: 3,
};

const beast_x_blaster4: BaseRangerCard = {
  name: 'BEAST-X BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. Place this card on the bottom of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const beast_x_cannon5: BaseRangerCard = {
  name: 'BEAST-X CANNON',
  type: 'attack',
  text: ['Add a number of dice to this attack equal to the amount of [ENERGY] spent to play this card. If this attack defeats the target, deal 1 [HIT] to each enemy card adjacent to the target.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [gorilla_smash0, 2],
    [heavy_throw1, 2],
    [battleforce_technique2, 2],
    [overheat3, 2],
    [beast_x_blaster4, 1],
    [beast_x_cannon5, 1]
  ],
  {
    team: 'Beast Morphers',
    owner: 'ravi_shaw_grid_battleforce_training',
    color: 'blue'
  }
);

export default deck;