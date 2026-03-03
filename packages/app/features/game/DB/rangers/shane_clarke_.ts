import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Storm',
    owner: 'shane_clarke_',
    color: 'red'
  }
);

export default deck;