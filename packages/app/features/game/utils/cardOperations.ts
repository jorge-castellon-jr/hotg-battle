import { RangerCard } from '../Card/CardTypes'
import { RangerDecks } from '../GameTypes'

export const findRangerByCard = (
  card: RangerCard,
  rangerDecks: RangerDecks
): { position: 'left' | 'middle' | 'right'; ranger: string } | null => {
  for (const [position, ranger] of Object.entries(rangerDecks)) {
    if (ranger.name === card.owner || ranger.color === card.color) {
      return {
        position: position as 'left' | 'middle' | 'right',
        ranger: ranger.name,
      }
    }
  }
  return null
}

export const removeCardFromHand = (hand: RangerCard[], cardIndex: number): RangerCard[] => {
  return hand.filter((_, index) => index !== cardIndex)
}

export const addCardToDiscard = (
  rangerDecks: RangerDecks,
  position: 'left' | 'middle' | 'right',
  card: RangerCard
): RangerDecks => {
  return {
    ...rangerDecks,
    [position]: {
      ...rangerDecks[position],
      discard: [...rangerDecks[position].discard, card],
    },
  }
}
