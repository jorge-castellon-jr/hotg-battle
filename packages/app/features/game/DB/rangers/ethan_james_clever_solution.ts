import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const shield_bash0: BaseRangerCard = {
  name: 'SHIELD BASH',
  type: 'attack',
  text: ['After you perform this attack, you may discard 1 reaction card from your hand. If you do, return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const improvise1: BaseRangerCard = {
  name: 'IMPROVISE!',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack. Reveal the top card of that Ranger’s deck. If it is an attack card, add 1 die to that Ranger’s attack. Otherwise, gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
};

const low_kick2: BaseRangerCard = {
  name: 'LOW KICK',
  type: 'attack',
  text: ['During this attack all [HIT][HIT] results are treated as BLANK results.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 4 }],
};

const block3: BaseRangerCard = {
  name: 'BLOCK',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3.'],
  energy: 0,
  shields: 3,
};

const thundermax_saber4: BaseRangerCard = {
  name: 'THUNDERMAX SABER',
  type: 'attack',
  text: ['If any other effects add dice to this attack, add +1 die to this attack. You may divide the [HIT] from this attack among any number of targets.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const tricera_shield5: BaseRangerCard = {
  name: 'TRICERA SHIELD',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Reduce that damage by 3. The next time any Ranger performs an attack during this battle, add 3 dice to that attack.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [shield_bash0, 2],
    [improvise1, 2],
    [low_kick2, 2],
    [block3, 2],
    [thundermax_saber4, 1],
    [tricera_shield5, 1]
  ],
  {
    team: 'Dino Thunder',
    owner: 'ethan_james_clever_solution',
    color: 'blue'
  }
);

export default deck;