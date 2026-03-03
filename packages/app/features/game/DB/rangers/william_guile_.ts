import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Street Fighter',
    owner: 'william_guile_',
    color: 'yellow'
  }
);

export default deck;