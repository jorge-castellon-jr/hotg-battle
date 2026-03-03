import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const dagger_solo0: BaseRangerCard = {
  name: 'DAGGER SOLO',
  type: 'maneuver',
  text: ['For the rest of this battle, the energy cost of all combat cards is reduced by 1.'],
  energy: 1,
  shields: 1,
};

const solo_strike1: BaseRangerCard = {
  name: 'SOLO STRIKE',
  type: 'attack',
  text: ['Before rolling, you may remove 1 die from this attack. If you do, return this card to your hand instead of discarding it after the attack resolves.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const dragon_rush2: BaseRangerCard = {
  name: 'DRAGON RUSH',
  type: 'attack',
  text: ['After you resolve this attack, you may perform a second attack with 2 dice.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 1 }],
};

const dragon_shield3: BaseRangerCard = {
  name: 'DRAGON SHIELD',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 3. The next time you perform an attack during this battle, add 1 die to that attack.'],
  energy: 1,
  shields: 3,
};

const zord_strike4: BaseRangerCard = {
  name: 'ZORD STRIKE',
  type: 'attack',
  text: ['You may exhaust 1 Zord card before rolling. If you do, add 3 dice to this attack and you may divide the [HIT] from this attack among any number of targets.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const dragons_blessing5: BaseRangerCard = {
  name: 'DRAGON’S BLESSING',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Reduce that damage by 3. During the next Ranger turn in battle, instead of playing a card, that Ranger may perform 2 attacks with 3 dice each.'],
  energy: 3,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [dagger_solo0, 2],
    [solo_strike1, 2],
    [dragon_rush2, 2],
    [dragon_shield3, 2],
    [zord_strike4, 1],
    [dragons_blessing5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'matthew_cook_noble_pursuit',
    color: 'green'
  }
);

export default deck;