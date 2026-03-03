import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const shadow_binding: BaseEnemyCard = {
  name: 'SHADOW BINDING',
  type: 'basic',
  text: 'Deal 4 damage to the Ranger with the most cards in their hand. That Ranger must choose 1 card to keep, then discard the rest of their hand.',
  health: 7,
  attacks: [{ value: 4, fixed: true }],
}

const witchs_curse: BaseEnemyCard = {
  name: 'WITCH’S CURSE',
  type: 'passive',
  text: 'While this card is in play, the energy cost of all attack cards is increased by 1.',
  health: 5,
}

const chain_lightning: BaseEnemyCard = {
  name: 'CHAIN LIGHTNING',
  type: 'basic',
  text: 'Deal 4 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const wicked_hex: BaseEnemyCard = {
  name: 'WICKED HEX',
  type: 'basic',
  text: 'Deal 6 damage to the Ranger with the fewest cards in their deck.',
  health: 6,
  attacks: [{ value: 6, fixed: true }],
}

const cruel_laughter: BaseEnemyCard = {
  name: 'CRUEL LAUGHTER',
  type: 'basic',
  text: 'Each Ranger must discard from their hand the card with the most [SHIELD].',
  health: 4,
}

export default createDeck(
  [
    [shadow_binding, 1],
    [witchs_curse, 1],
    [chain_lightning, 2],
    [wicked_hex, 2],
    [cruel_laughter, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'rita_repulsa_2nd_printing',
  }
) as EnemyCard[]