import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cosmic Fury',
    owner: 'fern_',
    color: 'orange'
  }
);

export default deck;