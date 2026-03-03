import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const unicorn_blaster: BaseEnemyCard = {
  name: 'UNICORN BLASTER',
  type: 'basic',
  text: 'Deal 9 damage, divide among the Rangers as they choose.',
  health: 6,
  attacks: [{ value: 9, fixed: true }],
}

const toxic_tornado: BaseEnemyCard = {
  name: 'TOXIC TORNADO',
  type: 'basic',
  text: 'The Rangers must discard a total of 4 cards, divided as they choose.',
  health: 5,
}

const prismatic_orbs: BaseEnemyCard = {
  name: 'PRISMATIC ORBS',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger twice.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const ferocious_strength: BaseEnemyCard = {
  name: 'FEROCIOUS STRENGTH',
  type: 'basic',
  text: 'Deal 5 damage.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

export default createDeck(
  [
    [unicorn_blaster, 1],
    [toxic_tornado, 2],
    [prismatic_orbs, 2],
    [ferocious_strength, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'polluticorn',
  }
) as EnemyCard[]