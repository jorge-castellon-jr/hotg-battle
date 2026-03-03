import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninjetti',
    owner: 'adam_park_',
    color: 'black'
  }
);

export default deck;