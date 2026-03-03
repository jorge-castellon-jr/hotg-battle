import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const swarm_attack: BaseEnemyCard = {
  name: 'SWARM ATTACK',
  type: 'basic',
  text: 'Deal 1 damage. Increase this damage by 1 for each foot soldier in this location.',
  health: 3,
  attacks: [{ value: 1, fixed: true }],
}

const regrow: BaseEnemyCard = {
  name: 'REGROW',
  type: 'basic',
  text: 'Deploy 1 Super Putty Patroller to this location.',
  health: 2,
}

const putty_pummel: BaseEnemyCard = {
  name: 'PUTTY PUMMEL',
  type: 'basic',
  text: 'Deal 3 damage.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const engulf: BaseEnemyCard = {
  name: 'ENGULF',
  type: 'basic',
  text: 'Drain 1 [ENERGY].',
  health: 2,
}

export default createDeck(
  [
    [swarm_attack, 2],
    [regrow, 2],
    [putty_pummel, 3],
    [engulf, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'super_putty_patrollers',
  }
) as EnemyCard[]