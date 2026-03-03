import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cenozoic',
    owner: 'zack_taylor_',
    color: 'black'
  }
);

export default deck;