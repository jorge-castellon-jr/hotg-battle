import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const invisible_hero0: BaseRangerCard = {
  name: 'INVISIBLE HERO',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage to reduce that damage by 2. If your figure is on your character card, you may play this card in any battle, regardless of location.'],
  energy: 0,
  shields: 1,
};

const wraith_strike1: BaseRangerCard = {
  name: 'WRAITH STRIKE',
  type: 'attack',
  text: ['If your figure is on your character card, you may play this card in any battle, regardless of location.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const specter_barrage2: BaseRangerCard = {
  name: 'SPECTER BARRAGE',
  type: 'attack',
  text: ['If the target of this attack has the GUARD keyword, you may deal any amount of [HIT] from this to an enemy card adjacent to the target instead.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const phantom_laser3: BaseRangerCard = {
  name: 'PHANTOM LASER',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 3,
  attack: [{ value: 2 }],
};

const phantom_cloak4: BaseRangerCard = {
  name: 'PHANTOM CLOAK',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Move your figure from its current location to your character card.'],
  energy: 0,
  shields: 1,
};

const power_ruby_blast5: BaseRangerCard = {
  name: 'POWER RUBY BLAST',
  type: 'maneuver',
  text: ['Deal 2 [HIT] each to a number of enemy cards equal to the amount of [ENERGY] spent to play this card.'],
  energy: 0,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [invisible_hero0, 2],
    [wraith_strike1, 2],
    [specter_barrage2, 2],
    [phantom_laser3, 2],
    [phantom_cloak4, 1],
    [power_ruby_blast5, 1]
  ],
  {
    team: 'Turbo',
    owner: 'phantom_ranger_cloaking_device',
    color: 'black'
  }
);

export default deck;