import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const pirate_queen: BaseEnemyCard = {
  name: 'PIRATE QUEEN',
  type: 'guard',
  text: 'While this card is in play, all foot soldier cards gain the GUARD keyword and have +1 health.',
  health: 5,
}

const viva_la_diva: BaseEnemyCard = {
  name: 'VIVA LA DIVA!',
  type: 'basic',
  text: 'Deal 4 damage each to half of the Rangers in this battle (rounded up). Increase this damage by 1 for each Divatox card that has been defeated or discarded.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

const depth_charge: BaseEnemyCard = {
  name: 'DEPTH CHARGE',
  type: 'passive',
  text: 'While this card is in play, after each Ranger attack resolves, deal 1 damage to that Ranger. Increase this damage by 1 for each [MISS] result rolled during that attack.',
  health: 4,
  attacks: [{ value: 1, fixed: true }],
}

const eye_of_chaos: BaseEnemyCard = {
  name: 'EYE OF CHAOS',
  type: 'basic',
  text: 'Roll 1 die. On a [MISS] result, drain 3 [ENERGY]. On a [HIT] result, deal 3 damage to each Ranger. On a [HIT][HIT] result, do both.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const fire_torpedoes: BaseEnemyCard = {
  name: 'FIRE TORPEDOES',
  type: 'basic',
  text: 'Two different Rangers must each discard the bottom 2 cards of their deck.',
  health: 5,
}

export default createDeck(
  [
    [pirate_queen, 1],
    [viva_la_diva, 1],
    [depth_charge, 2],
    [eye_of_chaos, 2],
    [fire_torpedoes, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'divatox',
  }
) as EnemyCard[]