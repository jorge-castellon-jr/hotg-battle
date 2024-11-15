import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const DinoThunderRangers = [
  createRanger({
    id: 'dino_thunder_black_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Legendary Mentor',
      text: 'Once per battle, before a Ranger performs an attack, you may add 1 die to that attack.',
    },
  }),
  createRanger({
    id: 'dino_thunder_white_trent_mercer',
    name: 'Trent Mercer',
    ability: {
      name: 'Fierce Impact',
      text: 'Once per battle, after you resolve an attack, if the attack dealt at least 3 [b]¤[/b], deal 1 [b]¤[/b] to an enemy card adjacent to the target.',
    },
  }),
  createRanger({
    id: 'dino_thunder_red_conner_mcknight',
    name: 'Conner McKnight',
    ability: {
      name: 'Swift Striker',
      text: 'If there is an enemy card in play with the [b]FAST[/b] keyword, you may take the first turn of the battle. If you do, remove 1 die before rolling from the first attack you perform during this battle.',
    },
  }),
  createRanger({
    id: 'dino_thunder_blue_ethan_james',
    name: 'Ethan James',
    ability: {
      name: 'Clever Solution',
      text: 'Once per attack, when you roll a [b]○[/b] result, any Ranger may draw 1 card.',
    },
  }),
  createRanger({
    id: 'dino_thunder_yellow_kira_ford',
    name: 'Kira Ford',
    ability: {
      name: 'Perfect Pitch',
      text: 'Once per attack, when you roll a [b]¤¤[/b] result, gain 1 [b]energy[/b].',
    },
  })
] as Ranger[];

export default DinoThunderRangers;
