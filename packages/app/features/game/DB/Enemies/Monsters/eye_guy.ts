import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const devour_mind: BaseEnemyCard = {
  name: 'DEVOUR MIND',
  type: 'basic',
  text: 'The Ranger with the most cards in their hand must discard 3 cards from their hand.',
  health: 5,
}

const focused_fire: BaseEnemyCard = {
  name: 'FOCUSED FIRE',
  type: 'basic',
  text: 'Deal 4 damage to the Ranger with the fewest cards in their deck.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

const scattered_visage: BaseEnemyCard = {
  name: 'SCATTERED VISAGE',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger deals [HIT] to this card, reduce it to 1.',
  health: 3,
}

const optic_blast: BaseEnemyCard = {
  name: 'OPTIC BLAST',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger twice.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [devour_mind, 1],
    [focused_fire, 2],
    [scattered_visage, 2],
    [optic_blast, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'eye_guy',
  }
) as EnemyCard[]