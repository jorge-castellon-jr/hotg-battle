import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Samurai',
    owner: 'kevin_',
    color: 'blue'
  }
);

export default deck;