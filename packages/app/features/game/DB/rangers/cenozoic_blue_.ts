import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cenozoic',
    owner: 'cenozoic_blue_',
    color: 'blue'
  }
);

export default deck;