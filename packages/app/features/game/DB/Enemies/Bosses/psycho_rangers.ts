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

const psycho_sword: BaseEnemyCard = {
  name: 'PSYCHO SWORD',
  type: 'basic',
  text: 'Deal 5 damage to the lead Ranger.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const path_of_flame: BaseEnemyCard = {
  name: 'PATH OF FLAME',
  type: 'passive',
  text: 'While this card is in play, each time a defeated enemy card resolves, deal 3 damage.\nWhen this card resolves, resolve all [PSYCHO] effects.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const psycho_staff: BaseEnemyCard = {
  name: 'PSYCHO STAFF',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const path_of_stone: BaseEnemyCard = {
  name: 'PATH OF STONE',
  type: 'passive',
  text: 'While this card is in play, the health value of all other enemy cards is increased by 1.\nWhen this card resolves, resolve all [PSYCHO] effects.',
  health: 6,
}

const psycho_axe: BaseEnemyCard = {
  name: 'PSYCHO AXE',
  type: 'basic',
  text: 'Three different Rangers must each discard from their hand the card with the highest energy cost.',
  health: 5,
}

const path_of_frost: BaseEnemyCard = {
  name: 'PATH OF FROST',
  type: 'passive',
  text: 'While this card is in play, the shared energy pool cannot be greater than 2. Drain any excess [ENERGY].\nWhen this card resolves, resolve all [PSYCHO] effects.',
  health: 6,
}

const psycho_slinger: BaseEnemyCard = {
  name: 'PSYCHO SLINGER',
  type: 'basic',
  text: 'Three different Rangers must each discard from their hand the card with the most [SHIELD].',
  health: 5,
}

const path_of_venom: BaseEnemyCard = {
  name: 'PATH OF VENOM',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger reveals a card for defense, remove 1 [SHIELD] from that card.\nWhen this card resolves, resolve all [PSYCHO] effects.\n',
  health: 6,
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

const psycho_dagger: BaseEnemyCard = {
  name: 'PSYCHO DAGGER',
  type: 'basic',
  text: 'Each Ranger must discard the top card of their deck.',
  health: 5,
}

const path_of_cruelty: BaseEnemyCard = {
  name: 'PATH OF CRUELTY',
  type: 'passive',
  text: 'While this card is in play, the first time each Ranger plays a card in the battle, they must discard the top card of their deck.\nWhen this card resolves, resolve all [PSYCHO] effects.',
  health: 6,
}

export default createDeck(
  [
    [psycho_assault, 1],
    [psycho_burst, 2],
    [psycho_strike, 2],
    [nemesis_drain, 2],
    [psycho_sword, 1],
    [path_of_flame, 1],
    [psycho_staff, 1],
    [path_of_stone, 1],
    [psycho_axe, 1],
    [path_of_frost, 1],
    [psycho_slinger, 1],
    [path_of_venom, 1],
    [psycho_bow, 1],
    [path_of_thorns, 1],
    [psycho_dagger, 1],
    [path_of_cruelty, 1]
  ],
  {
    enemyType: 'boss',
    owner: 'psycho_rangers',
  }
) as EnemyCard[]