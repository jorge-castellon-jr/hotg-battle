import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const jet_rush0: BaseRangerCard = {
  name: 'JET RUSH',
  type: 'attack',
  text: ['After you resolve this attack, place the Dragon Claw token on an enemy card of your choice.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const energy_harvest1: BaseRangerCard = {
  name: 'ENERGY HARVEST',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY] for each hit token on the enemy card with the Dragon Claw token. Another Ranger may immediately play 1 card.'],
  energy: 0,
  shields: 1,
};

const guard_crush2: BaseRangerCard = {
  name: 'GUARD CRUSH',
  type: 'reaction',
  text: ['Play this card when the enemy card with the Dragon Claw token resolves. Deal 1 [HIT] to that card and reduce all damage it deals by 1.'],
  energy: 1,
  shields: 3,
};

const vorpal_claws3: BaseRangerCard = {
  name: 'VORPAL CLAWS',
  type: 'attack',
  text: ['Add 1 die to this attack if the target has the Dragon Claw token.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const dragon_rage4: BaseRangerCard = {
  name: 'DRAGON RAGE',
  type: 'maneuver',
  text: ['Place the Dragon Claw token on an enemy card of your choice. Deal 1 [HIT] to that card. If this effect defeats a card, you may spend 1 [ENERGY] to repeat this effect.'],
  energy: 0,
  shields: 1,
};

const havoc_laser5: BaseRangerCard = {
  name: 'HAVOC LASER',
  type: 'maneuver',
  text: ['Immediately defeat the enemy card with the Dragon Claw token. Then shuffle your hand into your deck.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [jet_rush0, 2],
    [energy_harvest1, 1],
    [guard_crush2, 2],
    [vorpal_claws3, 2],
    [dragon_rage4, 2],
    [havoc_laser5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'trini_kwan_black_dragon',
    color: 'black'
  }
);

export default deck;