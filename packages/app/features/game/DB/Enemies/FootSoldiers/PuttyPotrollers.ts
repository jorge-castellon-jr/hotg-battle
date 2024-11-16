import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const flanking: BaseEnemyCard = {
  name: 'Flanking',
  type: 'passive',
  text: 'While this card is in play, each time another enemy card deals damage, increase that damage by 1.',
  health: 2,
  effects: [
    {
      type: 'addDamge',
      value: 1,
      target: 1,
      description:
        'While this card is in play, each time another enemy card deals damage, increase that damage by 1.',
    },
  ],
}
const leapingAttack: BaseEnemyCard = {
  name: 'Leaping Attack',
  type: 'basic',
  text: 'Deal 3 damage',
  health: 2,
  attacks: [{ value: 3, fixed: true }],
}
const swarmAttack: BaseEnemyCard = {
  name: 'Swarm Attack',
  type: 'basic',
  text: 'Deal 1 damage',
  health: 3,
  attacks: [{ value: 1, fixed: true }],
  effects: [
    {
      type: 'addDamge',
      value: -1,
      target: -1,
      condition: 'eachFoot',
      description: 'Increase this damage by 1 for each foot soldier in this location.',
    },
  ],
}
const cannonFodder: BaseEnemyCard = {
  name: 'Cannon Fodder',
  type: 'guard',
  text: 'Deal 2 damage',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [flanking, 2],
    [leapingAttack, 3],
    [swarmAttack, 2],
    [cannonFodder, 3],
  ],
  {
    enemyType: 'foot',
    owner: 'putty_patrollers',
  }
) as EnemyCard[]
