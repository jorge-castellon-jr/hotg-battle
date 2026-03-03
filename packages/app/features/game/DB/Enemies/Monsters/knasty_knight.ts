import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const blade_beam: BaseEnemyCard = {
  name: 'BLADE BEAM',
  type: 'basic',
  text: 'Deal 4 damage to the lead Ranger and 2 damage to each other Ranger.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

const smash__slash: BaseEnemyCard = {
  name: 'SMASH & SLASH',
  type: 'basic',
  text: 'Deal 3 damage to a single Ranger twice.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const knasty_slash: BaseEnemyCard = {
  name: 'KNASTY SLASH',
  type: 'basic',
  text: 'Deal 4 damage.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const lion_shield: BaseEnemyCard = {
  name: 'LION SHIELD',
  type: 'basic',
  text: 'After a Ranger deals [HIT] to this card, deal the same amount of damage to that Ranger.',
  health: 4,
}

export default createDeck(
  [
    [blade_beam, 1],
    [smash__slash, 2],
    [knasty_slash, 2],
    [lion_shield, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'knasty_knight',
  }
) as EnemyCard[]