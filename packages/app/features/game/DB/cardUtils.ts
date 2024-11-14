import { BaseRangerCard, RangerCard } from '../Card/CardTypes'

interface CardOptions {
  team: string
  owner: string
  color: string
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
