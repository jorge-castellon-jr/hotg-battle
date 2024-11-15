import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const LunarRangers = [
  createRanger({
    id: 'lunar_wolf_ranger_merrick_baliton',
    name: 'Merrick Baliton',
    ability: {
      name: 'Lone Wolf',
      text: 'During each battle, until another Ranger\'s card is played, reduce the energy cost of all Lunar Wolf Ranger cards by 1.',
    },
  })
] as Ranger[];

export default LunarRangers;
