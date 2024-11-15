import { create } from 'zustand'
import type { Attack } from '../Card/CardTypes'

interface BattleState {
  currentAttackIndex: number
  currentDiceCount: number
  isRolling: boolean
  rollComplete: boolean
  results: number[][]
  attacks: Attack[]

  // Computed values
  hasMoreAttacks: boolean
  totalDamage: number
  totalDamageAllAttacks: number

  // Actions
  initializeBattle: (attacks: Attack[]) => void
  addDice: () => void
  removeDice: () => void
  startRoll: () => void
  completeRoll: (results: number[]) => void
  nextAttack: () => void
  reset: () => void
}

export const useBattleStore = create<BattleState>()((set, get) => ({
  currentAttackIndex: 0,
  currentDiceCount: 0,
  isRolling: false,
  rollComplete: false,
  results: [],
  attacks: [],

  // Computed values
  get hasMoreAttacks() {
    return get().currentAttackIndex < (get().attacks.length - 1)
  },
  get totalDamage() {
    const currentResults = get().results[get().currentAttackIndex] || []
    return currentResults.reduce((sum, val) => sum + val, 0)
  },
  get totalDamageAllAttacks() {
    return get().results.flat().reduce((sum, val) => sum + val, 0)
  },

  // Actions
  initializeBattle: (attacks) => set(() => ({
    attacks,
    currentAttackIndex: 0,
    currentDiceCount: Math.max(1, attacks[0]?.value || 0),
    isRolling: false,
    rollComplete: false,
    results: []
  })),

  addDice: () => set((state) => ({
    currentDiceCount: state.currentDiceCount + 1
  })),

  removeDice: () => set((state) => ({
    currentDiceCount: Math.max(1, state.currentDiceCount - 1)
  })),

  startRoll: () => set({
    isRolling: true,
    rollComplete: false
  }),

  completeRoll: (results) => set((state) => ({
    isRolling: false,
    rollComplete: true,
    results: [
      ...state.results.slice(0, state.currentAttackIndex),
      results,
      ...state.results.slice(state.currentAttackIndex + 1)
    ]
  })),

  nextAttack: () => set((state) => {
    const nextIndex = state.currentAttackIndex + 1
    if (nextIndex >= state.attacks.length) return state

    return {
      currentAttackIndex: nextIndex,
      currentDiceCount: Math.max(1, state.attacks[nextIndex]?.value || 0),
      isRolling: false,
      rollComplete: false
    }
  }),

  reset: () => set({
    currentAttackIndex: 0,
    currentDiceCount: 0,
    isRolling: false,
    rollComplete: false,
    results: [],
    attacks: []
  })
}))
