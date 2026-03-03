import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Cosmic Fury',
    owner: 'ollie_akana_',
    color: 'blue'
  }
);

export default deck;