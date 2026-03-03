import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const vengeful: BaseEnemyCard = {
  name: 'VENGEFUL',
  type: 'passive',
  text: 'While this card is in play, each time a Goldar card (including this one) is defeated, deal 3 damage.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const heat_beam_eyes: BaseEnemyCard = {
  name: 'HEAT BEAM EYES',
  type: 'basic',
  text: 'Deal 4 damage to each Ranger.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

const sword_strike: BaseEnemyCard = {
  name: 'SWORD STRIKE',
  type: 'basic',
  text: 'Deal 6 damage to the lead Ranger.',
  health: 5,
  attacks: [{ value: 6, fixed: true }],
}

const grudge_: BaseEnemyCard = {
  name: 'GRUDGE ',
  type: 'basic',
  text: 'Deal 2 damage. Increase this damage by 1 for each hit token on Goldar cards (including this one) in this battle.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const roaring_slash: BaseEnemyCard = {
  name: 'ROARING SLASH',
  type: 'basic',
  text: 'Deal 5 damage to 2 different Rangers.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

export default createDeck(
  [
    [vengeful, 1],
    [heat_beam_eyes, 1],
    [sword_strike, 2],
    [grudge_, 2],
    [roaring_slash, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'goldar',
  }
) as EnemyCard[]