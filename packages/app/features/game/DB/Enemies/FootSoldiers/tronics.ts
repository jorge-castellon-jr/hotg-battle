import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const energy_thieves: BaseEnemyCard = {
  name: 'ENERGY THIEVES',
  type: 'passive',
  text: 'While this card is in play, each time an adjacent enemy card resolves, drain 1 [ENERGY]. When this card resolves, drain 1 [ENERGY].',
  health: 2,
}

const scatter_shots: BaseEnemyCard = {
  name: 'SCATTER SHOTS',
  type: 'basic',
  text: 'Deal 2 damage each to half of the Rangers in this battle (rounded up).',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

const laser_raid: BaseEnemyCard = {
  name: 'LASER RAID',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Deal 2 damage to the Ranger with the most cards in their hand.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const cyber_slash: BaseEnemyCard = {
  name: 'CYBER SLASH',
  type: 'basic',
  text: 'Deal 3 damage, unless a Ranger discards 1 card from their hand to prevent it.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [energy_thieves, 2],
    [scatter_shots, 2],
    [laser_raid, 3],
    [cyber_slash, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'tronics',
  }
) as EnemyCard[]