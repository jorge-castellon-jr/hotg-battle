import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const merciless_plan: BaseEnemyCard = {
  name: 'MERCILESS PLAN',
  type: 'passive',
  text: 'While this card is in play, resolve +1 enemy card during each enemy turn in battle.',
  health: 6,
}

const oppressive_aura: BaseEnemyCard = {
  name: 'OPPRESSIVE AURA',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot add extra dice or [HIT] to their attacks.',
  health: 7,
}

const ripclaw_rush: BaseEnemyCard = {
  name: 'RIPCLAW RUSH',
  type: 'basic',
  text: 'Deal 4 damage. The Ranger who suffers this damage must then discard a number of cards from the top of their deck equal to the number of cards they discarded for defense.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

const psionic_blast: BaseEnemyCard = {
  name: 'PSIONIC BLAST',
  type: 'basic',
  text: 'Deal an amount of damage to each Ranger equal to the number of cards in their hand.',
  health: 4,
}

const mind_spike: BaseEnemyCard = {
  name: 'MIND SPIKE',
  type: 'basic',
  text: 'The lead Ranger must draw 2 cards, then discard all duplicate cards from their hand. If they discarded no cards, deal 4 damage to that Ranger.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [merciless_plan, 1],
    [oppressive_aura, 1],
    [ripclaw_rush, 2],
    [psionic_blast, 2],
    [mind_spike, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'mesogog',
  }
) as EnemyCard[]