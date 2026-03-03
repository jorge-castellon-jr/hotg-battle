import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

export default createDeck(
  [],
  {
    enemyType: 'monster',
    owner: 'vypra',
  }
) as EnemyCard[]