import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const go_for_it0: BaseRangerCard = {
  name: 'GO FOR IT!',
  type: 'maneuver',
  text: ['Another Ranger may immediately play 1 attack card. They may ignore the GUARD keyword or reroll any number of dice during that attack. If you have already used your once-per-battle ability during this battle, they may do both.'],
  energy: 0,
  shields: 1,
};

const forward_motion1: BaseRangerCard = {
  name: 'FORWARD MOTION',
  type: 'reaction',
  text: ['Play this card when another Ranger performs an attack. Before they roll, draw 1 card, gain 1 [ENERGY], and add 1 die to that attack.'],
  energy: 0,
  shields: 2,
};

const wild_punch2: BaseRangerCard = {
  name: 'WILD PUNCH',
  type: 'attack',
  text: ['After you resolve this attack, you may place up to 2 cards from your hand on top of your deck. Gain 1 [ENERGY] for each card.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const final_strike3: BaseRangerCard = {
  name: 'FINAL STRIKE',
  type: 'attack',
  text: ['If you have already used your once-per-battle ability during this battle, add 1 die to this attack.'],
  energy: 0,
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

const power_sword5: BaseRangerCard = {
  name: 'POWER SWORD',
  type: 'attack',
  text: ['The next time any Ranger performs an attack during this battle, add 2 dice to that attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 5 }],
};

const deck: RangerCard[] = createDeck(
  [
    [go_for_it0, 2],
    [forward_motion1, 2],
    [wild_punch2, 2],
    [final_strike3, 2],
    [dino_saber4, 1],
    [power_sword5, 1]
  ],
  {
    team: 'Dino Charge',
    owner: 'tyler_navarro_it_s_about_to_get_wild',
    color: 'red'
  }
);

export default deck;