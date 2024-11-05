import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/CardTypes'
import cardDatabase from './Card/data/cardDatabase'
import EnemyCardDatabase from './Card/data/Enemies/EnemyCardDatabase'
import { RangerDecks } from './GameTypes'
import { SharedValue, useSharedValue } from 'react-native-reanimated'
import { getDeck } from './Card/utils/deckfutils'

export interface GameState {
  rangerDecks: RangerDecks
  hand: RangerCard[] // Cards currently in play
  enemies: {
    top: EnemyCard[] // Enemy team members (Foot Soldiers, Monster)
    bottom: EnemyCard[] // Enemy team members (Foot Soldiers, Monster)
  }
  enemyDeck: EnemyCard[] // Enemy card deck
  energy: number
  bonusDice: number
  turn: 'rangers' | 'enemies'
  phase: 'action' | 'battle'
  selectRanger: boolean
  canDraw: boolean
  setCanDraw: (canIt: boolean) => void

  drawCard: (position: 'left' | 'middle' | 'right') => void
  setEnergy: (energy: number) => void
  nextTurn: () => void
  setBonusDice: (dice: number) => void
  applyDamage: (value: number) => void
  promptRangerCardPlay: () => void
  // New state management functions
  setPhase: (phase: 'action' | 'battle') => void

  // battle
  battleMode: boolean
  playedCard: RangerCard | null
  playedCardIndex: number
  selectedEnemy: EnemyCard | null
  selectedEnemyIndex: number

  // Add these new functions
  enterBattleMode: (index: number) => void
  exitBattleMode: () => void
  setSelectedEnemy: (enemy: EnemyCard | null, index: number) => void
}

const useGameStore = create<GameState>((set) => ({
  rangerDecks: {
    left: {
      name: 'Red Ranger',
      abilities: [{ name: 'Red Power' }],
      color: 'red',
      cards: getDeck('Red'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
    middle: {
      name: 'Blue Ranger',
      abilities: [{ name: 'Red Power' }],
      color: 'blue',
      cards: getDeck('Blue Ranger'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
    right: {
      name: 'Green Ranger',
      abilities: [{ name: 'Red Power' }],
      color: 'green',
      cards: getDeck('Green Ranger'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
  }, // Populate with Ranger-specific cards
  hand: [],
  enemies: {
    top: [...EnemyCardDatabase.filter((card) => card.enemyType === 'monster').slice(0, 4)],
    bottom: [...EnemyCardDatabase.filter((card) => card.enemyType === 'foot').slice(0, 3)],
  },
  enemyDeck: EnemyCardDatabase,
  energy: 5,
  bonusDice: 0,
  turn: 'rangers',
  phase: 'action',
  selectRanger: false,

  drawCard: (position) =>
    set((state) => {
      const card = state.rangerDecks[position].cards.pop()
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
  setPhase: (phase) => set({ phase }),

  openSelectRanger: () => set({ selectRanger: true }),

  // battle
  battleMode: false,
  playedCardIndex: -1,
  playedCard: null,
  selectedEnemy: null,
  selectedEnemyIndex: -1,

  enterBattleMode: (index) =>
    set(({ hand }) => ({
      battleMode: true,
      playedCard: hand[index],
      playedCardIndex: index,
    })),

  exitBattleMode: () =>
    set({
      battleMode: false,
      playedCard: undefined,
      playedCardIndex: -1,
      selectedEnemy: undefined,
      selectedEnemyIndex: -1,
    }),

  setSelectedEnemy: (enemy, index) => set({ selectedEnemy: enemy, selectedEnemyIndex: index }),
  canDraw: false,
  setCanDraw: (canIt) => set({ canDraw: canIt }),
}))

export default useGameStore
