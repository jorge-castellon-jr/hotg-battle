import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Overdrive',
    owner: 'mack_hartford_',
    color: 'red'
  }
);

export default deck;