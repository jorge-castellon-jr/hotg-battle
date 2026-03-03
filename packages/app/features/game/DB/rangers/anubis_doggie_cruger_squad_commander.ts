import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const discipline0: BaseRangerCard = {
  name: 'DISCIPLINE',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack. That Ranger may reroll any number of dice during that attack.'],
  energy: 0,
  shields: 1,
};

const bark_orders1: BaseRangerCard = {
  name: 'BARK ORDERS',
  type: 'maneuver',
  text: ['Another Ranger may immediately play 1 card. After that card resolves, that Ranger may place that card on the top of their deck instead of discarding it.'],
  energy: 0,
  shields: 2,
};

const shadow_slash2: BaseRangerCard = {
  name: 'SHADOW SLASH',
  type: 'attack',
  text: ['Before rolling, you may remove 1 die from this attack to gain 2 [ENERGY].'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const crowd_control3: BaseRangerCard = {
  name: 'CROWD CONTROL',
  type: 'attack',
  text: ['After this attack resolves, if the target was a foot soldier card, you may perform an additional attack with 2 dice, targeting a different foot soldier card.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const judgment4: BaseRangerCard = {
  name: 'JUDGMENT',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Gain +1 [ENERGY] if there is a monster in this location of +2 [ENERGY] if there is a boss in this location. Then place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
};

const shadow_saber5: BaseRangerCard = {
  name: 'SHADOW SABER',
  type: 'attack',
  text: ['Roll a number of dice for this attack equal to the health value of the targeted enemy card. Before rolling, remove 1 die from this attack for each hit token on the targeted enemy card.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [discipline0, 2],
    [bark_orders1, 2],
    [shadow_slash2, 2],
    [crowd_control3, 2],
    [judgment4, 1],
    [shadow_saber5, 1]
  ],
  {
    team: 'S.P.D.',
    owner: 'anubis_doggie_cruger_squad_commander',
    color: 'shadow'
  }
);

export default deck;