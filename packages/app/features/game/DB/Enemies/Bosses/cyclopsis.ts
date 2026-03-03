import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const head_of_cyclopsis_undamaged: BaseEnemyCard = {
  name: 'HEAD OF CYCLOPSIS (Undamaged)',
  type: 'basic',
  text: 'Rangers cannot use Zord abilities.',
  health: 6,
}

const core_of_cyclopsis_undamaged: BaseEnemyCard = {
  name: 'CORE OF CYCLOPSIS (Undamaged)',
  type: 'basic',
  text: 'At the end of each battle, move 1 hit token from each other Cyclopsis component card to this card.',
  health: 8,
}

const right_arm_of_cyclopsis_undamag: BaseEnemyCard = {
  name: 'RIGHT ARM OF CYCLOPSIS (Undamaged)',
  type: 'basic',
  text: 'Each time a Ranger attacks another Cyclopsis component card, deal 2 damage to that Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const left_arm_of_cyclopsis_undamage: BaseEnemyCard = {
  name: 'LEFT ARM OF CYCLOPSIS (Undamaged)',
  type: 'basic',
  text: 'Each other Cyclopsis component card has +1 health.',
  health: 4,
}

const right_leg_of_cyclopsis_undamag: BaseEnemyCard = {
  name: 'RIGHT LEG OF CYCLOPSIS (Undamaged)',
  type: 'basic',
  text: 'At the start of each battle, draw and resolve 1 Cyclopsis enemy card.',
  health: 5,
}

const left_leg_of_cyclopsis_undamage: BaseEnemyCard = {
  name: 'LEFT LEG OF CYCLOPSIS (Undamaged)',
  type: 'basic',
  text: 'At the end of each battle, draw and resolve 1 Cyclopsis enemy card.',
  health: 5,
}

const head_of_cyclopsis_damaged: BaseEnemyCard = {
  name: 'HEAD OF CYCLOPSIS (Damaged)',
  type: 'basic',
  text: 'Each time the Rangers use a Zord ability, deal 3 damage.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const core_of_cyclopsis_damaged: BaseEnemyCard = {
  name: 'CORE OF CYCLOPSIS (Damaged)',
  type: 'basic',
  text: 'When this card is flipped to this side, immediately deal 10 damage, divided among the Rangers as they choose.',
  health: 4,
  attacks: [{ value: 10, fixed: true }],
}

const right_arm_of_cyclopsis_damaged: BaseEnemyCard = {
  name: 'RIGHT ARM OF CYCLOPSIS (Damaged)',
  type: 'basic',
  text: 'Each time Cyclopsis deals damage, increase that damage by 1.',
  health: 4,
}

const left_arm_of_cyclopsis_damaged: BaseEnemyCard = {
  name: 'LEFT ARM OF CYCLOPSIS (Damaged)',
  type: 'basic',
  text: 'Each time Cyclopsis deals damage, increase that damage by 1.',
  health: 4,
}

const right_leg_of_cyclopsis_damaged: BaseEnemyCard = {
  name: 'RIGHT LEG OF CYCLOPSIS (Damaged)',
  type: 'basic',
  text: 'At the start of each battle, each Ranger must place 1 card from their hand on the bottom of their deck.',
  health: 4,
}

const left_leg_of_cyclopsis_damaged: BaseEnemyCard = {
  name: 'LEFT LEG OF CYCLOPSIS (Damaged)',
  type: 'basic',
  text: 'At the end of each battle, each Ranger must discard 1 card from the bottom of their deck.',
  health: 4,
}

const devastating_strike: BaseEnemyCard = {
  name: 'DEVASTATING STRIKE',
  type: 'basic',
  text: 'Deal 3 damage. Increase this damage by 1 for each defeated Cyclopsis component card.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const arc_lightning: BaseEnemyCard = {
  name: 'ARC LIGHTNING',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const unstoppable_force: BaseEnemyCard = {
  name: 'UNSTOPPABLE FORCE',
  type: 'basic',
  text: 'Deal 3 damage to the lead Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const missile_barrage: BaseEnemyCard = {
  name: 'MISSILE BARRAGE',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Deal 4 damage, divided among the Rangers as they choose.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [head_of_cyclopsis_undamaged, 1],
    [core_of_cyclopsis_undamaged, 1],
    [right_arm_of_cyclopsis_undamag, 1],
    [left_arm_of_cyclopsis_undamage, 1],
    [right_leg_of_cyclopsis_undamag, 1],
    [left_leg_of_cyclopsis_undamage, 1],
    [head_of_cyclopsis_damaged, 1],
    [core_of_cyclopsis_damaged, 1],
    [right_arm_of_cyclopsis_damaged, 1],
    [left_arm_of_cyclopsis_damaged, 1],
    [right_leg_of_cyclopsis_damaged, 1],
    [left_leg_of_cyclopsis_damaged, 1],
    [devastating_strike, 1],
    [arc_lightning, 1],
    [unstoppable_force, 2],
    [missile_barrage, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'cyclopsis',
  }
) as EnemyCard[]