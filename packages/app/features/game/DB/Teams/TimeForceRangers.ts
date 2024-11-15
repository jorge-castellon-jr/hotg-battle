import { Ranger } from '../../GameTypes';
import { createRanger } from '../rangerUtils';

const TimeForceRangers = [
  createRanger({
    id: 'time_force_pink_jen_scotts',
    name: 'Jen Scotts',
    ability: {
      name: 'Contingency',
      text: 'At the start of each battle, you may choose 2 enemy cards of the same type ([b]Foot Soldier[/b], [b]Monster[/b], [b]Boss[/b]) and swap their positions in the combat sequence.',
    },
  }),
  createRanger({
    id: 'time_force_yellow_katie_walker',
    name: 'Katie Walker',
    ability: {
      name: 'Heavy Force',
      text: 'Once per battle, when any Ranger gains [b]energy[/b], you may reduce the amount gained by up to 2 [b]energy[/b], then deal an equal amount of [b]¤[/b] to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'time_force_green_trip',
    name: 'Trip',
    ability: {
      name: 'Future Vision',
      text: 'Once per battle, you may look at the top card of any enemy deck. You may swap that card with a non-[b]PASSIVE[/b] enemy card from the same deck that has not yet resolved in the combat sequence. Then shuffle that enemy deck.',
    },
  }),
  createRanger({
    id: 'time_force_blue_lucas_kendall',
    name: 'Lucas Kendall',
    ability: {
      name: 'Flexibility',
      text: 'Once per battle, when any Ranger reveals a card for defense, you may choose a card in your hand. Treat the revealed card as having the shield value of the chosen card.',
    },
  }),
  createRanger({
    id: 'time_force_red_wes_collins',
    name: 'Wes Collins',
    ability: {
      name: 'Willful Strength',
      text: 'Once per battle, when any Ranger plays an attack card, you may reveal an attack card with the same energy cost from your hand. Treat the played card as having the attack value of the revealed card (if neither attack value is special).',
    },
  })
] as Ranger[];

export default TimeForceRangers;
