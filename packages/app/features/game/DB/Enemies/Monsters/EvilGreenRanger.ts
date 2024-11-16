import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const dragonRush: BaseEnemyCard = {
  name: 'Dragon Rush',
  type: 'basic',
  text: 'Roll 6 dice and deal that much damage to the lead Ranger. Roll 2 dice and deal that much damage to each other Ranger.',
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
const dragonDagger: BaseEnemyCard = {
  name: 'Dragon Dagger',
  type: 'fast',
  text: 'Roll 4 dice and deal that much damage to 2 different Rangers.',
  health: 4,
  attacks: [
    {
      value: 4,
      target: 2,
    },
  ],
}
const dragonShield: BaseEnemyCard = {
  name: 'Dragon Shield',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger deals damage to an Evil Green Ranger card (including this one), deal 2 damage to that Ranger',
  health: 6,
  effects: [
    {
      type: 'counter',
      value: 2,
      target: 1,
    },
  ],
}
const swordOfDarkness: BaseEnemyCard = {
  name: 'Sword of Darkness',
  type: 'basic',
  text: 'Deal 6 damage to the lead Ranger',
  health: 6,
  attacks: [
    {
      value: 6,
      fixed: true,
      target: 'lead',
    },
  ],
}

export default createDeck(
  [
    [dragonRush, 2],
    [dragonDagger, 3],
    [swordOfDarkness, 2],
    [dragonShield, 1],
  ],
  {
    enemyType: 'monster',
    owner: 'evil_green_ranger',
  }
) as EnemyCard[]
