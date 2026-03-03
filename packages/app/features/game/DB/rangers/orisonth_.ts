import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Squadron',
    owner: 'orisonth_',
    color: 'blue'
  }
);

export default deck;