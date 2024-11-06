import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/CardTypes'
import EnemyCardDatabase from './Card/data/Enemies/EnemyCardDatabase'
import { RangerDecks } from './GameTypes'
import { getDeck, getEnemyDeck } from './Card/utils/deckUtils'
import { addCardToDiscard, findRangerByCard, removeCardFromHand } from './utils/cardOperations'

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
  turn: 'playerSetup' | 'enemySetup' | 'rangers' | 'enemies'
  phase: 'action' | 'battle'
  selectRanger: boolean
  canDraw: boolean
  setCanDraw: (canIt: boolean) => void
  setupEnemy: (foot: string, monster?: string) => void

  drawCard: (position: 'left' | 'middle' | 'right') => void
  discardCard: () => void
  setEnergy: (energy: number) => void
  nextTurn: () => void
  setBonusDice: (dice: number) => void
  applyDamage: (value: number) => void
  promptRangerCardPlay: () => void
  // New state management functions
  setPhase: (phase: 'action' | 'battle') => void

  // battle
  showCardOptions: boolean
  battleMode: boolean
  playedCard: RangerCard | null
  playedCardIndex: number
  selectedEnemy: EnemyCard | null
  selectedEnemyIndex: number

  // Add these new functions
  setShowCardOptions: (index: number) => void
  enterBattleMode: () => void
  exitBattleMode: () => void
  setSelectedEnemy: (enemy: EnemyCard | null, index: number) => void
}

const RESET = {
  showCardOptions: false,
  battleMode: false,
  playedCard: undefined,
  playedCardIndex: -1,
  selectedEnemy: undefined,
  selectedEnemyIndex: -1,
}

const useGameStore = create<GameState>((set, get) => ({
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
      cards: getDeck('Blue'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
    right: {
      name: 'Green Ranger',
      abilities: [{ name: 'Red Power' }],
      color: 'green',
      cards: getDeck('Green'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
  }, // Populate with Ranger-specific cards
  hand: [],
  enemies: {
    top: [],
    bottom: [],
  },
  enemyDeck: EnemyCardDatabase,
  energy: 5,
  bonusDice: 0,
  turn: 'playerSetup',
  phase: 'action',
  selectRanger: false,

  setupEnemy: (foot, monster) => {
    set({
      enemies: {
        top: monster ? getEnemyDeck(monster).slice(0, 4) : [],
        bottom: getEnemyDeck(foot).slice(0, 4),
      },
    })
  },

  drawCard: (position) => {
    set((state) => {
      // not setup phase
      if (state.turn !== 'playerSetup') return state
      // not have 7 cards yet
      if (state.hand.length < 6) return state

      return { ...state, canDraw: false, turn: 'enemySetup' }
    })
    set((state) => {
      const card = state.rangerDecks[position].cards.pop()
      return card ? { hand: [...state.hand, card] } : state
    })
  },
  discardCard() {
    const state = get()

    const card = state.playedCard
    const cardIndex = state.playedCardIndex

    if (!card) return

    const rangerInfo = findRangerByCard(card, state.rangerDecks)
    if (!rangerInfo) return false

    set((state) => ({
      ...RESET,
      hand: removeCardFromHand(state.hand, cardIndex),
      rangerDecks: addCardToDiscard(state.rangerDecks, rangerInfo.position, card),
    }))
  },
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
  showCardOptions: false,
  battleMode: false,
  playedCardIndex: -1,
  playedCard: null,
  selectedEnemy: null,
  selectedEnemyIndex: -1,

  setShowCardOptions: (index) =>
    set(({ hand }) => ({
      canDraw: false,
      showCardOptions: true,
      playedCard: hand[index],
      playedCardIndex: index,
    })),

  enterBattleMode: () =>
    set({
      canDraw: false,
      showCardOptions: false,
      battleMode: true,
    }),

  exitBattleMode: () => set(RESET),

  setSelectedEnemy: (enemy, index) => set({ selectedEnemy: enemy, selectedEnemyIndex: index }),
  canDraw: true,
  setCanDraw: (canIt) => set({ canDraw: canIt }),
}))

export default useGameStore
