import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const clockwork_blaster: BaseEnemyCard = {
  name: 'CLOCKWORK BLASTER',
  type: 'basic',
  text: 'Drain 1 [ENERGY].\nDeal 2 damage.\n',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

const disassembly_required: BaseEnemyCard = {
  name: 'DISASSEMBLY REQUIRED',
  type: 'passive',
  text: 'While this card is in play, when another foot soldier card would be defeated by [HIT], all hit tokens are removed from that card and this card is defeated instead.',
  health: 3,
}

const shock_spear: BaseEnemyCard = {
  name: 'SHOCK SPEAR',
  type: 'basic',
  text: 'Drain 2 [ENERGY], unless a Ranger suffers 3 damage to prevent it.',
  health: 2,
}

const tick_tock_kick: BaseEnemyCard = {
  name: 'TICK TOCK KICK',
  type: 'basic',
  text: 'Deal 2 damage. Increase this damage by 1 for each other food soldier card that has not resolved.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [clockwork_blaster, 2],
    [disassembly_required, 2],
    [shock_spear, 3],
    [tick_tock_kick, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'cogs',
  }
) as EnemyCard[]