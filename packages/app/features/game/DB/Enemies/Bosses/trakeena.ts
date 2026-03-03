import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const chitin_armor: BaseEnemyCard = {
  name: 'CHITIN ARMOR',
  type: 'passive',
  text: 'While this card is in play, the first time each Trakeena card is dealt any amount of [HIT], reduce that amount by 1.',
  health: 5,
}

const insect_queen: BaseEnemyCard = {
  name: 'INSECT QUEEN',
  type: 'passive',
  text: 'While this card is in play, after another Trakeena card deals any amount of damage to a single Ranger, deal half that much damage (rounded up) to each other Ranger.',
  health: 6,
}

const bitter_blade: BaseEnemyCard = {
  name: 'BITTER BLADE',
  type: 'basic',
  text: 'Deal 5 damage. If any Trakeena cards are defeated or discarded, deal 8 damage instead.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

const chitinous_slash: BaseEnemyCard = {
  name: 'CHITINOUS SLASH',
  type: 'basic',
  text: 'Deal 3 damage. Repeat this effect once for each Trakeena card that has resolved but is not defeated.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const wasp_cutter: BaseEnemyCard = {
  name: 'WASP CUTTER',
  type: 'basic',
  text: 'Deal 4 damage to a single Ranger twice.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [chitin_armor, 1],
    [insect_queen, 1],
    [bitter_blade, 2],
    [chitinous_slash, 2],
    [wasp_cutter, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'trakeena',
  }
) as EnemyCard[]