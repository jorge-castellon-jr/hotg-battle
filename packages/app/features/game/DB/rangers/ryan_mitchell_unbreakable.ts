import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const sturdy_blow0: BaseRangerCard = {
  name: 'STURDY BLOW',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 1 }],
};

const shockwave_slam1: BaseRangerCard = {
  name: 'SHOCKWAVE SLAM',
  type: 'attack',
  text: ['You may discard the top card of your deck to deal 1 [HIT] to each enemy card adjacent to the target.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const cursebreaker2: BaseRangerCard = {
  name: 'CURSEBREAKER',
  type: 'attack',
  text: ['If the target has the PASSIVE keyword, add 2 dice to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const titanium_power3: BaseRangerCard = {
  name: 'TITANIUM POWER',
  type: 'reaction',
  text: ['Play this card when any Ranger discards a card for defense. Gain an amount of [ENERGY] equal to the number of [SHIELD] on that card.'],
  energy: 1,
  shields: 3,
};

const titanium_laser4: BaseRangerCard = {
  name: 'TITANIUM LASER',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the number of cards in your deck (max 10). Ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const titanium_axe5: BaseRangerCard = {
  name: 'TITANIUM AXE',
  type: 'attack',
  text: ['This attack deals an amount of [HIT] equal to the number of cards in your discard pile (max 10). You may divide this [HIT] among any number of targets.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 2 }],
};

const deck: RangerCard[] = createDeck(
  [
    [sturdy_blow0, 2],
    [shockwave_slam1, 2],
    [cursebreaker2, 2],
    [titanium_power3, 2],
    [titanium_laser4, 1],
    [titanium_axe5, 1]
  ],
  {
    team: 'Lightspeed',
    owner: 'ryan_mitchell_unbreakable',
    color: 'silver'
  }
);

export default deck;