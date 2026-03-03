import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const looking_fabulous: BaseEnemyCard = {
  name: 'LOOKING FABULOUS',
  type: 'passive',
  text: 'While this card is in play, for every 2 foot soldier figures in this location, the health value of all Nadira cards is increased by 1. When this card resolves, drain 2 [ENERGY].',
  health: 6,
}

const manicure_massacre: BaseEnemyCard = {
  name: 'MANICURE MASSACRE',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. During the next Ranger turn in this battle, only Nadira’s nemesis can play combat cards.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const let_me_paint_my_nails: BaseEnemyCard = {
  name: 'LET ME PAINT MY NAILS',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger defeats a foot soldier card, deal 2 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const nuts_and_bolts: BaseEnemyCard = {
  name: 'NUTS AND BOLTS',
  type: 'passive',
  text: 'Reveal and resolve the top card of 2 foot soldier decks, one at a time, then return them and shuffle the decks. Ignore all passive effects of revealed cards with the PASSIVE keyword.',
  health: 3,
}

const shopping_spree: BaseEnemyCard = {
  name: 'SHOPPING SPREE',
  type: 'basic',
  text: 'Drain an amount of [ENERGY] equal to this card’s health value. Reduce this amount by 1 for each hit token on this card.',
  health: 6,
}

export default createDeck(
  [
    [looking_fabulous, 1],
    [manicure_massacre, 1],
    [let_me_paint_my_nails, 2],
    [nuts_and_bolts, 2],
    [shopping_spree, 2]
  ],
  {
    enemyType: 'nemesis',
    owner: 'nadira',
  }
) as EnemyCard[]