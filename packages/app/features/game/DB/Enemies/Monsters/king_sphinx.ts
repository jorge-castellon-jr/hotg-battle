import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const cobra_beam: BaseEnemyCard = {
  name: 'COBRA BEAM',
  type: 'basic',
  text: 'Deal 4 damage each to half of the Rangers in this battle (rounded up).',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

const sphinx_slam: BaseEnemyCard = {
  name: 'SPHINX SLAM',
  type: 'basic',
  text: 'Deal 5 damage. The Ranger who suffers this damage must discard 1 card from their hand.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const gale_force_wing: BaseEnemyCard = {
  name: 'GALE FORCE WING',
  type: 'basic',
  text: 'Remove 1 Ranger from this battle and move their figure to the next location clockwise. That Ranger must discard their entire hand.',
  health: 3,
}

const scepter_barrage: BaseEnemyCard = {
  name: 'SCEPTER BARRAGE',
  type: 'basic',
  text: 'Deal 2 damage to a single Ranger four times.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [cobra_beam, 1],
    [sphinx_slam, 2],
    [gale_force_wing, 2],
    [scepter_barrage, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'king_sphinx',
  }
) as EnemyCard[]