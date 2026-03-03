import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Drakkon',
    owner: 'farkas_bulk_bulkmeier_',
    color: 'red'
  }
);

export default deck;