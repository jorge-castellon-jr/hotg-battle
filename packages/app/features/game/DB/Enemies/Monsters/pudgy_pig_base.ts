import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const ravenous_hunger: BaseEnemyCard = {
  name: 'RAVENOUS HUNGER',
  type: 'passive',
  text: 'While this card is in play, rangers cannot play cards with an energy cost greater than zero.',
  health: 5,
}

const butter_knife_cutter: BaseEnemyCard = {
  name: 'BUTTER KNIFE CUTTER',
  type: 'basic',
  text: 'Deal 3 damage to 2 different Rangers.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const salad_fork_stab: BaseEnemyCard = {
  name: 'SALAD FORK STAB',
  type: 'basic',
  text: 'Deal 4 damage to the Ranger with the most cards in their hand.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [ravenous_hunger, 2],
    [butter_knife_cutter, 3],
    [salad_fork_stab, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'pudgy_pig_base',
  }
) as EnemyCard[]