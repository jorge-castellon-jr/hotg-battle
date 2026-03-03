import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Megaforce',
    owner: 'jake_holling_',
    color: 'black'
  }
);

export default deck;