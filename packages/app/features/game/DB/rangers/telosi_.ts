import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Squadron',
    owner: 'telosi_',
    color: 'green'
  }
);

export default deck;