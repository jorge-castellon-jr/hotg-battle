import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const helm_of_goldar_undamaged: BaseEnemyCard = {
  name: 'HELM OF GOLDAR (Undamaged)',
  type: 'basic',
  text: 'Two different Rangers must each discard the top card of their deck.',
  health: 6,
}

const armor_of_goldar_undamaged: BaseEnemyCard = {
  name: 'ARMOR OF GOLDAR (Undamaged)',
  type: 'basic',
  text: 'Remove 2 hit tokens from each Mega Goldar card (including this one).',
  health: 8,
}

const right_wing_of_goldar_undamaged: BaseEnemyCard = {
  name: 'RIGHT WING OF GOLDAR (Undamaged)',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const left_wing_of_goldar_undamaged: BaseEnemyCard = {
  name: 'LEFT WING OF GOLDAR (Undamaged)',
  type: 'basic',
  text: 'Drain 2 [ENERGY].',
  health: 4,
}

const sword_of_goldar_undamaged: BaseEnemyCard = {
  name: 'SWORD OF GOLDAR (Undamaged)',
  type: 'basic',
  text: 'Deal 5 damage to the lead Ranger.',
  health: 7,
  attacks: [{ value: 5, fixed: true }],
}

const claw_of_goldar_undamaged: BaseEnemyCard = {
  name: 'CLAW OF GOLDAR (Undamaged)',
  type: 'basic',
  text: 'Deal 2 damage to 2 different Rangers.',
  health: 6,
  attacks: [{ value: 2, fixed: true }],
}

const helm_of_goldar_damaged: BaseEnemyCard = {
  name: 'HELM OF GOLDAR (Damaged)',
  type: 'basic',
  text: 'Two different Rangers must each discard card from their hand.',
  health: 4,
}

const armor_of_goldar_damaged: BaseEnemyCard = {
  name: 'ARMOR OF GOLDAR (Damaged)',
  type: 'basic',
  text: 'Drain 1 [ENERGY].\nDeal 3 damage.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const right_wing_of_goldar_damaged: BaseEnemyCard = {
  name: 'RIGHT WING OF GOLDAR (Damaged)',
  type: 'basic',
  text: 'Each time Mega Goldar deals damage, increase that damage by 1.',
  health: 4,
}

const left_wing_of_goldar_damaged: BaseEnemyCard = {
  name: 'LEFT WING OF GOLDAR (Damaged)',
  type: 'basic',
  text: 'Each time Mega Goldar deals damage, increase that damage by 1.',
  health: 4,
}

const sword_of_goldar_damaged: BaseEnemyCard = {
  name: 'SWORD OF GOLDAR (Damaged)',
  type: 'basic',
  text: 'Deal 2 damage to the Ranger with the fewest cards in their deck.\nDeal 2 damage to the Ranger with the fewest cards in their deck.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const claw_of_goldar_damaged: BaseEnemyCard = {
  name: 'CLAW OF GOLDAR (Damaged)',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [helm_of_goldar_undamaged, 1],
    [armor_of_goldar_undamaged, 1],
    [right_wing_of_goldar_undamaged, 1],
    [left_wing_of_goldar_undamaged, 1],
    [sword_of_goldar_undamaged, 1],
    [claw_of_goldar_undamaged, 1],
    [helm_of_goldar_damaged, 1],
    [armor_of_goldar_damaged, 1],
    [right_wing_of_goldar_damaged, 1],
    [left_wing_of_goldar_damaged, 1],
    [sword_of_goldar_damaged, 1],
    [claw_of_goldar_damaged, 1]
  ],
  {
    enemyType: 'boss',
    owner: 'mega_goldar',
  }
) as EnemyCard[]