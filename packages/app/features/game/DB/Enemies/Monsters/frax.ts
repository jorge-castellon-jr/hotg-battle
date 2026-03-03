import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const minion_master: BaseEnemyCard = {
  name: 'MINION MASTER',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot place hit tokens on a Frax card until each foot soldier card adjacent to that card is defeated or resolved.',
  health: 4,
}

const focused_fire: BaseEnemyCard = {
  name: 'FOCUSED FIRE',
  type: 'basic',
  text: 'Deal 4 damage to the Ranger with the fewest cards in their deck.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

const dark_science: BaseEnemyCard = {
  name: 'DARK SCIENCE',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. One Ranger must discard the top 2 cards of their deck.',
  health: 4,
}

const assault_order: BaseEnemyCard = {
  name: 'ASSAULT ORDER',
  type: 'basic',
  text: 'Deal 2 damage to a single Ranger twice. If there are at least 4 foot soldiers in this location, deal 2 damage to each Ranger twice instead.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [minion_master, 1],
    [focused_fire, 2],
    [dark_science, 2],
    [assault_order, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'frax',
  }
) as EnemyCard[]