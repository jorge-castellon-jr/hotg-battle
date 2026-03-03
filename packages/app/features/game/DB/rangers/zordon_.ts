import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cenozoic',
    owner: 'zordon_',
    color: 'red'
  }
);

export default deck;