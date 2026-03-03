import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const dense_defense: BaseEnemyCard = {
  name: 'DENSE DEFENSE',
  type: 'basic',
  text: 'Drain 1 [Energy].',
  health: 4,
}

const overwhelm: BaseEnemyCard = {
  name: 'OVERWHELM',
  type: 'basic',
  text: 'Deal 2 damage. Skip the next Ranger turn in this battle',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

const cleaving_strike: BaseEnemyCard = {
  name: 'CLEAVING STRIKE',
  type: 'basic',
  text: 'Deal 2 damage to 2 different Rangers.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const forward_march: BaseEnemyCard = {
  name: 'FORWARD MARCH',
  type: 'passive',
  text: 'While this card is in play, after each adjacent enemy card resolves, deal 2 damage.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [dense_defense, 2],
    [overwhelm, 2],
    [cleaving_strike, 3],
    [forward_march, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'cyclobots',
  }
) as EnemyCard[]