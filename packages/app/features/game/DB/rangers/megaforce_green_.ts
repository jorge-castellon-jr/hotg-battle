import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Megaforce',
    owner: 'megaforce_green_',
    color: 'green'
  }
);

export default deck;