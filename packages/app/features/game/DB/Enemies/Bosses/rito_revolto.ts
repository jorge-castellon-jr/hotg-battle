import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const stumbling_fool: BaseEnemyCard = {
  name: 'STUMBLING FOOL',
  type: 'basic',
  text: 'Draw 2 cards from Rito Revolto’s enemy deck and place them after this card in the combat sequence. Place 1 hit token on each of those cards.',
  health: 6,
}

const hideout_strength: BaseEnemyCard = {
  name: 'HIDEOUT STRENGTH',
  type: 'passive',
  text: 'While this card is in play, each time a Rito Revolto card deals damage, increase that damage by 2.',
  health: 6,
}

const flamethrower_: BaseEnemyCard = {
  name: 'FLAMETHROWER ',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const blade_of_bones: BaseEnemyCard = {
  name: 'BLADE OF BONES',
  type: 'basic',
  text: 'Deal 5 damage.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

const crushing_impact: BaseEnemyCard = {
  name: 'CRUSHING IMPACT',
  type: 'basic',
  text: 'Deal 3 damage to a single Ranger twice.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [stumbling_fool, 1],
    [hideout_strength, 1],
    [flamethrower_, 2],
    [blade_of_bones, 2],
    [crushing_impact, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'rito_revolto',
  }
) as EnemyCard[]