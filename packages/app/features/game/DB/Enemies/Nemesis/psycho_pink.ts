import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const psycho_assault: BaseEnemyCard = {
  name: 'PSYCHO ASSAULT',
  type: 'basic',
  text: 'Deal 3 damage. If there are 2 or more Psycho Rangers in this location, deal 6 damage instead.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const psycho_burst: BaseEnemyCard = {
  name: 'PSYCHO BURST',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger. Resolve all [PSYCHO] effects.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const psycho_strike: BaseEnemyCard = {
  name: 'PSYCHO STRIKE',
  type: 'basic',
  text: 'Resolve all [PSYCHO] effects.',
  health: 4,
}

const nemesis_drain: BaseEnemyCard = {
  name: 'NEMESIS DRAIN',
  type: 'basic',
  text: 'Drain 1 [ENERGY].\nResolve all [PSYCHO] effects.',
  health: 3,
}

const psycho_bow: BaseEnemyCard = {
  name: 'PSYCHO BOW',
  type: 'basic',
  text: 'Drain 2 [ENERGY].\nDeal 3 damage to the Ranger with the fewest cards in their deck.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const path_of_thorns: BaseEnemyCard = {
  name: 'PATH OF THORNS',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger attacks this card or an adjacent enemy card, deal 2 damage to that Ranger.\nWhen this card resolves, resolve all [PSYCHO] effects.',
  health: 6,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [psycho_assault, 1],
    [psycho_burst, 2],
    [psycho_strike, 2],
    [nemesis_drain, 2],
    [psycho_bow, 1],
    [path_of_thorns, 1]
  ],
  {
    enemyType: 'nemesis',
    owner: 'psycho_pink',
  }
) as EnemyCard[]