import { RangerCard } from '../Card/CardTypes'

export const createDeck = (deckList: Array<[RangerCard, number]>): RangerCard[] => {
  return deckList.flatMap(([card, count]) =>
    Array(count)
      .fill(null)
      .map(() => ({ ...card }))
  )
}
