import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin Turtle Rangers',
    owner: 'leonardo_',
    color: 'blue'
  }
);

export default deck;