import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Steel',
    owner: 'dane_romero_',
    color: 'red'
  }
);

export default deck;