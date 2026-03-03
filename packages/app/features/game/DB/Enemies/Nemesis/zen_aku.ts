import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const full_moon: BaseEnemyCard = {
  name: 'FULL MOON',
  type: 'passive',
  text: 'While this card is in play, the health value of all unresolved Zen-Aku cards (including this one) is increased by 2.',
  health: 5,
}

const zord_control: BaseEnemyCard = {
  name: 'ZORD CONTROL',
  type: 'basic',
  text: 'Deal 3 damage.\nRepeat this effect once for each Zord card in play.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const waxing_arc: BaseEnemyCard = {
  name: 'WAXING ARC',
  type: 'basic',
  text: 'Deal 3 damage to a single Ranger twice.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const crescent_wave: BaseEnemyCard = {
  name: 'CRESCENT WAVE',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [full_moon, 1],
    [zord_control, 2],
    [waxing_arc, 2],
    [crescent_wave, 3]
  ],
  {
    enemyType: 'nemesis',
    owner: 'zen_aku',
  }
) as EnemyCard[]