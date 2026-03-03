import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Infinity Force',
    owner: 'peggy_',
    color: 'blue'
  }
);

export default deck;