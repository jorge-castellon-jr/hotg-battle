import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const TurboRangers = [
  createRanger({
    id: 'turbo_red_i_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Shift Into Turbo',
      text: 'Once per battle, when any Ranger plays a card with an energy cost of X, they may resolve it as though they spent +1 [b]energy[/b].',
    },
  })
] as Ranger[];

export default TurboRangers;
