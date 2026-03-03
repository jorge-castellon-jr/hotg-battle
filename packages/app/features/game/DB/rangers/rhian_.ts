import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Squadron',
    owner: 'rhian_',
    color: 'red'
  }
);

export default deck;