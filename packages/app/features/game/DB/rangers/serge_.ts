import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'All-New Power Rangers',
    owner: 'serge_',
    color: 'blue'
  }
);

export default deck;