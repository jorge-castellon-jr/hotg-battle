import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const havoc_buster: BaseEnemyCard = {
  name: 'HAVOC BUSTER',
  type: 'basic',
  text: 'Drain 2 [ENERGY]. Each Ranger must discard the top card of their deck.',
  health: 4,
}

const mind_shock: BaseEnemyCard = {
  name: 'MIND SHOCK',
  type: 'basic',
  text: 'One Ranger must choose 1 card from their hand and remove it from the game.',
  health: 3,
}

const blaster_hand: BaseEnemyCard = {
  name: 'BLASTER HAND',
  type: 'basic',
  text: 'Deal 4 damage. The Ranger who suffers this damage must discard 1 card from their hand.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const hand_of_venjix: BaseEnemyCard = {
  name: 'HAND OF VENJIX',
  type: 'basic',
  text: 'Deal 3 damage. If any cards are discarded for defense as a result of this damage, remove them from the game.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [havoc_buster, 1],
    [mind_shock, 2],
    [blaster_hand, 2],
    [hand_of_venjix, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'tenaya_7',
  }
) as EnemyCard[]