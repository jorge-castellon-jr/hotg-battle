import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Charge',
    owner: 'riley_griffin_',
    color: 'green'
  }
);

export default deck;