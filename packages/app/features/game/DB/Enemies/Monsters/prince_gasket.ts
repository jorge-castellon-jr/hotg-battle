import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const lovers_barrage: BaseEnemyCard = {
  name: 'LOVER’S BARRAGE',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger. Then, if any Prince Gasket or Princess Archerina cards have been defeated or discarded, deal 3 damage to each Ranger.',
  health: 6,
  attacks: [{ value: 2, fixed: true }],
}

const duelist_stance: BaseEnemyCard = {
  name: 'DUELIST STANCE',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger deals [HIT] to this card, they must discard the top card of their deck.',
  health: 5,
}

const en_garde: BaseEnemyCard = {
  name: 'EN GARDE!',
  type: 'basic',
  text: 'Deal 4 damage.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const disarming_slash: BaseEnemyCard = {
  name: 'DISARMING SLASH',
  type: 'basic',
  text: 'The Ranger with the most cards in their hand must place 1 random card from their hand on top of their deck. Then deal 4 damage to that Ranger.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [lovers_barrage, 1],
    [duelist_stance, 2],
    [en_garde, 2],
    [disarming_slash, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'prince_gasket',
  }
) as EnemyCard[]