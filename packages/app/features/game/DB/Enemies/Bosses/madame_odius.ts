import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

export default createDeck(
  [],
  {
    enemyType: 'boss',
    owner: 'madame_odius',
  }
) as EnemyCard[]