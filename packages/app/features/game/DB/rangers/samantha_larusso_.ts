import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cobra Kai',
    owner: 'samantha_larusso_',
    color: 'pink'
  }
);

export default deck;