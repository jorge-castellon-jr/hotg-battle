import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const perfect_planning0: BaseRangerCard = {
  name: 'PERFECT PLANNING',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Reveal the top card of your deck. The next time any Ranger performs an attack during this battle, add 1 die to that attack for each [SHIELD] on the revealed card.'],
  energy: 0,
  shields: 1,
};

const reversal_of_fortune1: BaseRangerCard = {
  name: 'REVERSAL OF FORTUNE',
  type: 'reaction',
  text: ['Play this card when any Ranger has 2 or fewer cards left in their deck. They may choose 1 card from their discard pile and place it on the top or bottom of their deck.'],
  energy: 0,
  shields: 2,
};

const rising_slash2: BaseRangerCard = {
  name: 'RISING SLASH',
  type: 'attack',
  text: ['After you resolve this attack, you and another Ranger may each draw 1 card.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 1 }],
};

const rapid_blast3: BaseRangerCard = {
  name: 'RAPID BLAST',
  type: 'attack',
  text: ['Discard the top card of your deck. Instead of choosing a target, this attack deals it\'s full [HIT] to a number of enemy cards equal to the number of [SHIELD] on the discarded card.'],
  energy: 2,
  shields: 3,
  attack: [{ value: 2 }],
};

const dino_saber4: BaseRangerCard = {
  name: 'DINO SABER',
  type: 'attack',
  text: ['Any Ranger may draw 1 card. If they do, you may ignore the GUARD keyword when choosing a target for this attack.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const dino_morpher_blast5: BaseRangerCard = {
  name: 'DINO MORPHER BLAST',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger with a once-per-battle ability may game an extra use of that ability for this battle.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [perfect_planning0, 2],
    [reversal_of_fortune1, 2],
    [rising_slash2, 2],
    [rapid_blast3, 2],
    [dino_saber4, 1],
    [dino_morpher_blast5, 1]
  ],
  {
    team: 'Dino Charge',
    owner: 'kendall_morgan_dig_deeper',
    color: 'purple'
  }
);

export default deck;