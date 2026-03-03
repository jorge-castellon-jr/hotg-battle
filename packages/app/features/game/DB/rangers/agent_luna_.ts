import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'RPM',
    owner: 'agent_luna_',
    color: 'red'
  }
);

export default deck;