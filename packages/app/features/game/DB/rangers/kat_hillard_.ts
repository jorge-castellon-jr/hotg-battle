import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin Ninja',
    owner: 'kat_hillard_',
    color: 'pink'
  }
);

export default deck;