import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cobra Kai',
    owner: 'johnny_lawrence_',
    color: 'black'
  }
);

export default deck;