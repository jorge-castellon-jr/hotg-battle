import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const zord_lockdown: BaseEnemyCard = {
  name: 'ZORD LOCKDOWN',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot use Zord abilities.',
  health: 3,
}

const powerful_current: BaseEnemyCard = {
  name: 'POWERFUL CURRENT',
  type: 'basic',
  text: 'Exhaust all Zord cards in play. If 1 or fewer Zord cards were exhausted this way, deal 3 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const chum_chucks: BaseEnemyCard = {
  name: 'CHUM-CHUCKS',
  type: 'basic',
  text: 'Deal 4 damage to each Ranger with at least 1 Zord card. If no Zord cards are in play, deal 2 damage to each Ranger instead.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const hijack_attack: BaseEnemyCard = {
  name: 'HIJACK ATTACK',
  type: 'basic',
  text: 'Deal 4 damage each to half of the Rangers in this battle )rounded up). Increase this damage by 1 for each Zord card in play.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [zord_lockdown, 1],
    [powerful_current, 2],
    [chum_chucks, 2],
    [hijack_attack, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'pirantishead',
  }
) as EnemyCard[]