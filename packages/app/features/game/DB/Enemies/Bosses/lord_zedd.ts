import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const aura_of_doom: BaseEnemyCard = {
  name: 'AURA OF DOOM',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger plays a card with an energy cost greater than zero, deal 2 damage to that Ranger after the card resolves.',
  health: 6,
  attacks: [{ value: 2, fixed: true }],
}

const darkness_burst: BaseEnemyCard = {
  name: 'DARKNESS BURST',
  type: 'basic',
  text: 'Deal damage to each Ranger equal to the number of cards in their hand.',
  health: 7,
}

const inferno: BaseEnemyCard = {
  name: 'INFERNO',
  type: 'basic',
  text: 'Deal 5 damage to each Ranger.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const cruel_strike: BaseEnemyCard = {
  name: 'CRUEL STRIKE',
  type: 'basic',
  text: 'One Ranger must discard the top 3 cards of their deck.',
  health: 4,
}

const z_lightning: BaseEnemyCard = {
  name: 'Z-LIGHTNING',
  type: 'basic',
  text: 'Deal 12 damage, divided among the Rangers as they choose.',
  health: 5,
  attacks: [{ value: 12, fixed: true }],
}

export default createDeck(
  [
    [aura_of_doom, 1],
    [darkness_burst, 1],
    [inferno, 2],
    [cruel_strike, 2],
    [z_lightning, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'lord_zedd',
  }
) as EnemyCard[]