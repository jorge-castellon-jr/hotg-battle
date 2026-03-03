import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Megaforce',
    owner: 'troy_burrows_',
    color: 'red'
  }
);

export default deck;