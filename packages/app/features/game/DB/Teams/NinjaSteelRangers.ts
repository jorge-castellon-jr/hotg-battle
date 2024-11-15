import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const NinjaSteelRangers = [
  createRanger({
    id: 'ninja_steel_gold_levi_weston',
    name: 'Levi Weston',
    ability: {
      name: 'Rhythm Star',
      text: 'Once per battle, after any Ranger resolves an attack or maneuver card, another Ranger may immediately play 1 card with an energy cost exactly 1 [b]energy[/b] higher.',
    },
  })
] as Ranger[];

export default NinjaSteelRangers;
