import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const brutal_persona: BaseEnemyCard = {
  name: 'BRUTAL PERSONA',
  type: 'basic',
  text: 'Each time a Ranger discards a card for defense, drain 1 [ENERGY].',
  health: 6,
}

const zord_control: BaseEnemyCard = {
  name: 'ZORD CONTROL',
  type: 'basic',
  text: 'Deal 3 damage. Repeat this effect once for each Zord card in play.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const dark_laser_arrow: BaseEnemyCard = {
  name: 'DARK LASER ARROW',
  type: 'basic',
  text: 'Roll 1 die for each [ENERGY] in the shared energy pool and in the storage of Rangers in this battle. Deal damage to each Ranger equal to the total [HIT] results.',
  health: 5,
}

const drago_sword: BaseEnemyCard = {
  name: 'DRAGO SWORD',
  type: 'basic',
  text: 'Deal 4 damage. The Ranger who suffers this damage reduced the shield value of each card they reveal for defense by 1.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [brutal_persona, 1],
    [zord_control, 2],
    [dark_laser_arrow, 2],
    [drago_sword, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'evil_dino_thunder_white',
  }
) as EnemyCard[]