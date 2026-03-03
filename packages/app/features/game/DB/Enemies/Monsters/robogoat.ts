import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const cloven_combo: BaseEnemyCard = {
  name: 'CLOVEN COMBO',
  type: 'basic',
  text: 'Deal 1 damage.\nDeal 2 damage.\nDeal 3 damage.',
  health: 5,
  attacks: [{ value: 1, fixed: true }],
}

const staff_slam: BaseEnemyCard = {
  name: 'STAFF SLAM',
  type: 'basic',
  text: 'Deal 5 damage to the lead Ranger.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

const charging_headbutt: BaseEnemyCard = {
  name: 'CHARGING HEADBUTT',
  type: 'basic',
  text: 'Deal 4 damage, unless a Ranger spends 2 [ENERGY] to prevent it.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [cloven_combo, 2],
    [staff_slam, 3],
    [charging_headbutt, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'robogoat',
  }
) as EnemyCard[]