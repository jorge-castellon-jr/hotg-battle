import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'S.P.D.',
    owner: 's_p_d_gold_ranger_',
    color: 'gold'
  }
);

export default deck;