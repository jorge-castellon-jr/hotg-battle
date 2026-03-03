import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const psychokinesis: BaseEnemyCard = {
  name: 'PSYCHOKINESIS',
  type: 'passive',
  text: 'While this card is in play, cards cannot leave Ranger discard piles.\nWhen this card resolves, drain 2 [ENERGY] and each Ranger must discard 1 random card from their hand.',
  health: 5,
}

const astral_vortex: BaseEnemyCard = {
  name: 'ASTRAL VORTEX',
  type: 'guard',
  text: 'While this card is in play, each time a Ranger deals any amount of [HIT] to an enemy card without the GUARD keyword, drain 1 [ENERGY] and that Ranger must discard the top card of their deck.',
  health: 6,
}

const wrath_staff: BaseEnemyCard = {
  name: 'WRATH STAFF',
  type: 'basic',
  text: 'One Ranger must discard the top 2 cards of their deck. Then deal 4 damage to that Ranger.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const shatterbolt: BaseEnemyCard = {
  name: 'SHATTERBOLT',
  type: 'basic',
  text: 'Deal an amount of damage to each Ranger equal to the number of Rangers in this battle.',
  health: 5,
}

const dark_matter_wave: BaseEnemyCard = {
  name: 'DARK MATTER WAVE',
  type: 'basic',
  text: 'Each Ranger must reveal a random card from their hand. Deal 3 damage to each Ranger, increased by 1 for each [SHIELD] on their revealed card.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [psychokinesis, 1],
    [astral_vortex, 1],
    [wrath_staff, 2],
    [shatterbolt, 2],
    [dark_matter_wave, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'astronema',
  }
) as EnemyCard[]