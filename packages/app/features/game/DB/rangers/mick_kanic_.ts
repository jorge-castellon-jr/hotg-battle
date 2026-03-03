import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Steel',
    owner: 'mick_kanic_',
    color: 'red'
  }
);

export default deck;