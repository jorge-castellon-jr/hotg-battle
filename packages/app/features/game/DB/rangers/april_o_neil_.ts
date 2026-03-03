import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Mighty Morphin Turtle Rangers',
    owner: 'april_o_neil_',
    color: 'pink'
  }
);

export default deck;