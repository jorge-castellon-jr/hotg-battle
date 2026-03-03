import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'S.P.D.',
    owner: 'bridge_carson_',
    color: 'red'
  }
);

export default deck;