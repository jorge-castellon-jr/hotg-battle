import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const OmegaRangers = [
  createRanger({
    id: 'omega_yellow_ranger_trini_kwan',
    name: 'Trini Kwan',
    ability: {
      name: 'Omega Earth Power',
      text: 'Once per battle, when any Ranger plays an attack card, they may discard another card with the same name from their hand. If they do, add 2 dice to that attack.',
    },
  }),
  createRanger({
    id: 'omega_red_ranger_jason_lee_scott',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Omega Fire Power',
      text: 'Once per battle, when any Ranger performs an attack, you may remove all [b]○[/b] results from that attack. If you do so, the next time any Ranger performs an attack in this battle, add that many dice to that attack.',
    },
  }),
  createRanger({
    id: 'omega_black_ranger_zack_taylor',
    name: 'Zack Taylor',
    ability: {
      name: 'Omega Air Power',
      text: 'Once per battle, at the start of any Ranger turn, you may remove 1 hit token from an enemy card of your choice. If you do, place 1 hit token each on up to 2 other enemy cards.',
    },
  })
] as Ranger[];

export default OmegaRangers;
