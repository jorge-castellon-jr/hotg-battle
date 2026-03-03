import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const mantor: BaseEnemyCard = {
  name: 'MANTOR',
  type: 'basic',
  text: 'Deal 6 damage.',
  health: 4,
  attacks: [{ value: 6, fixed: true }],
}

const buffalord_: BaseEnemyCard = {
  name: 'BUFFALORD ',
  type: 'basic',
  text: 'Deal 4 damage, unless a Ranger discards 2 cards from their hand to prevent it.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const porcupongor_: BaseEnemyCard = {
  name: 'PORCUPONGOR ',
  type: 'passive',
  text: 'While this card is in play, after a Ranger attacks this card or an adjacent enemy card, deal 2 damage to that Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const gakko_: BaseEnemyCard = {
  name: 'GAKKO ',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const toady_: BaseEnemyCard = {
  name: 'TOADY ',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Two different Rangers must each discard 1 card from their hand.',
  health: 4,
}

const stingerella_: BaseEnemyCard = {
  name: 'STINGERELLA ',
  type: 'basic',
  text: 'Deal 3 damage. Skip the next Ranger turn in this battle, unless a Ranger discards 2 cards from their hand to prevent this effect.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const rantipede_: BaseEnemyCard = {
  name: 'RANTIPEDE ',
  type: 'passive',
  text: 'While this card is in play, each time another enemy card deals damage, increase that damage by 1.',
  health: 4,
}

const naja_: BaseEnemyCard = {
  name: 'NAJA ',
  type: 'basic',
  text: 'Remove 1 enemy figure from the experience track. Deploy 1 Rinshi to this location.',
  health: 4,
}

export default createDeck(
  [
    [mantor, 1],
    [buffalord_, 1],
    [porcupongor_, 1],
    [gakko_, 1],
    [toady_, 1],
    [stingerella_, 1],
    [rantipede_, 1],
    [naja_, 1]
  ],
  {
    enemyType: 'nemesis',
    owner: 'rinshi_beast',
  }
) as EnemyCard[]