import { createEnemy } from '../enemyDatabaseUtils'
import PuttyPotrollers from './PuttyPotrollers'

export default [
  // Add all footsoldiers here
  ...PuttyPotrollers
]
  
export const footEnemies = [
  createEnemy({
    id: 'putty_patrollers',
    name: 'Putty Patrollers',
    type: 'foot',
  }),
  //
]
