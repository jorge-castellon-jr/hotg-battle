import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Ninja Steel',
    owner: 'hayley_foster_',
    color: 'white'
  }
);

export default deck;