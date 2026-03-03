import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const regeneration: BaseEnemyCard = {
  name: 'REGENERATION',
  type: 'basic',
  text: 'Flip all defeated Bones cards in this battle face up. They are no longer defeated.',
  health: 7,
}

const eye_lasers: BaseEnemyCard = {
  name: 'EYE LASERS',
  type: 'basic',
  text: 'Deal 3 damage to 2 different Rangers.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const grave_digger_slash: BaseEnemyCard = {
  name: 'GRAVE DIGGER SLASH',
  type: 'basic',
  text: 'Drain 1 [ENERGY].\nEach Ranger must discard the bottom card of their deck.',
  health: 5,
}

const skeleton_sword: BaseEnemyCard = {
  name: 'SKELETON SWORD',
  type: 'basic',
  text: 'Deal 4 damage to the lead Ranger.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [regeneration, 1],
    [eye_lasers, 2],
    [grave_digger_slash, 2],
    [skeleton_sword, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'bones',
  }
) as EnemyCard[]