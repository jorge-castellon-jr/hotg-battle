import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const harmonize0: BaseRangerCard = {
  name: 'HARMONIZE',
  type: 'maneuver',
  text: ['Another Ranger may immediately play 1 card. After that card resolves, choose 1 card from your discard pile with the same shield value as the played card and add it to your hand.'],
  energy: 0,
  shields: 1,
};

const flying_kick1: BaseRangerCard = {
  name: 'FLYING KICK',
  type: 'attack',
  text: ['Gain 1 energy.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const rapid_spin2: BaseRangerCard = {
  name: 'RAPID SPIN',
  type: 'attack',
  text: ['If you role any BLANK results during this attack, you may immediately perform a second attack with a number of dice equal to the BLANK results.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const ptera_scream3: BaseRangerCard = {
  name: 'PTERA SCREAM',
  type: 'reaction',
  text: ['Play this card when any Ranger performs an attack. Before that attack resolves, reduce the health value of the target by 2 until the end of this turn.'],
  energy: 1,
  shields: 3,
};

const thundermax_saber4: BaseRangerCard = {
  name: 'THUNDERMAX SABER',
  type: 'attack',
  text: ['If any other effects add dice to this attack, add +1 die to this attack. You may divide the [HIT] from this attack among any number of targets.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const ptera_grips5: BaseRangerCard = {
  name: 'PTERA GRIPS',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may immediately play 1 card, if it is an attack card, add 1 die to that attack.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 3 }],
};

const deck: RangerCard[] = createDeck(
  [
    [harmonize0, 2],
    [flying_kick1, 2],
    [rapid_spin2, 2],
    [ptera_scream3, 2],
    [thundermax_saber4, 1],
    [ptera_grips5, 1]
  ],
  {
    team: 'Dino Thunder',
    owner: 'kira_ford_perfect_pitch',
    color: 'yellow'
  }
);

export default deck;