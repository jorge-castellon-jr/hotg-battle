import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const blue_paint_bodyswap: BaseEnemyCard = {
  name: 'BLUE PAINT BODYSWAP',
  type: 'basic',
  text: 'At the start of this battle, 2 Rangers must swap character cards. Return those cards to their original Rangers when this card is defeated or when this battle ends. When this card resolves, deal 4 damage to the swapped Rangers.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

const scythe_heart_lance: BaseEnemyCard = {
  name: 'SCYTHE HEART LANCE',
  type: 'basic',
  text: 'Deal 5 damage each to half of the Rangers in this battle (rounded down).',
  health: 3,
  attacks: [{ value: 5, fixed: true }],
}

const weakening_gray_paint: BaseEnemyCard = {
  name: 'WEAKENING GRAY PAINT',
  type: 'basic',
  text: 'For each Ranger in this battle with more than 3 cards in their hand, drain 1 [ENERGY].',
  health: 4,
}

const cake_bomb: BaseEnemyCard = {
  name: 'CAKE BOMB',
  type: 'basic',
  text: 'Each Ranger must return 1 card from their discard pile to their hand. Deal an amount of damage to each Ranger equal to twice their card’s shield value.',
  health: 4,
}

export default createDeck(
  [
    [blue_paint_bodyswap, 1],
    [scythe_heart_lance, 2],
    [weakening_gray_paint, 2],
    [cake_bomb, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'poisandra',
  }
) as EnemyCard[]