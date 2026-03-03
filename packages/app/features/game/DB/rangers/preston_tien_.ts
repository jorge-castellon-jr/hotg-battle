import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Steel',
    owner: 'preston_tien_',
    color: 'blue'
  }
);

export default deck;