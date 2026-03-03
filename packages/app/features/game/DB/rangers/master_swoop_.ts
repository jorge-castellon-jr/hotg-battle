import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Jungle Fury',
    owner: 'master_swoop_',
    color: 'black'
  }
);

export default deck;