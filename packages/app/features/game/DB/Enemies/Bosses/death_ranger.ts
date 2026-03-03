import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

export default createDeck(
  [],
  {
    enemyType: 'boss',
    owner: 'death_ranger',
  }
) as EnemyCard[]