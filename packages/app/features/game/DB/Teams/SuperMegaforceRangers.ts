import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const SuperMegaforceRangers = [
  createRanger({
    id: 'super_megaforce_silver_orion',
    name: 'Orion',
    ability: {
      name: 'Key Of Sixth Rangers',
      text: 'Construct your key deck with Rangers who are not core team members. Once per Ranger turn in battle, you may discard 1 card from your hand to draw 1 card from your key deck.',
    },
  })
] as Ranger[];

export default SuperMegaforceRangers;
