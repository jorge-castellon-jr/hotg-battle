import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const forced_frenzy: BaseEnemyCard = {
  name: 'FORCED FRENZY',
  type: 'basic',
  text: 'One Ranger must discard one random card from their hand. If it is an attack, deal 2 damage to another Ranger. Otherwise, drain 1 [ENERGY]',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const cause_havoc: BaseEnemyCard = {
  name: 'CAUSE HAVOC',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Skip the next Ranger turn this battle.',
  health: 2,
}

const total_mayhem: BaseEnemyCard = {
  name: 'TOTAL MAYHEM',
  type: 'basic',
  text: 'Deal 1 damage to each Ranger. Increase this damage by 1 for each panicked location.',
  health: 3,
  attacks: [{ value: 1, fixed: true }],
}

const chaos_burst: BaseEnemyCard = {
  name: 'CHAOS BURST',
  type: 'basic',
  text: 'Deal an amount of damage to a single Ranger equal to the number of cards in their hand. If their hand is empty, they must discard the top card of their deck instead.',
  health: 3,
}

const erratic_movement: BaseEnemyCard = {
  name: 'ERRATIC MOVEMENT',
  type: 'passive',
  text: 'While this card is in play, increase the health value of each adjacent enemy card by 1.',
  health: 2,
}

export default createDeck(
  [
    [forced_frenzy, 1],
    [cause_havoc, 2],
    [total_mayhem, 2],
    [chaos_burst, 2],
    [erratic_movement, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'chaos_putties',
  }
) as EnemyCard[]