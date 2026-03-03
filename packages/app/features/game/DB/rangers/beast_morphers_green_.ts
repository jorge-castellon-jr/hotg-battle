import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Beast Morphers',
    owner: 'beast_morphers_green_',
    color: 'green'
  }
);

export default deck;