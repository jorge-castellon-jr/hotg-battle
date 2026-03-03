import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const shell_shock: BaseEnemyCard = {
  name: 'SHELL SHOCK',
  type: 'basic',
  text: 'Deal 4 damage, divided among the Rangers as they choose.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

const overload_burst: BaseEnemyCard = {
  name: 'OVERLOAD BURST',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger, then place 1 hit token on this card.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const cannon_fodder: BaseEnemyCard = {
  name: 'CANNON FODDER',
  type: 'basic',
  text: 'Deal 2 damage.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const underworld_shots: BaseEnemyCard = {
  name: 'UNDERWORLD SHOTS',
  type: 'basic',
  text: 'Half of the Rangers in this battle (rounded up) must each discard the bottom card of their deck.',
  health: 2,
}

export default createDeck(
  [
    [shell_shock, 2],
    [overload_burst, 2],
    [cannon_fodder, 3],
    [underworld_shots, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'krybots',
  }
) as EnemyCard[]