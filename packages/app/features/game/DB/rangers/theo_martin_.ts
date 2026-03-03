import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Jungle Fury',
    owner: 'theo_martin_',
    color: 'blue'
  }
);

export default deck;