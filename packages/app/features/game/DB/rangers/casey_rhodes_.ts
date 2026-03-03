import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Jungle Fury',
    owner: 'casey_rhodes_',
    color: 'red'
  }
);

export default deck;