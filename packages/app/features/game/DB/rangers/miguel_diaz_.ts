import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cobra Kai',
    owner: 'miguel_diaz_',
    color: 'red'
  }
);

export default deck;