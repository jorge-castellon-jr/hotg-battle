import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const the_naughty_list0: BaseRangerCard = {
  name: 'THE NAUGHTY LIST',
  type: 'attack',
  text: [''],
  energy: 0,
  shields: 1,
  attack: [{ value: 2, fixed: true }],
};

const bell_ringer1: BaseRangerCard = {
  name: 'BELL RINGER',
  type: 'attack',
  text: ['Look at the top card of your deck. You may give it to another Ranger as a gift.'],
  energy: 0,
  shields: 2,
  attack: [{ value: 2 }],
};

const better_watch_out2: BaseRangerCard = {
  name: 'BETTER WATCH OUT',
  type: 'attack',
  text: [''],
  energy: 1,
  shields: 2,
  attack: [{ value: 3 }],
};

const christmas_rush3: BaseRangerCard = {
  name: 'CHRISTMAS RUSH',
  type: 'maneuver',
  text: ['Give 1 card from your hand to another Ranger as a gift. That Ranger may immediately play 1 card. Place this card on the bottom of your deck instead of discarding it.'],
  energy: 1,
  shields: 3,
};

const milk__cookies4: BaseRangerCard = {
  name: 'MILK & COOKIES',
  type: 'maneuver',
  text: ['Choose cards from your discard pile with a total of up to 5 [SHIELD] and shuffle them back into your deck.'],
  energy: 0,
  shields: 1,
};

const the_nice_list5: BaseRangerCard = {
  name: 'THE NICE LIST',
  type: 'maneuver',
  text: ['Choose a number of cards from your discard pile equal to the amount of [ENERGY] spent to play this card. SHuffle those cards and give them to other Rangers as gifts.'],
  energy: 0,
  shields: 3,
};

const deck: RangerCard[] = createDeck(
  [
    [the_naughty_list0, 2],
    [bell_ringer1, 2],
    [better_watch_out2, 2],
    [christmas_rush3, 2],
    [milk__cookies4, 1],
    [the_nice_list5, 1]
  ],
  {
    team: 'Mighty Morphin',
    owner: 'santa_claus_bag_of_gifts',
    color: 'red'
  }
);

export default deck;