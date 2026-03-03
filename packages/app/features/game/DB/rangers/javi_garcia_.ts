import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cosmic Fury',
    owner: 'javi_garcia_',
    color: 'black'
  }
);

export default deck;