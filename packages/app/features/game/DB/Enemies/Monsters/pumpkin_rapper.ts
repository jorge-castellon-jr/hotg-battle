import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const hip_hop_bomb_drop: BaseEnemyCard = {
  name: 'HIP-HOP BOMB DROP',
  type: 'basic',
  text: 'Each Ranger must discard from their hand 1 card with an energy cost of zero.',
  health: 5,
}

const rhymin_vines: BaseEnemyCard = {
  name: 'RHYMIN’ VINES',
  type: 'basic',
  text: 'Deal 2 damage.\nDeal 2 damage.\nDeal 2 damage.',
  health: 5,
  attacks: [{ value: 2, fixed: true }],
}

const rappers_trap: BaseEnemyCard = {
  name: 'RAPPER’S TRAP',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger attacks this card, they must spend +1 [ENERGY].',
  health: 3,
}

const spit_hot_fire: BaseEnemyCard = {
  name: 'SPIT HOT FIRE',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [hip_hop_bomb_drop, 1],
    [rhymin_vines, 2],
    [rappers_trap, 2],
    [spit_hot_fire, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'pumpkin_rapper',
  }
) as EnemyCard[]