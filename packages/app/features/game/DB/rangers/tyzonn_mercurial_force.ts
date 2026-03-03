import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const mercury_strike0: BaseRangerCard = {
  name: 'MERCURY STRIKE',
  type: 'attack',
  text: ['During this attack, convert all [MISS] results to [HIT][HIT] results and vice versa.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const mercury_guard1: BaseRangerCard = {
  name: 'MERCURY GUARD',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Roll 3 dice. For each die, you may either reduce that damage or gain [ENERGY] equal to the [HIT] results.'],
  energy: 0,
  shields: 2,
};

const chain_combo2: BaseRangerCard = {
  name: 'CHAIN COMBO',
  type: 'attack',
  text: ['After rolling, remove 1 die from this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 3 }],
};

const metal_sniper3: BaseRangerCard = {
  name: 'METAL SNIPER',
  type: 'attack',
  text: ['Add a number of dice to this attack equal to the amount of [ENERGY] spent to play this card. You may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 1 }],
};

const mercury_overdrive4: BaseRangerCard = {
  name: 'MERCURY OVERDRIVE',
  type: 'maneuver',
  text: ['Until the end of this battle, each time a Ranger rolls at least 1 [HIT][HIT] result, gain 1 [ENERGY]. Place this card on top of your deck instead of discarding it.'],
  energy: 0,
  shields: 1,
};

const drive_detector5: BaseRangerCard = {
  name: 'DRIVE DETECTOR',
  type: 'attack',
  text: ['After rolling, you may remove 1 die from this attack. If you do, any Ranger may search their deck for a card, add it to their hand, and then shuffle their deck.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [mercury_strike0, 2],
    [mercury_guard1, 2],
    [chain_combo2, 2],
    [metal_sniper3, 2],
    [mercury_overdrive4, 1],
    [drive_detector5, 1]
  ],
  {
    team: 'Overdrive',
    owner: 'tyzonn_mercurial_force',
    color: 'silver'
  }
);

export default deck;