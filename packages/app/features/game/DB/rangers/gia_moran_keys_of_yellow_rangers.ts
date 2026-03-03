import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Super Megaforce',
    owner: 'gia_moran_keys_of_yellow_rangers',
    color: 'yellow'
  }
);

export default deck;