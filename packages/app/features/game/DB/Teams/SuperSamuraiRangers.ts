import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const SuperSamuraiRangers = [
  createRanger({
    id: 'super_samurai_red_lauren_shiba',
    name: 'Lauren Shiba',
    ability: {
      name: 'True Focus',
      text: 'At the end of each battle, add 1 [b]energy[/b] to your personal storage (if you do not have 1 already).',
    },
  })
] as Ranger[];

export default SuperSamuraiRangers;
