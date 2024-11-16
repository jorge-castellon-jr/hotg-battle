import { createEnemy } from '../enemyDatabaseUtils'
import EvilGreenRanger from './EvilGreenRanger'

export default [
  // Add all Monsters here
  ...EvilGreenRanger,
]

export const monsterEnemies = [
  createEnemy({
    id: 'evil_green_ranger',
    name: 'Evil Green Ranger',
    type: 'monster',
  }),
  //
]
