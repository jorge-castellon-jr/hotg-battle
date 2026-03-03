import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Street Fighter',
    owner: 'chun_li_',
    color: 'blue'
  }
);

export default deck;