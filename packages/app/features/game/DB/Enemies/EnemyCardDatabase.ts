import { EnemyCard } from '../../Card/CardTypes'
import Bosses from './Bosses'
import { normalizeEnemyDatabase } from './enemyDatabaseUtils'
import FootSoldiers from './FootSoldiers'
import Monsters from './Monsters'

const cardDatabase: EnemyCard[] = [...FootSoldiers, ...Monsters, ...Bosses]

export default normalizeEnemyDatabase(cardDatabase)
