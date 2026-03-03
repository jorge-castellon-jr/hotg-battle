import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const crimson_sword: BaseEnemyCard = {
  name: 'CRIMSON SWORD',
  type: 'basic',
  text: 'Each Ranger must search their deck for all cards with exactly 3 [SHIELD], then discard those cards and shuffle their deck.',
  health: 6,
}

const spiteful_slash: BaseEnemyCard = {
  name: 'SPITEFUL SLASH',
  type: 'basic',
  text: 'Deal 2 damage to the Ranger with the most cards in their deck. Increase this damage by 1 for each card in their deck.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const morph_x_raid: BaseEnemyCard = {
  name: 'MORPH-X RAID',
  type: 'basic',
  text: 'Drain 2 [ENERGY]. Deal an amount of damage to each Ranger equal to the number of undefeated food soldier cards in this battle.',
  health: 4,
}

const shockwave_kick: BaseEnemyCard = {
  name: 'SHOCKWAVE KICK',
  type: 'basic',
  text: 'Deal 3 damage each to half of the Rangers in this battle (rounded up).',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [crimson_sword, 1],
    [spiteful_slash, 2],
    [morph_x_raid, 2],
    [shockwave_kick, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'blaze',
  }
) as EnemyCard[]