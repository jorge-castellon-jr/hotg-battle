import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const im_not_reading_that: BaseEnemyCard = {
  name: 'I’M NOT READING THAT',
  type: 'passive',
  text: 'While this card is in play, the effect text on all Ranger attack cards is ignored.',
  health: 5,
}

const shoot: BaseEnemyCard = {
  name: 'SHOOT!',
  type: 'basic',
  text: 'Two Rangers must play a game of rock paper scissors.\nDeal 3 damage to the winner.\nDeal 6 damage to the loser.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const i_have_an_idea: BaseEnemyCard = {
  name: 'I HAVE AN IDEA',
  type: 'basic',
  text: 'Each Ranger must draw 3 cards.',
  health: 4,
}

const blunderbuster: BaseEnemyCard = {
  name: 'BLUNDERBUSTER',
  type: 'basic',
  text: 'Each Ranger must roll 2 dice. Deal 3 damage to each Ranger for every [MISS] result that Ranger rolled.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [im_not_reading_that, 1],
    [shoot, 2],
    [i_have_an_idea, 2],
    [blunderbuster, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'squatt',
  }
) as EnemyCard[]