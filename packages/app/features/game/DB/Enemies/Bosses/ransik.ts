import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const bone_blade: BaseEnemyCard = {
  name: 'BONE BLADE',
  type: 'basic',
  text: 'Deal 6 damage. During the next Ranger turn in this battle, only the Ranger who suffered this damage can play combat cards. If that Ranger is defeated, skip the next Ranger turn instead.',
  health: 6,
  attacks: [{ value: 6, fixed: true }],
}

const eye_for_an_eye: BaseEnemyCard = {
  name: 'EYE FOR AN EYE',
  type: 'passive',
  text: 'While this card is in play, after a Ranger attacks a Ransik card, deal 3 damage to each Ranger if that card is not defeated.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const mutant_strength: BaseEnemyCard = {
  name: 'MUTANT STRENGTH',
  type: 'passive',
  text: 'While this card is in play, the health value of all adjacent Ransik cards is increased by 2. When this card resolves, deal 5 damage.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const blast_burn: BaseEnemyCard = {
  name: 'BLAST BURN',
  type: 'basic',
  text: 'Deal 2 damage. Increase this damage by an amount equal to this card’s health value.',
  health: 6,
  attacks: [{ value: 2, fixed: true }],
}

const mutant_mayhem: BaseEnemyCard = {
  name: 'MUTANT MAYHEM',
  type: 'basic',
  text: 'Deal an amount of damage to each Ranger equal to this card’s health value.',
  health: 5,
}

export default createDeck(
  [
    [bone_blade, 1],
    [eye_for_an_eye, 1],
    [mutant_strength, 2],
    [blast_burn, 2],
    [mutant_mayhem, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'ransik',
  }
) as EnemyCard[]