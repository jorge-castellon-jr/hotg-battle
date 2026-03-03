import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin',
    owner: 'daniel_o_halloran_',
    color: 'pink'
  }
);

export default deck;