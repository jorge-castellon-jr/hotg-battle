import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/CardTypes'
import EnemyCardDatabase from './Card/data/Enemies/EnemyCardDatabase'
import { RangerDecks } from './GameTypes'
import { getDeck, getEnemyDeck } from './Card/utils/deckUtils'
import { addCardToDiscard, findRangerByCard, removeCardFromHand } from './utils/cardOperations'
import { findEnemyCard, toggleEnemyStatus, updateEnemyStatus } from './utils/enemyOperations'

export enum GameState {
  default,
  draw,
  rangerCardOptions,
  selectedEnemy,
  rangerBattle,
  enemyCardOptions,
}
export enum Turn {
  player,
  enemy,
}

export interface GameStoreState {
  setupCompleted: boolean
  turn: Turn
  gameState: GameState
  showUI: (gameState: GameState) => void
  hideUI: () => void

  nextTurn: () => void

  setupEnemy: (foot: string, monster?: string) => void

  rangerDecks: RangerDecks
  enemyDeck: EnemyCard[] // Enemy card deck

  energy: number
  addEnergy: () => void
  removeEnergy: () => void

  bonusDice: number
  addDice: () => void
  removeDice: () => void

  hand: RangerCard[] // Cards currently in play
  drawCard: (position: 'left' | 'middle' | 'right') => void
  discardCard: () => void

  enemies: {
    top: EnemyCard[] // Enemy team members (Foot Soldiers, Monster)
    bottom: EnemyCard[] // Enemy team members (Foot Soldiers, Monster)
  }
  markEnemyAsActivated: () => void
  markEnemyAsDefeated: () => void

  applyDamage: (value: number) => void

  showCardOptions: (index: number) => void

  playedCard: RangerCard | null
  playedCardIndex: number
  selectedEnemy: EnemyCard | null
  selectedEnemyIndex: number
  selectedEnemyRow: 'top' | 'bottom' | null
  enterBattleMode: () => void
  exitBattleMode: () => void
  setSelectedEnemy: (enemy: EnemyCard | null, index: number, row: 'top' | 'bottom') => void
}

const RESET = {
  gameState: GameState.default,
  playedCard: undefined,
  playedCardIndex: -1,
  selectedEnemy: undefined,
  selectedEnemyIndex: -1,
}

const useGameStore = create<GameStoreState>((set, get) => ({
  setupCompleted: false,
  turn: Turn.player,
  gameState: GameState.default,

  showUI: (gameState) => set({ gameState }),
  hideUI: () => set({ gameState: GameState.default }),

  nextTurn: () =>
    set((state) => ({
      turn: state.turn === Turn.player ? Turn.enemy : Turn.player,
      gameState: GameState.default,
    })),

  setupEnemy: (foot, monster) => {
    set({
      enemies: {
        top: monster ? getEnemyDeck(monster).slice(0, 4) : [],
        bottom: getEnemyDeck(foot).slice(0, 4),
      },
    })
  },

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
  enemyDeck: EnemyCardDatabase,

  energy: 5,
  addEnergy: () => set(({ energy }) => ({ energy: energy + 1 })),
  removeEnergy: () => set(({ energy }) => ({ energy: energy - 1 })),

  bonusDice: 0,
  addDice: () => set(({ bonusDice }) => ({ bonusDice: bonusDice + 1 })),
  removeDice: () => set(({ bonusDice }) => ({ bonusDice: bonusDice - 1 })),

  hand: [],
  drawCard: (position) => {
    //logic for setup
    set((state) => {
      console.log(state.setupCompleted)
      // not setup phase
      if (state.setupCompleted) return state
      // not have 7 cards yet
      if (state.hand.length < 6) return state

      return { ...state, setupCompleted: true }
    })

    // regular draw card logic
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

  enemies: {
    top: [],
    bottom: [],
  },
  markEnemyAsActivated: () =>
    set(({ enemies, selectedEnemyIndex, selectedEnemyRow }) => ({
      enemies: toggleEnemyStatus(enemies, selectedEnemyIndex, selectedEnemyRow!, 'activated'),
    })),

  markEnemyAsDefeated: () =>
    set(({ enemies, selectedEnemyIndex, selectedEnemyRow }) => ({
      enemies: toggleEnemyStatus(enemies, selectedEnemyIndex, selectedEnemyRow!, 'defeated'),
    })),

  applyDamage: (value) => {
    // do something
    console.log(value)
  },

  showCardOptions: (index) =>
    set(({ hand }) => ({
      gameState: GameState.rangerCardOptions,
      playedCard: hand[index],
      playedCardIndex: index,
    })),

  // battle
  playedCardIndex: -1,
  playedCard: null,
  selectedEnemy: null,
  selectedEnemyIndex: -1,
  selectedEnemyRow: null,
  enterBattleMode: () =>
    set({
      gameState: GameState.selectedEnemy,
    }),
  exitBattleMode: () => set(RESET),
  setSelectedEnemy: (enemy, index, row) =>
    set({ selectedEnemy: enemy, selectedEnemyIndex: index, selectedEnemyRow: row }),
}))

export default useGameStore
