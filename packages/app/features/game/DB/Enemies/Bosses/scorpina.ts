import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const sweeping_slash: BaseEnemyCard = {
  name: 'SWEEPING SLASH',
  type: 'basic',
  text: 'Deal 5 damage to 2 different Rangers.',
  health: 6,
  attacks: [{ value: 5, fixed: true }],
}

const feinting_slash: BaseEnemyCard = {
  name: 'FEINTING SLASH',
  type: 'basic',
  text: 'Deal 5 damage. Skip the next Ranger turn in this battle.',
  health: 6,
  attacks: [{ value: 5, fixed: true }],
}

const scorpion_strike: BaseEnemyCard = {
  name: 'SCORPION STRIKE',
  type: 'basic',
  text: 'Deal 4 damage. Drain 2 [ENERGY].',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const deadly_stinger: BaseEnemyCard = {
  name: 'DEADLY STINGER',
  type: 'basic',
  text: 'Deal 5 damage to the Ranger with the feweset cards in their deck.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

const boomerang_blade: BaseEnemyCard = {
  name: 'BOOMERANG BLADE',
  type: 'basic',
  text: 'Deal 4 damage when this card resolves.\nAfter the last scorpina card in this battle resolves, if this card has not been defeated, deal 4 damage.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [sweeping_slash, 1],
    [feinting_slash, 1],
    [scorpion_strike, 2],
    [deadly_stinger, 2],
    [boomerang_blade, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'scorpina',
  }
) as EnemyCard[]