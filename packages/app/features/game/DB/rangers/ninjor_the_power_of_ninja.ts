import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const showboating0: BaseRangerCard = {
  name: 'SHOWBOATING',
  type: 'reaction',
  text: ['Play this card when an enemy card without the PASSIVE keyword resolves. Prevent all effects of that enemy card. Gain 1 [ENERGY]. Skip the next Ranger turn in this battle.'],
  energy: 0,
  shields: 1,
};

const ninjato_blade1: BaseRangerCard = {
  name: 'NINJATO BLADE',
  type: 'attack',
  text: ['After this attack resolves, you may place this card on the bottom of your deck instead of discarding it.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const flying_kick2: BaseRangerCard = {
  name: 'FLYING KICK',
  type: 'attack',
  text: ['Gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const encouraging_word3: BaseRangerCard = {
  name: 'ENCOURAGING WORD',
  type: 'reaction',
  text: ['Play this card when another Ranger rolls any [MISS] results during an attack. That Ranger may choose 1 card from their discard pile and place it on the bottom of their deck.'],
  energy: 0,
  shields: 3,
};

const unlock_potential4: BaseRangerCard = {
  name: 'UNLOCK POTENTIAL',
  type: 'reaction',
  text: ['Play this card after any Ranger exhausts a Zord card to ready that Zord card. You may play this card in any battle, regardless of location.'],
  energy: 1,
  shields: 1,
};

const nimbus_strike5: BaseRangerCard = {
  name: 'NIMBUS STRIKE',
  type: 'attack',
  text: ['Instead of choosing a target, choose a keyword (such as FAST, GUARD, or PASSIVE). This attack deals its full [HIT] to up to 3 enemy cards with that keyword.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [showboating0, 2],
    [ninjato_blade1, 2],
    [flying_kick2, 2],
    [encouraging_word3, 2],
    [unlock_potential4, 1],
    [nimbus_strike5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'ninjor_the_power_of_ninja',
    color: 'blue'
  }
);

export default deck;