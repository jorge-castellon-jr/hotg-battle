import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const single_combat: BaseEnemyCard = {
  name: 'SINGLE COMBAT',
  type: 'passive',
  text: 'While this card is in play, only the lead Ranger can play combat cards.',
  health: 5,
}

const heartless_barrage: BaseEnemyCard = {
  name: 'HEARTLESS BARRAGE',
  type: 'basic',
  text: 'The lead Ranger must discard the top 3 cards of their deck.',
  health: 4,
}

const dark_brachio_staff: BaseEnemyCard = {
  name: 'DARK BRACHIO STAFF',
  type: 'basic',
  text: 'Deal 4 damage to the lead Ranger.\nDeal 2 damage to each other Ranger.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

const cyborg_beatdown: BaseEnemyCard = {
  name: 'CYBORG BEATDOWN',
  type: 'basic',
  text: 'Deal 3 damage to the lead Ranger. The lead Ranger must discard 1 card.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [single_combat, 1],
    [heartless_barrage, 2],
    [dark_brachio_staff, 2],
    [cyborg_beatdown, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'evil_robot_tommy',
  }
) as EnemyCard[]