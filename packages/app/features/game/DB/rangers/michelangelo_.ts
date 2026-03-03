import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin Turtle Rangers',
    owner: 'michelangelo_',
    color: 'yellow'
  }
);

export default deck;