import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Super Megaforce',
    owner: 'noah_carver_keys_of_blue_rangers',
    color: 'blue'
  }
);

export default deck;