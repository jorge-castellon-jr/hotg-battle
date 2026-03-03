import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cobra Kai',
    owner: 'daniel_larusso_',
    color: 'white'
  }
);

export default deck;