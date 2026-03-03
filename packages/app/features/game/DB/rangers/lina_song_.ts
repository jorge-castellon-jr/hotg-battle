import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';
import { createDeck } from '../cardUtils';

const deck: RangerCard[] = createDeck(
  [],
  {
    team: 'S.P.D.',
    owner: 'lina_song_',
    color: 'blue'
  }
);

export default deck;