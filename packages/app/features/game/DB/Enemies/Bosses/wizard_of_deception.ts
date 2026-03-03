import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const foul_ritual: BaseEnemyCard = {
  name: 'FOUL RITUAL',
  type: 'basic',
  text: 'At the end of this battle, if this card has not been defeated, deal 7 damage to each Ranger.',
  health: 7,
  attacks: [{ value: 7, fixed: true }],
}

const shadow_phantasm: BaseEnemyCard = {
  name: 'SHADOW PHANTASM',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger defeats a Wizard of Deception card (including this one), they must discard the top 2 cards of their deck.',
  health: 6,
}

const banishment_: BaseEnemyCard = {
  name: 'BANISHMENT ',
  type: 'basic',
  text: 'The lead Ranger must discard their entire hand.',
  health: 5,
}

const shadow_pact: BaseEnemyCard = {
  name: 'SHADOW PACT',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. Drain 2 [ENERGY].',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const dark_knowledge: BaseEnemyCard = {
  name: 'DARK KNOWLEDGE',
  type: 'basic',
  text: 'Each Ranger must draw 2 cards and then discard 2 random cards from their hand.',
  health: 4,
}

export default createDeck(
  [
    [foul_ritual, 1],
    [shadow_phantasm, 1],
    [banishment_, 1],
    [shadow_pact, 2],
    [dark_knowledge, 3]
  ],
  {
    enemyType: 'boss',
    owner: 'wizard_of_deception',
  }
) as EnemyCard[]