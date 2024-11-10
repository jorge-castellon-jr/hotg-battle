import { EnemyCard, RangerCard } from './CardTypes'
import cardDatabase from '../DB/cardDatabase'
import EneyCardDatabase from '../DB/Enemies/EnemyCardDatabase'
import { RangerDecks } from '../GameTypes'

/**
 * Fisher-Yates shuffle algorithm
 * @param array The array to shuffle
 * @returns A new shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      // Swap elements
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Gets a shuffled deck for the specified owner
 * @param owner The owner of the cards to filter
 * @param cardDatabase The database of all cards
 * @returns A shuffled array of cards for the owner
 */
export const getDeck = (owner: string): RangerCard[] => {
  const ownerCards = cardDatabase.filter((card) => card.owner === owner)
  return shuffleArray(ownerCards)
}
export const getEnemyDeck = (owner: string): EnemyCard[] => {
  const ownerCards = EneyCardDatabase.filter((card) => card.owner === owner)
  return shuffleArray(ownerCards)
}

/**
 * Deals a specified number of cards from a deck
 * @param deck The deck to deal from
 * @param numCards Number of cards to deal
 * @returns An object containing the dealt cards and remaining deck
 */
export const dealCards = (deck: RangerCard[], numCards: number) => {
  const dealtCards = deck.slice(0, numCards)
  const remainingDeck = deck.slice(numCards)
  return { dealtCards, remainingDeck }
}

// Optional: Advanced deck manipulation utilities
export const deckUtils = {
  /**
   * Puts a card on top of the deck
   */
  putOnTop: (deck: RangerCard[], card: RangerCard) => {
    return [card, ...deck]
  },

  /**
   * Puts a card on the bottom of the deck
   */
  putOnBottom: (deck: RangerCard[], card: RangerCard) => {
    return [...deck, card]
  },

  /**
   * Shuffles a card into a random position in the deck
   */
  shuffleInto: (deck: RangerCard[], card: RangerCard) => {
    const position = Math.floor(Math.random() * (deck.length + 1))
    const newDeck = [...deck]
    newDeck.splice(position, 0, card)
    return newDeck
  },

  /**
   * Draws a specific number of cards from the top of the deck
   */
  draw: (deck: RangerCard[], count: number = 1) => {
    return dealCards(deck, count)
  },
}

/**
 * Moves a card from any position in the deck to the bottom
 */
export const moveCardToBottom = (deck: RangerCard[], cardIndex: number): RangerCard[] => {
  if (cardIndex < 0 || cardIndex >= deck.length) {
    return deck
  }

  const newDeck = [...deck]
  const [card] = newDeck.splice(cardIndex, 1)

  return [card, ...newDeck]
}

/**
 * Reset a ranger's deck and discard pile
 */
export const resetRangerDeck = (rangerId: string) => {
  return {
    cards: getDeck(rangerId),
    discard: [],
    energyUsed: false,
    abilityUsed: false,
  }
}

/**
 * Reset all ranger decks in the game
 */
export const resetAllRangerDecks = (rangerDecks: RangerDecks) => {
  const updatedDecks = { ...rangerDecks }

  // Reset each ranger's deck if they exist
  Object.entries(updatedDecks).forEach(([position, ranger]) => {
    if (ranger && ranger.id) {
      updatedDecks[position] = {
        ...ranger,
        ...resetRangerDeck(ranger.id),
      }
    }
  })

  return updatedDecks
}
