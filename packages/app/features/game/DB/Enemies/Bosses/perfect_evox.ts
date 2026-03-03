import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const morph_x_fission: BaseEnemyCard = {
  name: 'MORPH-X FISSION',
  type: 'passive',
  text: 'While this card is in play, if the shared energy pool has less than 2 [ENERGY], increase the health value of all Perfect Evox cards (including this one) by 2.',
  health: 5,
}

const reality_trespass: BaseEnemyCard = {
  name: 'REALITY TRESPASS',
  type: 'basic',
  text: 'If this card is in play at the end of this battle, move Perfect Evox’s figure to the next location clockwise that is not at its future limit. That location becomes panicked.',
  health: 8,
}

const corrupt_command: BaseEnemyCard = {
  name: 'CORRUPT COMMAND',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger and remove 1 energy token from the Command Center. If there are no energy tokens in the command center, deal 5 damage to each Ranger instead.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const perfect_assault: BaseEnemyCard = {
  name: 'PERFECT ASSAULT',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. Drain an amount of [ENERGY] equal to the number of cards discarded for defense as a result of this damage.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const crash_the_system: BaseEnemyCard = {
  name: 'CRASH THE SYSTEM',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger and drain all [ENERGY]. Increase this damage by 3 if the shared energy pool was empty.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [morph_x_fission, 1],
    [reality_trespass, 1],
    [corrupt_command, 2],
    [perfect_assault, 2],
    [crash_the_system, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'perfect_evox',
  }
) as EnemyCard[]