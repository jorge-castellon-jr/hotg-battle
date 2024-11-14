import { Ranger } from '../../GameTypes'
import { createRanger } from '../rangerUtils'

export default [
  createRanger({
    id: 'mighty_morphin_red_i_jason_lee_scott',
    name: 'Jason Lee Scott',
    ability: {
      name: 'Leadership',
      text: 'Once per battle, a Ranger of your choice may reroll any number of dice during an attack.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_blue_billy_cranston',
    name: 'Billy Cranston',
    ability: {
      name: 'Strategize',
      text: 'Once per battle, a Ranger of your choice may draw 1 card and then place 1 card from their hand back on top of their deck.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_black_i_zack_taylor',
    name: 'Zack Taylor',
    ability: {
      name: 'Hip-Hop Kido',
      text: 'Once per battle, after you defeat an enemy card with an attack, you may deal 1 damage to another enemy card adjacent to your target.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_yellow_i_trini_kwan',
    name: 'Trini Kwan',
    ability: {
      name: 'Double Strike',
      text: 'Once per battle, after you play a card, you may immediately play another card with the same name.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_pink_i_kimberly_ann_hart',
    name: 'Kimberly Ann Hart',
    ability: {
      name: 'Quick Shot',
      text: 'At the start of each battle, you may deal 1 damage to an enemy card of your choice.',
    },
  }),
  createRanger({
    id: 'mighty_morphin_green_i_tommy_oliver',
    name: 'Tommy Oliver',
    ability: {
      name: 'Loner',
      text: 'If you are the only player with a Ranger in your location, you may add 1 die to each of your attacks.',
    },
  }),
  // createRanger({
  //   id: 'mighty_morphin_red_ii_rocky_desantos',
  //   name: 'Rocky Desantos',
  //   ability: {
  //     name: 'Bravery',
  //     text: 'When you reveal a card for defense, if that card would be placed on the bottom of your deck, you may add it to your hand instead.',
  //   },
  // }),
] as Ranger[]
