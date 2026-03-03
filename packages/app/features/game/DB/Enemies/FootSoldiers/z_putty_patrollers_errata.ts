import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const self_destruct: BaseEnemyCard = {
  name: 'SELF-DESTRUCT',
  type: 'passive',
  text: 'While this card is in play, each time a Z Putty Patroller card (including this one) is defeated, deal 2 damage.',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

const overwhelm: BaseEnemyCard = {
  name: 'OVERWHELM',
  type: 'basic',
  text: 'Deal 2 damage. Skip the next Ranger turn in this battle.',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

const z_shield: BaseEnemyCard = {
  name: 'Z-SHIELD',
  type: 'basic',
  text: 'Drain 2 [ENERGY].',
  health: 3,
}

const fierce_strike: BaseEnemyCard = {
  name: 'FIERCE STRIKE',
  type: 'basic',
  text: 'Deal 4 damage',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [self_destruct, 2],
    [overwhelm, 2],
    [z_shield, 3],
    [fierce_strike, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'z_putty_patrollers_errata',
  }
) as EnemyCard[]