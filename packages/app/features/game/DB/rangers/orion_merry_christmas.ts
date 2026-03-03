import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Super Megaforce',
    owner: 'orion_merry_christmas',
    color: 'green'
  }
);

export default deck;