import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const stolen_power: BaseEnemyCard = {
  name: 'STOLEN POWER',
  type: 'passive',
  text: 'While this card is in play, when [ENERGY] is spent or drained, place the energy tokens on this card.\nEach time Lord Drakkon deals damage, increase that damage by 1 for each energy token on this card.',
  health: 7,
}

const thunder_slash: BaseEnemyCard = {
  name: 'THUNDER SLASH',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger twice.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const dominate: BaseEnemyCard = {
  name: 'DOMINATE',
  type: 'basic',
  text: 'The lead Ranger must discard 2 random cards from their hand. Deal damage to each other Ranger equal to the number of [SHIELD] on the discarded cards.',
  health: 6,
}

const havoc_blow: BaseEnemyCard = {
  name: 'HAVOC BLOW',
  type: 'basic',
  text: 'Deal 3 damage. Drain 2 [ENERGY].',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const cyclone_strike: BaseEnemyCard = {
  name: 'CYCLONE STRIKE',
  type: 'basic',
  text: 'Deal 4 damage.\nDeal 3 damage.\nDeal 2 damage.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [stolen_power, 1],
    [thunder_slash, 1],
    [dominate, 1],
    [havoc_blow, 2],
    [cyclone_strike, 3]
  ],
  {
    enemyType: 'boss',
    owner: 'lord_drakkon',
  }
) as EnemyCard[]