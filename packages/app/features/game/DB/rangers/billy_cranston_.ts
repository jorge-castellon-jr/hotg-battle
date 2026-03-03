import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninjetti',
    owner: 'billy_cranston_',
    color: 'blue'
  }
);

export default deck;