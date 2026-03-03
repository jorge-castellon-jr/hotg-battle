import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Super Megaforce',
    owner: 'jake_holling_keys_of_green_rangers',
    color: 'green'
  }
);

export default deck;