import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Street Fighter',
    owner: 'cammy_white_',
    color: 'green'
  }
);

export default deck;