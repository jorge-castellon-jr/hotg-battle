import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Steel',
    owner: 'sarah_thompson_',
    color: 'pink'
  }
);

export default deck;