import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Jungle Fury',
    owner: 'camille_',
    color: 'green'
  }
);

export default deck;