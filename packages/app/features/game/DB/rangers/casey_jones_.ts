import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dimension X',
    owner: 'casey_jones_',
    color: 'pink'
  }
);

export default deck;