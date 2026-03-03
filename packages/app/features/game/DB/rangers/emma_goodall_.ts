import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Megaforce',
    owner: 'emma_goodall_',
    color: 'pink'
  }
);

export default deck;