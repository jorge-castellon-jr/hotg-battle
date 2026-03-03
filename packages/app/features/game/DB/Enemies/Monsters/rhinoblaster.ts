import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const water_mist_breath: BaseEnemyCard = {
  name: 'WATER MIST BREATH',
  type: 'basic',
  text: 'Each Ranger must discard 1 card from their hand.',
  health: 4,
}

const grim_scimitar: BaseEnemyCard = {
  name: 'GRIM SCIMITAR',
  type: 'basic',
  text: 'Deal 5 damage.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const lightning_horn: BaseEnemyCard = {
  name: 'LIGHTNING HORN',
  type: 'basic',
  text: 'The Rangers must discard a total of 4 cards, divided as they choose.',
  health: 4,
}

const charging_tackle: BaseEnemyCard = {
  name: 'CHARGING TACKLE',
  type: 'basic',
  text: 'Deal 6 damage, unless a Ranger discards 2 cards from their hand to prevent it.',
  health: 4,
  attacks: [{ value: 6, fixed: true }],
}

export default createDeck(
  [
    [water_mist_breath, 1],
    [grim_scimitar, 2],
    [lightning_horn, 2],
    [charging_tackle, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'rhinoblaster',
  }
) as EnemyCard[]