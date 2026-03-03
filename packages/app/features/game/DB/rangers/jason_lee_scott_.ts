import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cenozoic',
    owner: 'jason_lee_scott_',
    color: 'red'
  }
);

export default deck;