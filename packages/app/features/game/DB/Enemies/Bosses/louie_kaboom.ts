import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const shock_and_awe: BaseEnemyCard = {
  name: 'SHOCK AND AWE',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. Skip the next Ranger turn in this battle.',
  health: 3,
  attacks: [{ value: 3, fixed: true }],
}

const warhead: BaseEnemyCard = {
  name: 'WARHEAD',
  type: 'basic',
  text: 'This card cannot be dealt [HIT] until all other Louie Kaboom cards in this battle have been defeated.\nDeal 6 damage to each Ranger at the end of this battle.',
  health: 5,
  attacks: [{ value: 6, fixed: true }],
}

const explosive_entrance: BaseEnemyCard = {
  name: 'EXPLOSIVE ENTRANCE',
  type: 'basic',
  text: 'Roll 1 die and deal three times that much damage to each Ranger.',
  health: 6,
}

const bunker_buster: BaseEnemyCard = {
  name: 'BUNKER BUSTER',
  type: 'basic',
  text: 'Each Ranger must discard the top card and bottom card of their deck.',
  health: 5,
}

const bombardment: BaseEnemyCard = {
  name: 'BOMBARDMENT',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [shock_and_awe, 1],
    [warhead, 1],
    [explosive_entrance, 2],
    [bunker_buster, 2],
    [bombardment, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'louie_kaboom',
  }
) as EnemyCard[]