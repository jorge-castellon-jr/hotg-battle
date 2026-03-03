import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Megaforce',
    owner: 'noah_carver_',
    color: 'blue'
  }
);

export default deck;