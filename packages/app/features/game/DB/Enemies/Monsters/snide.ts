import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const split_personality: BaseEnemyCard = {
  name: 'SPLIT PERSONALITY',
  type: 'basic',
  text: 'One Ranger must shuffle their hand into their deck, then discard half of their deck (rounded up). They may then draw up to 3 cards.',
  health: 6,
}

const exploding_sword: BaseEnemyCard = {
  name: 'EXPLODING SWORD',
  type: 'basic',
  text: 'Deal 5 damage to the Ranger with the most cards in their discard pile. Deal 2 damage to each other Ranger.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

const slash_tether: BaseEnemyCard = {
  name: 'SLASH TETHER',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. One Ranger must discard 2 cards from their hand.',
  health: 3,
}

const dark_side_rush: BaseEnemyCard = {
  name: 'DARK SIDE RUSH',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. If a Ranger has more than 3 cards in their discard pile, deal them 5 damage instead.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [split_personality, 1],
    [exploding_sword, 2],
    [slash_tether, 2],
    [dark_side_rush, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'snide',
  }
) as EnemyCard[]