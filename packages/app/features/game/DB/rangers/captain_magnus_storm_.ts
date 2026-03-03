import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Infinity Force',
    owner: 'captain_magnus_storm_',
    color: 'black'
  }
);

export default deck;