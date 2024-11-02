import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/types'
import cardDatabase from './Card/data/cardDatabase'

interface GameState {
  rangerDecks: {
    red: RangerCard[]
    blue: RangerCard[]
    green: RangerCard[]
  } // Individual decks for each Ranger
  hand: RangerCard[] // Cards currently in play
  enemies: string[] // Enemy team members (Foot Soldiers, Monster)
  enemyDeck: EnemyCard[] // Enemy card deck
  energy: number
  bonusDice: number
  turn: 'rangers' | 'enemies'

  drawCard: (ranger: 'red' | 'blue' | 'green') => void
  setEnergy: (energy: number) => void
  nextTurn: () => void
  setBonusDice: (dice: number) => void
  applyDamage: (value: number) => void
  promptRangerCardPlay: () => void
}

const getDeck = (owner: string) => {
  return cardDatabase.filter((card) => card.owner === owner)
}

const useGameStore = create<GameState>((set) => ({
  rangerDecks: {
    red: getDeck('Red Ranger'),
    blue: getDeck('Blue Ranger'),
    green: getDeck('Green Ranger'),
  }, // Populate with Ranger-specific cards
  hand: [],
  enemies: ['Foot Soldier 1', 'Foot Soldier 2', 'Monster'], // Example setup
  enemyDeck: [], // Populate with enemy card data
  energy: 5,
  bonusDice: 0,
  turn: 'rangers',

  drawCard: (ranger) =>
    set((state) => {
      const card = state.rangerDecks[ranger].pop()
      return card ? { hand: [...state.hand, card] } : state
    }),
  setEnergy: (energy) => set({ energy }),
  setBonusDice: (dice) => set({ bonusDice: dice }),
  nextTurn: () =>
    set((state) => ({
      turn: state.turn === 'rangers' ? 'enemies' : 'rangers',
    })),
  applyDamage: (value) => {
    // do something
    console.log(value)
  },

  promptRangerCardPlay: () => {
    // Implement UI logic for allowing a Ranger to play a card
    // This might involve displaying a modal with options for the player
  },
}))

export default useGameStore
