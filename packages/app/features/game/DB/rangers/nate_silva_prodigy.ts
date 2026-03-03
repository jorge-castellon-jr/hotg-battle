import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const quick_thinking0: BaseRangerCard = {
  name: 'QUICK THINKING',
  type: 'reaction',
  text: ['Play this card when any Ranger suffers damage. Gain 1 [ENERGY]. That Ranger may draw up to 2 cards, then choose up to 2 cards from their hand and place them on top of their deck, in any order.'],
  energy: 0,
  shields: 1,
};

const striker_beast_blast1: BaseRangerCard = {
  name: 'STRIKER BEAST BLAST',
  type: 'attack',
  text: ['After you resolve this attack, any Ranger may discard a copy of Striker Beast Blast from their hand to perform an attack with 2 dice.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const striker_saber_gold2: BaseRangerCard = {
  name: 'STRIKER SABER GOLD',
  type: 'attack',
  text: ['Any Ranger may reveal a card from their hand with “Striker Saber” in it\'s name to add 1 die to this attack.'],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const beast_bots_go3: BaseRangerCard = {
  name: 'BEAST BOTS GO!',
  type: 'reaction',
  text: ['Play this card in any battle, regardless of location, after any Ranger uses a “once per battle” ability. That Ranger may draw 1 card, gain 1 [ENERGY], or deal 1 [HIT] to an enemy card of their choice.'],
  energy: 0,
  shields: 3,
};

const beast_x_king_ultra_bow4: BaseRangerCard = {
  name: 'BEAST-X KING ULTRA BOW',
  type: 'attack',
  text: ['Any Ranger may draw a number of cards equal to the amount of [ENERGY] spent to play this card. Add 1 dice to this attack for each card drawn this way.'],
  energy: 0,
  shields: 3,
  attack: [{ value: 1 }],
};

const legendary_arsenal5: BaseRangerCard = {
  name: 'LEGENDARY ARSENAL',
  type: 'maneuver',
  text: ['Choose 1 combat card from the game box with an energy cost of 3 or X. Play it, then remove it from the game after it resolves. If it\'s energy cost is X, treat it as though you spent 3 [ENERGY] to play it.'],
  energy: 4,
  shields: 1,
};

const deck: RangerCard[] = createDeck(
  [
    [quick_thinking0, 2],
    [striker_beast_blast1, 2],
    [striker_saber_gold2, 2],
    [beast_bots_go3, 2],
    [beast_x_king_ultra_bow4, 1],
    [legendary_arsenal5, 1]
  ],
  {
    team: 'Beast Morphers',
    owner: 'nate_silva_prodigy',
    color: 'gold'
  }
);

export default deck;