import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'RPM',
    owner: 'gem_',
    color: 'gold'
  }
);

export default deck;