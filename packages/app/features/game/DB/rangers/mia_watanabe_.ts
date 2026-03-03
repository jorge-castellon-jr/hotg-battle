import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Samurai',
    owner: 'mia_watanabe_',
    color: 'pink'
  }
);

export default deck;