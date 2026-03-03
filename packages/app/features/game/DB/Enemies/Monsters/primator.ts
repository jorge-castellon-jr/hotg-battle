import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const copy_confusion: BaseEnemyCard = {
  name: 'COPY CONFUSION',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger attacks a Primator card (including this one), deal 2 damage to the lead Ranger.',
  health: 5,
  attacks: [{ value: 2, fixed: true }],
}

const electric_thunder: BaseEnemyCard = {
  name: 'ELECTRIC THUNDER',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const mocking_dance: BaseEnemyCard = {
  name: 'MOCKING DANCE',
  type: 'basic',
  text: 'Two Rangers must each discard 1 card from their hand.',
  health: 3,
}

const mimicry: BaseEnemyCard = {
  name: 'MIMICRY',
  type: 'basic',
  text: 'One Ranger must discard 1 random card from their hand. Deal damage to that Ranger equal to the number of [SHIELD] on that card.',
  health: 4,
}

export default createDeck(
  [
    [copy_confusion, 1],
    [electric_thunder, 2],
    [mocking_dance, 2],
    [mimicry, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'primator',
  }
) as EnemyCard[]