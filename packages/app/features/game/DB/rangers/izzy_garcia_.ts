import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cosmic Fury',
    owner: 'izzy_garcia_',
    color: 'green'
  }
);

export default deck;