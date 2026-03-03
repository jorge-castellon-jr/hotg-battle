import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const wolf_buster0: BaseRangerCard = {
  name: 'WOLF BUSTER',
  type: 'attack',
  text: ['If the previous combat card played in this battle was a maneuver, you may divide the [HIT] from this attack among any number of targets.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const go_with_the_flow1: BaseRangerCard = {
  name: 'GO WITH THE FLOW',
  type: 'reaction',
  text: ['Play this card after another Ranger performs a reaction. This card gains the effect text of that reaction card.'],
  energy: 0,
  shields: 2,
};

const wolf_fang_strike2: BaseRangerCard = {
  name: 'WOLF FANG STRIKE',
  type: 'attack',
  text: ['If the previous combat card played in this battle was a reaction, gain 1 [ENERGY] or add 1 die to this attack.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const swoop_technique3: BaseRangerCard = {
  name: 'SWOOP TECHNIQUE',
  type: 'maneuver',
  text: ['Reveal the top card of your deck. If it is an attack, you may immediately play it and add 1 die to that attack. Otherwise perform an attack with 2 dice.'],
  energy: 0,
  shields: 3,
};

const pai_zhua_strike4: BaseRangerCard = {
  name: 'PAI ZHUA STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may choose a maneuver or reaction from their discard pile and add it to their hand.'],
  energy: 0,
  shields: 1,
  attack: [{ value: 2 }],
};

const spirit_of_the_wolf5: BaseRangerCard = {
  name: 'SPIRIT OF THE WOLF',
  type: 'attack',
  text: ['If the previous combat card played in this battle was a maneuver or reaction, add 2 [HIT] to this attack. Otherwise, reduce the energy cost of this card by 1.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [wolf_buster0, 2],
    [go_with_the_flow1, 2],
    [wolf_fang_strike2, 2],
    [swoop_technique3, 2],
    [pai_zhua_strike4, 1],
    [spirit_of_the_wolf5, 1]
  ],
  {
    team: 'Jungle Fury',
    owner: 'robert_rj_james_unorthodox_master',
    color: 'purple'
  }
);

export default deck;