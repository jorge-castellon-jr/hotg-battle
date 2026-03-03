import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const teleport: BaseEnemyCard = {
  name: 'TELEPORT',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot deal [HIT] to any other Madame Woe cards.',
  health: 5,
}

const braid_lash: BaseEnemyCard = {
  name: 'BRAID LASH',
  type: 'basic',
  text: 'Deal 3 damage. Drain 1 [ENERGY].',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const breath_of_death: BaseEnemyCard = {
  name: 'BREATH OF DEATH',
  type: 'basic',
  text: 'Each Ranger must discard 1 random card from their hand.',
  health: 4,
}

const deadly_claws: BaseEnemyCard = {
  name: 'DEADLY CLAWS',
  type: 'basic',
  text: 'Deal 4 damage.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [teleport, 1],
    [braid_lash, 2],
    [breath_of_death, 2],
    [deadly_claws, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'madame_woe',
  }
) as EnemyCard[]