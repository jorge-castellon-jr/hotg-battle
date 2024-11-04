import { EnemyCard } from '../../CardTypes'

const flanking: EnemyCard = {
  name: 'Flanking',
  type: 'passive',
  enemyType: 'foot',
  text: '',
  owner: 'Putty Patrollers',
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
const leapingAttack: EnemyCard = {
  name: 'Leaping Attack',
  type: 'basic',
  enemyType: 'foot',
  text: 'Deal 3 damage',
  owner: 'Putty Patrollers',
  health: 2,
  attack: { value: 3, fixed: true },
}
const swarmAttack: EnemyCard = {
  name: 'Swarm Attack',
  type: 'basic',
  enemyType: 'foot',
  text: 'Deal 1 damage',
  owner: 'Putty Patrollers',
  health: 3,
  attack: { value: 1, fixed: true },
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
const cannonFodder: EnemyCard = {
  name: 'Cannon Fodder',
  type: 'guard',
  enemyType: 'foot',
  text: 'Deal 2 damage',
  owner: 'Putty Patrollers',
  health: 3,
  attack: { value: 2, fixed: true },
}

export default [
  flanking,
  flanking,
  leapingAttack,
  leapingAttack,
  leapingAttack,
  swarmAttack,
  swarmAttack,
  cannonFodder,
  cannonFodder,
  cannonFodder,
]
