import { BaseEnemyCard, BaseRangerCard, EnemyCard, EnemyType, RangerCard } from '../Card/CardTypes'
import { RangerColorKey } from '../utils/colors'

type RangerCardOptions = {
  owner: string
  enemyType: EnemyType
}
type EnemyCardOptions = {
  team: string
  owner: string
} & ({ color: 'white'|'black'|'yellow'; subColor: RangerColorKey } | { color: RangerColorKey })

type CardOptions = RangerCardOptions | EnemyCardOptions

export const createDeck = (
  deckList: Array<[BaseRangerCard | BaseEnemyCard, number]>,
  cardOptions: CardOptions
): RangerCard[] | EnemyCard[] => {
  return deckList.flatMap(([card, count]) =>
    Array(count)
      .fill(null)
      .map(() => ({ ...card, ...cardOptions }))
  )
}
