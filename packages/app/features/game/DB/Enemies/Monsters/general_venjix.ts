import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const machine_empire_elite: BaseEnemyCard = {
  name: 'MACHINE EMPIRE ELITE',
  type: 'passive',
  text: 'While this card is in play, the shield value of all combat cards with exactly 3 [SHIELD] is reduced by 2 [SHIELD].',
  health: 5,
}

const big_bad_beating: BaseEnemyCard = {
  name: 'BIG BAD BEATING',
  type: 'basic',
  text: 'The Lead Ranger must discard cards from the top of their deck until they have discarded at least 3 [SHIELD] or are defeated.',
  health: 4,
}

const thunder_burst: BaseEnemyCard = {
  name: 'THUNDER BURST',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const shadow_claw: BaseEnemyCard = {
  name: 'SHADOW CLAW',
  type: 'basic',
  text: 'Deal 3 damage to the lead Ranger twice.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [machine_empire_elite, 1],
    [big_bad_beating, 2],
    [thunder_burst, 2],
    [shadow_claw, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'general_venjix',
  }
) as EnemyCard[]