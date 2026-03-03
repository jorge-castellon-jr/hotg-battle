import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Samurai',
    owner: 'jayden_shiba_',
    color: 'red'
  }
);

export default deck;