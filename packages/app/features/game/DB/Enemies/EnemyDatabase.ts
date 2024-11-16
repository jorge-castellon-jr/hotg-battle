import { Enemy } from '../../GameTypes'
import { bossEnemies } from './Bosses'
import { footEnemies } from './FootSoldiers'
import { monsterEnemies } from './Monsters'

export default [...monsterEnemies, ...footEnemies, ...bossEnemies] as Enemy[]
