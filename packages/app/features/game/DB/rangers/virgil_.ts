import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Psycho',
    owner: 'virgil_',
    color: 'red'
  }
);

export default deck;