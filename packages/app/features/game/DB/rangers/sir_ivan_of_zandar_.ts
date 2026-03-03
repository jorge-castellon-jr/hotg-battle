import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Charge',
    owner: 'sir_ivan_of_zandar_',
    color: 'gold'
  }
);

export default deck;