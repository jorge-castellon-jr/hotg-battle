import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Squadron',
    owner: 'phiro_',
    color: 'yellow'
  }
);

export default deck;