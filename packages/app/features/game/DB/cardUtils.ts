import { BaseEnemyCard, BaseRangerCard, EnemyCard, EnemyType, RangerCard } from '../Card/CardTypes'
import { RangerColorKey } from '../utils/colors'

// Define the complete map between base types and final types
type CardMap = {
  RangerCard: {
    base: BaseRangerCard
    final: RangerCard
    options: {
      team: string
      owner: string
    } & (
      | { color: 'white' | 'black' | 'yellow'; subColor: RangerColorKey }
      | { color: RangerColorKey }
    )
  }
  EnemyCard: {
    base: BaseEnemyCard
    final: EnemyCard
    options: {
      owner: string
      enemyType: EnemyType
    }
  }
}

type CardMapKey = keyof CardMap
type InferBase<T extends CardMapKey> = CardMap[T]['base']
type InferOptions<T extends CardMapKey> = CardMap[T]['options']
type InferFinal<T extends CardMapKey> = CardMap[T]['final']

export const createDeck = <T extends CardMapKey>(
  deckList: Array<[InferBase<T>, number]>,
  cardOptions: InferOptions<T>
): InferFinal<T>[] => {
  return deckList.flatMap(([card, count]) =>
    Array(count)
      .fill(null)
      .map(() => ({ ...card, ...cardOptions }))
  ) as InferFinal<T>[]
}
