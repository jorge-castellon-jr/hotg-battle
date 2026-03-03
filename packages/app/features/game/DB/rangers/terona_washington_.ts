import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin',
    owner: 'terona_washington_',
    color: 'yellow'
  }
);

export default deck;