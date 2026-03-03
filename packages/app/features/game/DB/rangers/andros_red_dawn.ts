import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const lets_rocket0: BaseRangerCard = {
  name: 'LET’S ROCKET!',
  type: 'maneuver',
  text: ['Roll 2 dice and gain an amount of [ENERGY] equal to the [HIT] results. Another Ranger of your choice may immediately play 1 card. Place this card on top of your deck instead of discarding it.'],
  energy: 1,
  shields: 1,
};

const pierce_defenses1: BaseRangerCard = {
  name: 'PIERCE DEFENSES',
  type: 'attack',
  text: ['The next time any Ranger performs an attack, they may ignore the GUARD keyword when choosing a target for that attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const mega_drill_breaker2: BaseRangerCard = {
  name: 'MEGA DRILL BREAKER',
  type: 'attack',
  text: ['If this attack does not defeat the target, you may spend 1 [ENERGY] to perform a second attack with 2 dice against the same target.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const telekinesis3: BaseRangerCard = {
  name: 'TELEKINESIS',
  type: 'reaction',
  text: ['Play this card at the start of any battle. Any Ranger may take the top card from their discard pile and add it to their hand.'],
  energy: 0,
  shields: 3,
};

const astro_blaster4: BaseRangerCard = {
  name: 'ASTRO BLASTER',
  type: 'reaction',
  text: ['Play this card to allow any Ranger to ignore the GUARD keyword when choosing a target for an attack. Add 1 [HIT] to that attack for each [ENERGY] spent to play this card (max 3).'],
  energy: 0,
  shields: 1,
};

const spiral_saber5: BaseRangerCard = {
  name: 'SPIRAL SABER',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack. Deal 2 [HIT], divided as you choose among enemy cards adjacent to the target.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [lets_rocket0, 2],
    [pierce_defenses1, 2],
    [mega_drill_breaker2, 2],
    [telekinesis3, 2],
    [astro_blaster4, 1],
    [spiral_saber5, 1]
  ],
  {
    team: 'Solar',
    owner: 'andros_red_dawn',
    color: 'red'
  }
);

export default deck;