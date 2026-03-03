import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const artistic_genius: BaseEnemyCard = {
  name: 'ARTISTIC GENIUS',
  type: 'passive',
  text: 'While this card is in play, all foot soldier cards have +1 health and each time a foot soldier card resolves (even if it is defeated0, deal 2 damage.',
  health: 5,
  attacks: [{ value: 2, fixed: true }],
}

const freshly_made: BaseEnemyCard = {
  name: 'FRESHLY MADE',
  type: 'basic',
  text: 'Deploy 2 Putty Patrollers to this location.',
  health: 4,
}

const crafted_cannon: BaseEnemyCard = {
  name: 'CRAFTED CANNON',
  type: 'basic',
  text: 'Deal 3 damage to 2 different Rangers. Drain 3 [ENERGY].',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const kill_command: BaseEnemyCard = {
  name: 'KILL COMMAND',
  type: 'basic',
  text: 'Deal 3 damage. Increase this damage by 1 for each foot soldier in this location.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [artistic_genius, 1],
    [freshly_made, 2],
    [crafted_cannon, 2],
    [kill_command, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'finister',
  }
) as EnemyCard[]