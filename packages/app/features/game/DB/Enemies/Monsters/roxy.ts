import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const sinister_sabotage: BaseEnemyCard = {
  name: 'SINISTER SABOTAGE',
  type: 'passive',
  text: 'While this card is in play, each time 1 or more [ENERGY] is drained, 1 Ranger must discard the bottom card of their deck.',
  health: 6,
}

const double_chain_guns: BaseEnemyCard = {
  name: 'DOUBLE CHAIN GUNS',
  type: 'basic',
  text: 'Deal 2 damage to 2 different Rangers twice.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const morph_x_heist: BaseEnemyCard = {
  name: 'MORPH-X HEIST',
  type: 'basic',
  text: 'Drain an amount of [ENERGY] equal to the number of undefeated food soldier cards in this battle. Deal 2 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const heartbreaker: BaseEnemyCard = {
  name: 'HEARTBREAKER',
  type: 'basic',
  text: 'Drain 2 [ENERGY]. Deal 2 damage to a single Ranger twice.',
  health: 5,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [sinister_sabotage, 1],
    [double_chain_guns, 2],
    [morph_x_heist, 2],
    [heartbreaker, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'roxy',
  }
) as EnemyCard[]