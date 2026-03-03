import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mystic Force',
    owner: 'daggeron_',
    color: 'gold'
  }
);

export default deck;