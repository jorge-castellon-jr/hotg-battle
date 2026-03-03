import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const phantom_beast_stance: BaseEnemyCard = {
  name: 'PHANTOM BEAST STANCE',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger plays a card that is not the first card played that turn, deal 3 damage to that Ranger.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const ferocious_roar: BaseEnemyCard = {
  name: 'FEROCIOUS ROAR',
  type: 'basic',
  text: 'Skip the next 2 Ranger turns in this battle.',
  health: 6,
}

const rinzin_technique: BaseEnemyCard = {
  name: 'RINZIN TECHNIQUE',
  type: 'basic',
  text: 'Once this card has resolved, drain 1 [ENERGY] at the end of each enemy turn in this battle.',
  health: 5,
}

const beast_king_fang: BaseEnemyCard = {
  name: 'BEAST KING FANG',
  type: 'basic',
  text: 'Once this card has resolved, deal 4 damage to the lead Ranger at the end of each enemy turn in this battle.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

const beast_king_claws: BaseEnemyCard = {
  name: 'BEAST KING CLAWS',
  type: 'basic',
  text: 'Once this card has resolved, deal 2 damage to each Ranger at the end of each enemy turn in this battle.',
  health: 5,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [phantom_beast_stance, 1],
    [ferocious_roar, 1],
    [rinzin_technique, 2],
    [beast_king_fang, 2],
    [beast_king_claws, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'dai_shi',
  }
) as EnemyCard[]