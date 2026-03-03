import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Street Fighter',
    owner: 'ryu_',
    color: 'red'
  }
);

export default deck;