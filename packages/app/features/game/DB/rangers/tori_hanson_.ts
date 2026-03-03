import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Storm',
    owner: 'tori_hanson_',
    color: 'blue'
  }
);

export default deck;