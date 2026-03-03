import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const phalanx_formation: BaseEnemyCard = {
  name: 'PHALANX FORMATION',
  type: 'basic',
  text: 'Drain 1 [ENERGY] when this card resolves. This card’s health value is equal to the number of foot soldiers in this location.',
  health: 4,
}

const cyber_slash_: BaseEnemyCard = {
  name: 'CYBER SLASH ',
  type: 'basic',
  text: 'Deal 3 damage, unless a Ranger discards 1 card from their hand to prevent it.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const priority_target: BaseEnemyCard = {
  name: 'PRIORITY TARGET',
  type: 'basic',
  text: 'Deal 3 damage to the lead Ranger.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const q_blades: BaseEnemyCard = {
  name: 'Q-BLADES',
  type: 'basic',
  text: 'Deal 2 damage.\nDeal 2 damage.',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [phalanx_formation, 2],
    [cyber_slash_, 2],
    [priority_target, 3],
    [q_blades, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'quantrons',
  }
) as EnemyCard[]