import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Jungle Fury',
    owner: 'master_finn_',
    color: 'red'
  }
);

export default deck;