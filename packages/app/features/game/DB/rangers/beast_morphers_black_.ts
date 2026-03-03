import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_black_',
    color: 'black'
  }
);

export default deck;