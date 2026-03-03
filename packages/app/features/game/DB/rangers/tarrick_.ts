import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Fury',
    owner: 'tarrick_',
    color: 'purple'
  }
);

export default deck;