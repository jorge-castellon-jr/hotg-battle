import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const jade_javelin0: BaseRangerCard = {
  name: 'JADE JAVELIN',
  type: 'attack',
  text: ['You may ignore the GUARD keyword when choosing a target for this attack. Reveal 1 card from your hand and add 1 die to this attack for each chromafury icon on that card.'],
  energy: 1,
  shields: 1,
  attack: [{ value: 2 }],
};

const mold_breaker1: BaseRangerCard = {
  name: 'MOLD BREAKER',
  type: 'maneuver',
  text: ['Gain 1 [ENERGY]. Any Ranger may discard a maneuver or reaction card to perform an attack with 2 dice. If that card has a ★ or chromafury icon, add 2 dice to that attack.'],
  energy: 0,
  shields: 3,
};

const chromafury_saber2: BaseRangerCard = {
  name: 'CHROMAFURY SABER',
  type: 'attack',
  text: ['[CHROMAFURY] [CHROMAFURY]'],
  energy: 0,
  shields: 1,
  attack: [{ value: 3, fixed: true }],
};

const tiger_fury_strike3: BaseRangerCard = {
  name: 'TIGER FURY STRIKE',
  type: 'attack',
  text: ['After you resolve this attack, perform an additional attack with a number of dice equal to the number of chromafury icons in your hand.'],
  energy: 3,
  shields: 3,
  attack: [{ value: 4 }],
};

const deck: RangerCard[] = createDeck(
  [
    [jade_javelin0, 2],
    [mold_breaker1, 2],
    [chromafury_saber2, 1],
    [tiger_fury_strike3, 1]
  ],
  {
    team: 'Dino Fury',
    owner: 'izzy_garcia_eye_of_the_tiger',
    color: 'green'
  }
);

export default deck;