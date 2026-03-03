import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const void_shield: BaseEnemyCard = {
  name: 'VOID SHIELD',
  type: 'basic',
  text: 'Increase this card’s health value by 1 for each Zord or arsenal card in play.',
  health: 3,
}

const void_blade: BaseEnemyCard = {
  name: 'VOID BLADE',
  type: 'basic',
  text: 'Any Ranger may discard a Zord or arsenal card from play. If they do not, deal 5 damage to each Ranger.',
  health: 6,
  attacks: [{ value: 5, fixed: true }],
}

const purple_lightning: BaseEnemyCard = {
  name: 'PURPLE LIGHTNING',
  type: 'basic',
  text: 'Deal 4 damage each to half of the Rangers in this battle (rounded up). This damage cannot be reduced by Zord or arsenal card effects.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const tempest_counter: BaseEnemyCard = {
  name: 'TEMPEST COUNTER',
  type: 'basic',
  text: 'Each time this card or an adjacent enemy card is defeated, deal an amount of damage equal to that card’s health value. Increase this damage by 1 for each Zord or arsenal card in play.',
  health: 5,
}

const energy_pulse: BaseEnemyCard = {
  name: 'ENERGY PULSE',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. If that Ranger has at least 1 Zord or arsenal card in play, increase this damage by 2.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [void_shield, 1],
    [void_blade, 1],
    [purple_lightning, 2],
    [tempest_counter, 2],
    [energy_pulse, 2]
  ],
  {
    enemyType: 'nemesis',
    owner: 'void_knight',
  }
) as EnemyCard[]