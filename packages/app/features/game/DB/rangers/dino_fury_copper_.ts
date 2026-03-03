import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Fury',
    owner: 'dino_fury_copper_',
    color: 'shadow'
  }
);

export default deck;