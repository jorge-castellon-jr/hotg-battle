import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const harsh_discipline: BaseEnemyCard = {
  name: 'HARSH DISCIPLINE',
  type: 'passive',
  text: 'While this card is in play, each time Elsa deals damage, she targets the Ranger with the fewest cards in their deck.',
  health: 6,
}

const blast_cascade: BaseEnemyCard = {
  name: 'BLAST CASCADE',
  type: 'basic',
  text: 'Each Ranger must discard cards from the top of their deck until they are tied with all other Rangers for having the fewest cards in their deck. Then deal 3 damage.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const rapid_cuts: BaseEnemyCard = {
  name: 'RAPID CUTS',
  type: 'basic',
  text: 'Deal 1 damage.\nDeal 2 damage.\nDeal 3 damage.',
  health: 3,
  attacks: [{ value: 1, fixed: true }],
}

const apostles_blade: BaseEnemyCard = {
  name: 'APOSTLE’S BLADE',
  type: 'basic',
  text: 'Deal 4 damage. Then the Ranger with the fewest cards in their deck must discard the top card of their deck.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [harsh_discipline, 1],
    [blast_cascade, 2],
    [rapid_cuts, 2],
    [apostles_blade, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'elsa',
  }
) as EnemyCard[]