import { EnemyCard } from '../../../CardTypes'

const dragonRush: EnemyCard = {
  name: 'Dragon Rush',
  type: 'basic',
  enemyType: 'monster',
  text: 'Roll 6 dice and deal that much damage to the lead Ranger. Roll 2 dice and deal that much damage to each other Ranger.',
  owner: 'Evil Green Ranger',
  health: 4,
  attacks: [
    {
      value: 6,
      target: 'lead',
    },
    {
      value: 2,
      target: 'notLead',
    },
  ],
}
const dragonDagger: EnemyCard = {
  name: 'Dragon Dagger',
  type: 'fast',
  enemyType: 'monster',
  text: 'Roll 4 dice and deal that much damage to 2 different Rangers.',
  owner: 'Evil Green Ranger',
  health: 4,
  attacks: [
    {
      value: 4,
      target: 2,
    },
  ],
}
const dragonShield: EnemyCard = {
  name: 'Dragon Shield',
  type: 'passive',
  enemyType: 'monster',
  text: 'While this card is in play, each time a Ranger deals damage to an Evil Green Ranger card (including this one), deal 2 damage to that Ranger',
  owner: 'Evil Green Ranger',
  health: 6,
  effects: [
    {
      type: 'counter',
      value: 2,
      target: 1,
    },
  ],
}
const swordOfDarkness: EnemyCard = {
  name: 'Sword of Darkness',
  type: 'basic',
  enemyType: 'monster',
  text: 'Deal 6 damage to the lead Ranger',
  owner: 'Evil Green Ranger',
  health: 6,
  attacks: [
    {
      value: 6,
      fixed: true,
      target: 'lead',
    },
  ],
}

export default [
  dragonRush,
  dragonRush,
  dragonDagger,
  dragonDagger,
  dragonDagger,
  dragonShield,
  swordOfDarkness,
  swordOfDarkness,
]
