import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const im_hungry: BaseEnemyCard = {
  name: 'I’M HUNGRY',
  type: 'basic',
  text: 'Drain 2 [ENERGY]. Each Ranger must discard from their hand the card with the highest energy cost. When this card is defeated, each Ranger may return 1 card from their discard pile to their hand.',
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
    [im_hungry, 2],
    [butter_knife_cutter, 3],
    [salad_fork_stab, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'pudgy_pig_vp3',
  }
) as EnemyCard[]