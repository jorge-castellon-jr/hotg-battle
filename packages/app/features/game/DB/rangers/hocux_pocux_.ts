import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'Dino Charge',
    owner: 'hocux_pocux_',
    color: 'orange'
  }
);

export default deck;