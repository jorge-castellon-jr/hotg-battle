import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Omega',
    owner: 'drakkon_',
    color: 'green'
  }
);

export default deck;