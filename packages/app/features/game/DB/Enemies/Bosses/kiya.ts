import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const grim_convictions: BaseEnemyCard = {
  name: 'GRIM CONVICTIONS',
  type: 'passive',
  text: 'While this card is in play, each time Kiya rolls a [MISS] result, 1 Ranger must discard the top card of their deck.',
  health: 7,
}

const omega_trident: BaseEnemyCard = {
  name: 'OMEGA TRIDENT',
  type: 'basic',
  text: 'Drain 3 [ENERGY]. Roll 6 dice and deal that much damage to the lead Ranger.',
  health: 6,
}

const anointed_strike: BaseEnemyCard = {
  name: 'ANOINTED STRIKE',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Roll 4 dice and deal that much damage each to half of the Rangers in this battle (rounded up).',
  health: 4,
}

const deep_scars: BaseEnemyCard = {
  name: 'DEEP SCARS',
  type: 'passive',
  text: 'While this card is in play, at the end of each Ranger turn, roll a number of dice equal to twice the number of defeated Kiya cards in this battle and deal that much damage to each Ranger.',
  health: 5,
}

const necessary_evil: BaseEnemyCard = {
  name: 'NECESSARY EVIL',
  type: 'basic',
  text: 'Reveal 1 random card from the deck of each defeated monster. Deal an amount of damage to each Ranger equal to the highest health value among those cards.',
  health: 5,
}

export default createDeck(
  [
    [grim_convictions, 1],
    [omega_trident, 1],
    [anointed_strike, 2],
    [deep_scars, 2],
    [necessary_evil, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'kiya',
  }
) as EnemyCard[]