import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mystic Force',
    owner: 'xander_bly_',
    color: 'green'
  }
);

export default deck;