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

export const removeCardFromDeck = (deck: RangerCard[], cardIndex: number): RangerCard[] => {
  return deck.filter((_, index) => index !== cardIndex)
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
      cards: rangerDecks[position].cards.filter((c) => c !== card), // Remove card from deck
    },
  }
}

// New utility function to update ranger deck
export const updateRangerDeck = (
  rangerDecks: RangerDecks,
  position: 'left' | 'middle' | 'right',
  cardIndex: number
): RangerDecks => {
  return {
    ...rangerDecks,
    [position]: {
      ...rangerDecks[position],
      cards: removeCardFromDeck(rangerDecks[position].cards, cardIndex),
    },
  }
}

export const removeCardFromDiscard = (discard: RangerCard[], cardIndex: number): RangerCard[] => {
  return discard.filter((_, index) => index !== cardIndex)
}

export const addCardToHand = (hand: RangerCard[], card: RangerCard): RangerCard[] => {
  return [...hand, card]
}

export const addCardToDeckTop = (deck: RangerCard[], card: RangerCard): RangerCard[] => {
  return [card, ...deck]
}

export const addCardToDeckBottom = (deck: RangerCard[], card: RangerCard): RangerCard[] => {
  return [...deck, card]
}
export type ReturnLocation = 'hand' | 'top' | 'bottom'

export const returnCardFromDiscard = (
  rangerDecks: RangerDecks,
  position: 'left' | 'middle' | 'right',
  cardIndex: number,
  card: RangerCard,
  returnTo: ReturnLocation,
  hand?: RangerCard[]
): { rangerDecks: RangerDecks; hand?: RangerCard[] } => {
  const updatedRangerDecks = { ...rangerDecks }
  const ranger = updatedRangerDecks[position]

  // Remove card from discard
  const updatedDiscard = removeCardFromDiscard(ranger.discard, cardIndex)

  let updatedDeck = [...ranger.cards]
  let updatedHand = hand ? [...hand] : undefined

  // Add card to specified location
  switch (returnTo) {
    case 'hand':
      if (!updatedHand) throw new Error('Hand array must be provided when returning to hand')
      updatedHand = addCardToHand(updatedHand, card)
      break
    case 'top':
      updatedDeck = addCardToDeckTop(updatedDeck, card)
      break
    case 'bottom':
      updatedDeck = addCardToDeckBottom(updatedDeck, card)
      break
  }

  updatedRangerDecks[position] = {
    ...ranger,
    discard: updatedDiscard,
    cards: updatedDeck,
  }

  return { rangerDecks: updatedRangerDecks, hand: updatedHand }
}
