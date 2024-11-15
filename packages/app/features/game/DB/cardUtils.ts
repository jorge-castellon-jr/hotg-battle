import { BaseRangerCard, RangerCard } from '../Card/CardTypes'
import { RangerColorKey } from '../utils/colors'

interface CardOptions {
  team: string
  owner: string
  color: RangerColorKey
  subColor: RangerColorKey
}

export const createDeck = (
  deckList: Array<[BaseRangerCard, number]>,
  cardOptions: CardOptions
): RangerCard[] => {
  return deckList.flatMap(([card, count]) =>
    Array(count)
      .fill(null)
      .map(() => ({ ...card, ...cardOptions }) as RangerCard)
  )
}
