import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const JungleFuryRangers = [
  createRanger({
    id: 'jungle_fury_wolf_ranger_robert_rj_james',
    name: 'Robert "RJ" James',
    ability: {
      name: 'Unorthodox Master',
      text: 'Once per battle, after any Ranger performs a maneuver or reaction, gain 1 [b]energy[/b].',
    },
  })
] as Ranger[];

export default JungleFuryRangers;
