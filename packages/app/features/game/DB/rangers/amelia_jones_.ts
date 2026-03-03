import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cosmic Fury',
    owner: 'amelia_jones_',
    color: 'red'
  }
);

export default deck;