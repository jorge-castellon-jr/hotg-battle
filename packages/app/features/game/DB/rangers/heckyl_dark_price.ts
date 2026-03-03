import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const spin_cutter0: BaseRangerCard = {
  name: 'SPIN CUTTER',
  type: 'attack',
  text: ['After this attack resolves, you may discard the top card of your deck. If you do, return this card to your hand instead of discarding it.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 3 }],
};

const talon_slash1: BaseRangerCard = {
  name: 'TALON SLASH',
  type: 'attack',
  text: ['If you play this card from your discard pile, gain 1 [ENERGY].'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const clandestine_tactics2: BaseRangerCard = {
  name: 'CLANDESTINE TACTICS',
  type: 'reaction',
  text: ['Play this card at the start of a battle. Gain 1 [ENERGY]. You may flip 1 foot soldier card face down, as though defeated. (Do not remove a foot soldier figure from that location.)'],
  energy: 0,
  shields: 2,
};

const dark_encore3: BaseRangerCard = {
  name: 'DARK ENCORE',
  type: 'maneuver',
  text: ['Another Ranger may immediately play the top card of their discard pile. They must place that card on the bottom of their deck instead of discarding it.'],
  energy: 1,
  shields: 3,
};

const dark_energem4: BaseRangerCard = {
  name: 'DARK ENERGEM',
  type: 'maneuver',
  text: ['Discard your entire hand. Until the end of this battle, you may play Dark Ranger cards from your discard pile and you may rearrange the order of your discard pile.'],
  energy: 2,
  shields: 1,
};

const spino_blade5: BaseRangerCard = {
  name: 'SPINO BLADE',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a number of targets for this attack. While this card is in your discard pile, reduce it\'s energy cost by 1.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [spin_cutter0, 2],
    [talon_slash1, 2],
    [clandestine_tactics2, 2],
    [dark_encore3, 2],
    [dark_energem4, 1],
    [spino_blade5, 1]
  ],
  {
    team: 'Dino Charge',
    owner: 'heckyl_dark_price',
    color: 'purple'
  }
);

export default deck;