import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const leaping_attack: BaseEnemyCard = {
  name: 'LEAPING ATTACK',
  type: 'basic',
  text: 'Deal 3 damage.',
  health: 2,
  attacks: [{ value: 3, fixed: true }],
}

const rinshi_counter: BaseEnemyCard = {
  name: 'RINSHI COUNTER',
  type: 'passive',
  text: 'While this card is in play, after a Ranger performs a reaction, they must discard the top card of their deck.',
  health: 3,
}

const rinshi_spear: BaseEnemyCard = {
  name: 'RINSHI SPEAR',
  type: 'basic',
  text: 'When this card resolves, deal 3 damage. Once this card has resolves, Rangers cannot perform maneuvers.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const consume_fear: BaseEnemyCard = {
  name: 'CONSUME FEAR',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. If this location is panicked, deal 2 damage to each Ranger.',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [leaping_attack, 2],
    [rinshi_counter, 2],
    [rinshi_spear, 3],
    [consume_fear, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'rinshi',
  }
) as EnemyCard[]