import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const foul_tactics: BaseEnemyCard = {
  name: 'FOUL TACTICS',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger attacks this card or an adjacent enemy card, they cannot roll more than 2 dice.',
  health: 2,
}

const hardened_scales: BaseEnemyCard = {
  name: 'HARDENED SCALES',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. The next time a Ranger performs an attack during this battle, remove 1 die from that attack before rolling.',
  health: 3,
}

const cleaving_strike: BaseEnemyCard = {
  name: 'CLEAVING STRIKE',
  type: 'basic',
  text: 'Deal 2 damage each to 2 different Rangers.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const wicked_spines: BaseEnemyCard = {
  name: 'WICKED SPINES',
  type: 'basic',
  text: 'When this card is defeated, deal 3 damage.',
  health: 2,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [foul_tactics, 2],
    [hardened_scales, 2],
    [cleaving_strike, 3],
    [wicked_spines, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'tyrannodrones',
  }
) as EnemyCard[]