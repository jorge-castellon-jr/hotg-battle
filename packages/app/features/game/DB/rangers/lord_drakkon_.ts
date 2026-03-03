import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Drakkon',
    owner: 'lord_drakkon_',
    color: 'green'
  }
);

export default deck;