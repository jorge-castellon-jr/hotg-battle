import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const desperate_measures0: BaseRangerCard = {
  name: 'DESPERATE MEASURES',
  type: 'attack',
  text: ['If there is no [ENERGY] in the shared energy pool, add 1 [HIT] to this attack.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const stronger_together1: BaseRangerCard = {
  name: 'STRONGER TOGETHER',
  type: 'reaction',
  text: ['Play this card after another Ranger uses an ability that is limited to once per battle. That Ranger may use that ability an extra time during this battle.'],
  energy: 0,
  shields: 2,
};

const solar_strike2: BaseRangerCard = {
  name: 'SOLAR STRIKE',
  type: 'attack',
  text: ['Before you play this card, any Ranger may reveal an attack card with an energy cost of 1 or zero. This card gains the energy cost, attack value, and effect text of that card.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const nova_flare3: BaseRangerCard = {
  name: 'NOVA FLARE',
  type: 'maneuver',
  text: ['Roll 4 dice and deal that much [HIT], divided among any number of enemy cards. Remove all [ENERGY] from the shared energy pool.'],
  energy: 2,
  shields: 3,
};

const solarix4: BaseRangerCard = {
  name: 'SOLARIX',
  type: 'maneuver',
  text: ['Any Ranger may immediately play 1 card without paying it\'s energy cost.'],
  energy: 1,
  shields: 1,
};

const void_chakram5: BaseRangerCard = {
  name: 'VOID CHAKRAM',
  type: 'attack',
  text: ['After you resolve this attack, if there is no [ENERGY] in the shared energy pool, gain 3 [ENERGY].'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [desperate_measures0, 2],
    [stronger_together1, 2],
    [solar_strike2, 2],
    [nova_flare3, 2],
    [solarix4, 1],
    [void_chakram5, 1]
  ],
  {
    team: 'Solar',
    owner: 'ellarien_a_light_in_the_darkness',
    color: 'purple'
  }
);

export default deck;