import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const deformed_power_sword: BaseEnemyCard = {
  name: 'DEFORMED POWER SWORD',
  type: 'passive',
  text: 'Deal 5 damage when this card resolves. While this card is in play, each time an adjacent enemy card deals damage, increase that damage by 2.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const shellfish_slasher: BaseEnemyCard = {
  name: 'SHELLFISH SLASHER',
  type: 'basic',
  text: 'Deal 4 damage.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

const crayfish_command: BaseEnemyCard = {
  name: 'CRAYFISH COMMAND',
  type: 'basic',
  text: 'Deal 2 damage. Increase this damage by 1 for each foot soldier in this location.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const claw_crusher: BaseEnemyCard = {
  name: 'CLAW CRUSHER',
  type: 'basic',
  text: 'Deal 3 damage to a single Ranger twice.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [deformed_power_sword, 1],
    [shellfish_slasher, 2],
    [crayfish_command, 2],
    [claw_crusher, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'commander_crayfish',
  }
) as EnemyCard[]