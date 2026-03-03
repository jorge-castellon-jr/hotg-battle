import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'S.P.D.',
    owner: 'nova_',
    color: 'silver'
  }
);

export default deck;