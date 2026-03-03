import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const piercing_screech: BaseEnemyCard = {
  name: 'PIERCING SCREECH',
  type: 'basic',
  text: 'Each Ranger must discard 1 card from their hand.',
  health: 3,
}

const swarm_attack: BaseEnemyCard = {
  name: 'SWARM ATTACK',
  type: 'basic',
  text: 'Deal 1 damage. Increase this damage by 1 for each foot soldier in this location.',
  health: 3,
  attacks: [{ value: 1, fixed: true }],
}

const deadly_talons: BaseEnemyCard = {
  name: 'DEADLY TALONS',
  type: 'basic',
  text: 'Deal 3 damage.',
  health: 2,
  attacks: [{ value: 3, fixed: true }],
}

const fly_away: BaseEnemyCard = {
  name: 'FLY AWAY',
  type: 'basic',
  text: 'Move 1 Tenga Warrior from this location to the next location clockwise that is not panicked. Then, flip this card facedown. (It is not considered defeated.)',
  health: 3,
}

export default createDeck(
  [
    [piercing_screech, 2],
    [swarm_attack, 2],
    [deadly_talons, 3],
    [fly_away, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'tenga_warriors_errata',
  }
) as EnemyCard[]