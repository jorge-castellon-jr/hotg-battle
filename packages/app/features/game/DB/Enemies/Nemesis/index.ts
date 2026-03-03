import { createEnemy } from '../enemyDatabaseUtils'
import dayne from './dayne'
import deker from './deker'
import evil_dino_fury_blue_ranger from './evil_dino_fury_blue_ranger'
import nadira from './nadira'
import psycho_black from './psycho_black'
import psycho_blue from './psycho_blue'
import psycho_green from './psycho_green'
import psycho_pink from './psycho_pink'
import psycho_red from './psycho_red'
import psycho_yellow from './psycho_yellow'
import void_knight from './void_knight'
import vrak from './vrak'
import zeltrax from './zeltrax'
import zen_aku from './zen_aku'

export default [
    ...dayne,
    ...deker,
    ...evil_dino_fury_blue_ranger,
    ...nadira,
    ...psycho_black,
    ...psycho_blue,
    ...psycho_green,
    ...psycho_pink,
    ...psycho_red,
    ...psycho_yellow,
    ...void_knight,
    ...vrak,
    ...zeltrax,
    ...zen_aku
]

export const nemesisEnemies = [
    createEnemy({
    id: 'dayne',
    name: 'Dayne',
    type: 'nemesis',
    nemesisEffect: 'Each time an enemy card with the PASSIVE keyword resolves, deal 3 damage to the attached Ranger, then attach this card to any other Ranger in this battle.'
  }),
    createEnemy({
    id: 'deker',
    name: 'Deker',
    type: 'nemesis',
    nemesisEffect: 'After each Deker card resolves (even if it is defeated), the attached Ranger must draw 1 card.'
  }),
    createEnemy({
    id: 'evil_dino_fury_blue_ranger',
    name: 'Evil Dino Fury Blue Ranger',
    type: 'nemesis',
    nemesisEffect: '???'
  }),
    createEnemy({
    id: 'nadira',
    name: 'Nadira',
    type: 'nemesis',
    nemesisEffect: 'Nadira cards do not deal damage to the attached Ranger. Prevent any amount of HIT dealt to Nadira by the attached Ranger unless that Ranger pays 1 [ENERGY].'
  }),
    createEnemy({
    id: 'psycho_black',
    name: 'Psycho Black',
    type: 'nemesis',
    nemesisEffect: '[PSYCHO]: Deal 3 damage to the attached Ranger and 2 damage to another Ranger.'
  }),
    createEnemy({
    id: 'psycho_blue',
    name: 'Psycho Blue',
    type: 'nemesis',
    nemesisEffect: '[PSYCHO]: The attached Ranger must discard from their hand the card with the highest energy cost.'
  }),
    createEnemy({
    id: 'psycho_green',
    name: 'Psycho Green',
    type: 'nemesis',
    nemesisEffect: '[PSYCHO]: The attached Ranger and another Ranger must each discard the top card of their deck.\n'
  }),
    createEnemy({
    id: 'psycho_pink',
    name: 'Psycho Pink',
    type: 'nemesis',
    nemesisEffect: '[PSYCHO]: Drain 1 [ENERGY] and deal 2 damage to the attached Ranger.'
  }),
    createEnemy({
    id: 'psycho_red',
    name: 'Psycho Red',
    type: 'nemesis',
    nemesisEffect: '[PSYCHO]: Deal 4 damage to the attached Ranger.'
  }),
    createEnemy({
    id: 'psycho_yellow',
    name: 'Psycho Yellow',
    type: 'nemesis',
    nemesisEffect: '[PSYCHO]: Deal 4 damage to the attached Ranger.'
  }),
    createEnemy({
    id: 'void_knight',
    name: 'Void Knight',
    type: 'nemesis',
    nemesisEffect: 'At the start of each battle, Void Knight deals an amount of damage equal to the total number of Zord and arsenal cards in play.'
  }),
    createEnemy({
    id: 'vrak',
    name: 'Vrak',
    type: 'nemesis',
    nemesisEffect: 'The Ranger with the most cards in their hand cannot play combat cards un til at least 1 Vrak card is defeated in this battle.'
  }),
    createEnemy({
    id: 'zeltrax',
    name: 'Zeltrax',
    type: 'nemesis',
    nemesisEffect: 'Each time the attached Ranger suffers damage, increase that damage by 1.'
  }),
    createEnemy({
    id: 'zen_aku',
    name: 'Zen-Aku',
    type: 'nemesis',
    nemesisEffect: 'Increase all damage Zen-Aku deals to any Ranger by 1 for each Zen-Aku card that has resolved (even if it is defeated).'
  })
]
