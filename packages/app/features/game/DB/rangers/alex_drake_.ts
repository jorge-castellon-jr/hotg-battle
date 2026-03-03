import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Time Force',
    owner: 'alex_drake_',
    color: 'red'
  }
);

export default deck;