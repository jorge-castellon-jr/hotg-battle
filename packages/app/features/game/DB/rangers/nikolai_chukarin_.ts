import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin',
    owner: 'nikolai_chukarin_',
    color: 'blue'
  }
);

export default deck;