import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Charge',
    owner: 'prince_phillip_iii_',
    color: 'red'
  }
);

export default deck;