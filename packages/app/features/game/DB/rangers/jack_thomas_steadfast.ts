import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const ram_rush0: BaseRangerCard = {
  name: 'RAM RUSH',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const protect_and_serve_hf1: BaseRangerCard = {
  name: 'PROTECT AND SERVE (HF)',
  type: 'reaction',
  text: ['When another Ranger would discard a card for defense, play this card to gain 1 [ENERGY] and allow that Ranger to place the card on the bottom of their deck instead of discarding it.'],
  energy: 0,
  shields: 2,
};

const crius_cannon2: BaseRangerCard = {
  name: 'CRIUS CANNON',
  type: 'attack',
  text: ['If this attack defeats the target, deal 1 [HIT] to an enemy card adjacent to the target,'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const headbutt3: BaseRangerCard = {
  name: 'HEADBUTT',
  type: 'attack',
  text: ['After you resolve this attack, if the target had the GUARD keyword, return this card to your hand instead of discarding it.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 2 }],
};

const blade_blaster4: BaseRangerCard = {
  name: 'BLADE BLASTER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the amount of [ENERGY] spent to play this card. You may divide this [HIT] among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const crius_hammer5: BaseRangerCard = {
  name: 'CRIUS HAMMER',
  type: 'attack',
  text: ['The next time any Ranger suffers damage during this battle, reduce that damage by 2.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [ram_rush0, 2],
    [protect_and_serve_hf1, 2],
    [crius_cannon2, 2],
    [headbutt3, 2],
    [blade_blaster4, 1],
    [crius_hammer5, 1]
  ],
  {
    team: 'HyperForce',
    owner: 'jack_thomas_steadfast',
    color: 'yellow'
  }
);

export default deck;