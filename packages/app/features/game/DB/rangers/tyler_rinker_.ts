import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Beast Morphers',
    owner: 'tyler_rinker_',
    color: 'orange'
  }
);

export default deck;