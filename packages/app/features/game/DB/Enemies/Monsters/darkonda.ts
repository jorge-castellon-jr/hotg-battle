import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const nine_lives: BaseEnemyCard = {
  name: 'NINE LIVES',
  type: 'passive',
  text: 'While this card is in play, all [HIT] dealt to adjacent Darkonda cards is dealt to this card instead. At the end of each enemy turn, remove 1 hit token from this card.',
  health: 9,
}

const brutal_pulse: BaseEnemyCard = {
  name: 'BRUTAL PULSE',
  type: 'basic',
  text: 'Deal 3 damage each to 3 different Rangers. This damage cannot be reduced.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const rending_slash: BaseEnemyCard = {
  name: 'RENDING SLASH',
  type: 'basic',
  text: 'Two Rangers who do not have at least 9 [SHIELD] total in their discard pile must each discard cards from their hand and/or the top of their deck until they do.',
  health: 4,
}

const dark_blade: BaseEnemyCard = {
  name: 'DARK BLADE',
  type: 'basic',
  text: 'Deal 9 damage, divided among the Rangers as they choose. This damage cannot be reduced.',
  health: 4,
  attacks: [{ value: 9, fixed: true }],
}

export default createDeck(
  [
    [nine_lives, 1],
    [brutal_pulse, 2],
    [rending_slash, 2],
    [dark_blade, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'darkonda',
  }
) as EnemyCard[]