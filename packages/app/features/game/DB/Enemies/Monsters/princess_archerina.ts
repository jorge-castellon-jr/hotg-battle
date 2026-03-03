import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const lovers_barrage: BaseEnemyCard = {
  name: 'LOVER’S BARRAGE',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger. Then, if any Prince Gasket or Princess Archerina cards have been defeated or discarded, deal 3 damage to each Ranger.',
  health: 6,
  attacks: [{ value: 2, fixed: true }],
}

const lovers_shot: BaseEnemyCard = {
  name: 'LOVER’S SHOT',
  type: 'guard',
  text: 'While this card is in play, each time a Ranger deals [HIT] to an enemy card with the FAST or GUARD keyword, they must discard the top card of their deck.',
  health: 4,
}

const enchanting_arrow: BaseEnemyCard = {
  name: 'ENCHANTING ARROW',
  type: 'basic',
  text: 'One Ranger must discard all attack cards from their hand. If they discarded fewer than 2 cards, deal 4 damage to that Ranger.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

const heart_strike: BaseEnemyCard = {
  name: 'HEART STRIKE',
  type: 'basic',
  text: 'Deal 4 damage to the Ranger with the most cards in their hand.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [lovers_barrage, 1],
    [lovers_shot, 2],
    [enchanting_arrow, 2],
    [heart_strike, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'princess_archerina',
  }
) as EnemyCard[]