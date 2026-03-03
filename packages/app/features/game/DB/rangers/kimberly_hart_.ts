import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cenozoic',
    owner: 'kimberly_hart_',
    color: 'pink'
  }
);

export default deck;