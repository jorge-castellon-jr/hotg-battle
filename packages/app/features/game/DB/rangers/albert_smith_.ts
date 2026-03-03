import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Charge',
    owner: 'albert_smith_',
    color: 'purple'
  }
);

export default deck;