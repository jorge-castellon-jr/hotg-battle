import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

export default createDeck(
  [],
  {
    enemyType: 'nemesis',
    owner: 'evil_dino_fury_blue_ranger',
  }
) as EnemyCard[]