import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Super Megaforce',
    owner: 'troy_burrows_keys_of_red_rangers',
    color: 'red'
  }
);

export default deck;