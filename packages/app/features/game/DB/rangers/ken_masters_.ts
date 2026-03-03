import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Street Fighter',
    owner: 'ken_masters_',
    color: 'red'
  }
);

export default deck;