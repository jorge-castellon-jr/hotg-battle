import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/CardTypes'
import EnemyCardDatabase from './DB/Enemies/EnemyCardDatabase'
import { Ranger, RangerDecks } from './GameTypes'
import {
  getEnemyDeck,
  moveCardToBottom,
  moveCardToTop,
  resetAllRangerDecks,
} from './Card/deckUtils'
import {
  addCardToDiscard,
  findRangerByCard,
  moveCardFromHandToBottom,
  moveCardFromHandToTop,
  removeCardFromDeck,
  removeCardFromHand,
  returnCardFromDiscard,
  ReturnLocation,
} from './utils/cardOperations'
import { toggleEnemyStatus, updateEnemyDamage } from './Enemy/enemyOperations'
import { moveEnemy } from './Battle/enemyPositionManager'
import { createJSONStorage, persist } from 'zustand/middleware'
import { RangerPosition } from '../setup/setupTypes'
import rangerDatabase from './DB/rangerDatabase'
import safeStorage from './Storage/persistentStorage'

export enum GameState {
  default,
  draw,
  rangerInfo,
  rangerCardOptions,
  rangerDeckCardOptions,
  selectedEnemy,
  rangerBattle,
  enemyBattle,
  enemyCardOptions,
}
export enum Turn {
  player,
  enemy,
}

export interface GameStoreState {
  _hasHydrated: boolean
  setupCompleted: boolean
  enemySetupCompleted: boolean
  turn: Turn
  gameState: GameState

  rangerDecks: RangerDecks
  selectedPosition: 'left' | 'middle' | 'right' | null

  enemyDeck: EnemyCard[] // Enemy card deck

  energy: number

  bonusDice: number

  hand: RangerCard[] // Cards currently in play

  enemies: {
    top: EnemyCard[] // Enemy team members (Foot Soldiers, Monster)
    bottom: EnemyCard[] // Enemy team members (Foot Soldiers, Monster)
  }

  playedCard: RangerCard | null
  playedCardIndex: number

  selectedEnemy: EnemyCard | null
  selectedEnemyIndex: number
  selectedEnemyRow: 'top' | 'bottom' | null

  // Add metadata for storage
  lastSaved?: number
  gameVersion: string
}

export interface GameStoreActions {
  setHasHydrated: (state: boolean) => void
  resetGame: () => void
  resetRangers: () => void
  showUI: (gameState: GameState) => void
  hideUI: () => void

  nextTurn: () => void
  setRanger: (position: RangerPosition, rangerId: string, ability: string) => void

  setupEnemy: (foot: string, monster?: string) => void

  selectedRanger: (position: 'left' | 'middle' | 'right') => Ranger
  setSelectedPosition: (position: 'left' | 'middle' | 'right') => void
  showRangerInfo: (position: 'left' | 'middle' | 'right') => void
  toggleEnergy: (position: 'left' | 'middle' | 'right') => void
  toggleAbility: (position: 'left' | 'middle' | 'right') => void
  openDrawOptions: () => void

  addEnergy: () => void
  removeEnergy: () => void

  addDice: () => void
  removeDice: () => void

  drawCard: () => void
  moveCardToTop: () => void
  moveCardToBottom: () => void
  moveHandCardToTop: () => void
  moveHandCardToBottom: () => void
  discardCard: () => void
  discardDeckCard: () => void
  exitDrawOptions: () => void

  moveEnemyPosition: (direction: 'left' | 'right') => void
  markEnemyAsActivated: () => void
  markEnemyAsDefeated: () => void

  showCardOptions: (index: number) => void
  showDeckCardOptions: (position: 'left' | 'middle' | 'right', index: number) => void

  setPlayedCard: (card: RangerCard) => void
  setPlayedCardIndex: (index: number) => void

  returnCardFromDiscard: (location: ReturnLocation) => void

  enterBattleMode: () => void
  exitBattleMode: () => void
  setSelectedEnemy: (enemy: EnemyCard | null, index: number, row: 'top' | 'bottom') => void
  updateEnemyDamage: (index: number, row: 'top' | 'bottom', newHealth: number) => void
  enterEnemyBattle: () => void
}

const RESET = {
  gameState: GameState.default,
  playedCard: undefined,
  playedCardIndex: -1,
  selectedEnemy: undefined,
  selectedEnemyIndex: -1,
}

// Initial state factory to ensure fresh references
const createInitialState = (): Omit<GameStoreState, 'rangerDecks'> => ({
  _hasHydrated: false,
  setupCompleted: false,
  enemySetupCompleted: false,
  turn: Turn.player,
  gameState: GameState.default,
  hand: [],
  enemies: {
    top: [],
    bottom: [],
  },
  enemyDeck: EnemyCardDatabase,
  energy: 2,
  bonusDice: 0,
  selectedPosition: null,
  playedCardIndex: -1,
  playedCard: null,
  selectedEnemy: null,
  selectedEnemyIndex: -1,
  selectedEnemyRow: null,
  gameVersion: '1.0.0',
})

const useGameStore = create<GameStoreState & GameStoreActions>()(
  persist(
    (set, get) => ({
      ...createInitialState(),

      rangerDecks: {
        left: null,
        middle: null,
        right: null,
      }, // Populate with Ranger-specific cards

      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        })
      },
      resetGame: () => {
        const currentRangers = get().rangerDecks
        set({
          ...createInitialState(),
          _hasHydrated: true,
          rangerDecks: resetAllRangerDecks(currentRangers),
        })
      },
      resetRangers: () => {
        set({
          rangerDecks: {
            left: null,
            middle: null,
            right: null,
          },
        })
      },

      showUI: (gameState) => set({ gameState }),
      hideUI: () => set({ gameState: GameState.default }),

      setRanger: (position, rangerId, ability) =>
        set(({ rangerDecks }) => ({
          rangerDecks: {
            ...rangerDecks,
            [position]: rangerDatabase.find(
              (ranger) => ranger.id === rangerId && ranger.ability.name === ability
            ),
          },
        })),
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
          enemySetupCompleted: true,
        })
      },

      selectedRanger: (position) => {
        return get().rangerDecks[position]
      },
      toggleEnergy: (position) =>
        set((state) => {
          const updatedRangerDecks = { ...state.rangerDecks }
          updatedRangerDecks[position] = {
            ...updatedRangerDecks[position],
            energyUsed: !updatedRangerDecks[position].energyUsed,
          }
          return { rangerDecks: updatedRangerDecks }
        }),
      toggleAbility: (position) =>
        set((state) => {
          const updatedRangerDecks = { ...state.rangerDecks }
          updatedRangerDecks[position] = {
            ...updatedRangerDecks[position],
            abilityUsed: !updatedRangerDecks[position].abilityUsed,
          }
          return { rangerDecks: updatedRangerDecks }
        }),
      openDrawOptions: () =>
        set((state) => {
          const cards = state.selectedRanger(state.selectedPosition ?? 'left').cards
          const index = cards.length - 1
          return {
            playedCard: cards[index],
            playedCardIndex: index,
          }
        }),

      addEnergy: () => set(({ energy }) => ({ energy: energy + 1 })),
      removeEnergy: () => set(({ energy }) => ({ energy: energy - 1 })),

      addDice: () => set(({ bonusDice }) => ({ bonusDice: bonusDice + 1 })),
      removeDice: () => set(({ bonusDice }) => ({ bonusDice: bonusDice - 1 })),

      drawCard: () => {
        const position = get().selectedPosition!
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
          const card = state.selectedRanger(position).cards.pop()
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
      moveHandCardToTop: () => {
        const state = get()
        const card = state.playedCard
        const cardIndex = state.playedCardIndex

        if (!card) return

        const rangerInfo = findRangerByCard(card, state.rangerDecks)
        if (!rangerInfo) return

        const { rangerDecks, hand } = moveCardFromHandToTop(
          state.rangerDecks,
          rangerInfo.position,
          card,
          state.hand,
          cardIndex
        )

        set({
          ...RESET,
          rangerDecks,
          hand,
          playedCard: null,
          playedCardIndex: -1,
        })
      },

      moveHandCardToBottom: () => {
        const state = get()
        const card = state.playedCard
        const cardIndex = state.playedCardIndex

        if (!card) return

        const rangerInfo = findRangerByCard(card, state.rangerDecks)
        if (!rangerInfo) return

        const { rangerDecks, hand } = moveCardFromHandToBottom(
          state.rangerDecks,
          rangerInfo.position,
          card,
          state.hand,
          cardIndex
        )

        set({
          ...RESET,
          rangerDecks,
          hand,
          playedCard: null,
          playedCardIndex: -1,
        })
      },
      moveCardToTop: () => {
        const state = get()
        const position = state.selectedPosition!
        const cardIndex = state.playedCardIndex

        if (!position || cardIndex < 0) return

        const ranger = state.rangerDecks[position]
        if (!ranger) return

        console.log(ranger, position, cardIndex)

        set({
          ...RESET,
          rangerDecks: {
            ...state.rangerDecks,
            [position]: {
              ...ranger,
              cards: moveCardToTop(ranger.cards, cardIndex),
            },
          },
          gameState: GameState.rangerInfo,
          playedCard: null,
          playedCardIndex: -1,
        })
      },
      moveCardToBottom: () => {
        const state = get()
        const position = state.selectedPosition!
        const cardIndex = state.playedCardIndex

        if (!position || cardIndex < 0) return

        const ranger = state.rangerDecks[position]
        if (!ranger) return

        console.log(ranger, position, cardIndex)

        set({
          ...RESET,
          rangerDecks: {
            ...state.rangerDecks,
            [position]: {
              ...ranger,
              cards: moveCardToBottom(ranger.cards, cardIndex),
            },
          },
          gameState: GameState.rangerInfo,
          playedCard: null,
          playedCardIndex: -1,
        })
      },
      discardDeckCard: () => {
        const state = get()
        const card = state.playedCard
        const cardIndex = state.playedCardIndex

        if (!card) return

        const rangerInfo = findRangerByCard(card, state.rangerDecks)
        if (!rangerInfo) return false

        set((state) => ({
          ...RESET,
          gameState: GameState.rangerInfo,
          rangerDecks: {
            ...state.rangerDecks,
            [rangerInfo.position]: {
              ...state.rangerDecks[rangerInfo.position],
              cards: removeCardFromDeck(state.rangerDecks[rangerInfo.position].cards, cardIndex),
              discard: [...state.rangerDecks[rangerInfo.position].discard, card],
            },
          },
        }))
      },

      returnCardFromDiscard: (location) => {
        const state = get()
        const card = state.playedCard
        const position = state.selectedPosition!
        const index = state.playedCardIndex

        if (!card) return

        const { rangerDecks, hand } = returnCardFromDiscard(
          state.rangerDecks,
          position,
          index,
          card,
          location,
          location === 'hand' ? state.hand : undefined
        )

        set({
          ...RESET,
          gameState: GameState.rangerInfo,
          rangerDecks,
          hand: hand || state.hand,
          playedCard: null,
          playedCardIndex: -1,
        })
      },
      exitDrawOptions: () => set({...RESET, gameState: GameState.rangerInfo}),

      moveEnemyPosition: (direction) => {
        const state = get()
        const enemies = state.enemies
        const position = { index: state.selectedEnemyIndex, row: state.selectedEnemyRow! }
        const newEnemies = moveEnemy(enemies, position, direction)
        if (newEnemies) {
          set({
            enemies: newEnemies,
            selectedEnemyIndex: direction === 'left' ? position.index - 1 : position.index + 1,
          })
        }
      },
      markEnemyAsActivated: () =>
        set(({ enemies, selectedEnemyIndex, selectedEnemyRow }) => ({
          enemies: toggleEnemyStatus(enemies, selectedEnemyIndex, selectedEnemyRow!, 'activated'),
          selectedEnemy: null,
          selectedEnemyIndex: -1,
          selectedEnemyRow: null,
          gameState: GameState.default,
        })),

      markEnemyAsDefeated: () =>
        set(({ enemies, selectedEnemyIndex, selectedEnemyRow }) => ({
          gameState: GameState.default,
          enemies: toggleEnemyStatus(enemies, selectedEnemyIndex, selectedEnemyRow!, 'defeated'),
        })),

      setSelectedPosition: (position) => set({ selectedPosition: position }),
      showRangerInfo: (position) =>
        set({ gameState: GameState.rangerInfo, selectedPosition: position }),

      showCardOptions: (index) =>
        set(({ hand }) => ({
          gameState: GameState.rangerCardOptions,
          playedCard: hand[index],
          playedCardIndex: index,
        })),
      showDeckCardOptions: (index) =>
        set(({ selectedRanger, selectedPosition }) => ({
          gameState: GameState.rangerDeckCardOptions,
          playedCard: selectedRanger(selectedPosition ?? 'left').cards[index],
        })),

      // battle
      setPlayedCard: (card) => set({ playedCard: card }),
      setPlayedCardIndex: (index) => set({ playedCardIndex: index }),
      enterBattleMode: () =>
        set({
          gameState: GameState.rangerBattle,
        }),
      exitBattleMode: () => set(RESET),
      setSelectedEnemy: (enemy, index, row) =>
        set({ selectedEnemy: enemy, selectedEnemyIndex: index, selectedEnemyRow: row }),
      updateEnemyDamage: (index, row, newDamage) =>
        set((state) => {
          const updatedEnemies = updateEnemyDamage(state.enemies, index, row, newDamage)

          // Also update the selected enemy if it's the one being modified
          const updatedSelectedEnemy =
            state.selectedEnemy &&
              state.selectedEnemyIndex === index &&
              state.selectedEnemyRow === row
              ? {
                ...state.selectedEnemy,
                currentDamage: newDamage,
                defeated: newDamage >= state.selectedEnemy.health,
              }
              : state.selectedEnemy

          return {
            ...state,
            enemies: updatedEnemies,
            selectedEnemy: updatedSelectedEnemy,
          }
        }),
      enterEnemyBattle: () =>
        set({
          gameState: GameState.enemyBattle,
        }),
    }),
    {
      name: 'hotg-game-storage',
      storage: {
        getItem: async (name) => {
          const value = safeStorage.getItem(name)
          return value ? JSON.parse(value) : null
        },
        setItem: async (name, value) => {
          safeStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: async (name) => {
          safeStorage.removeItem(name)
        },
      },
      partialize: (state) => ({
        ...state,
        // Exclude any properties you don't want to persist
        _hasHydrated: undefined,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return
        state.setHasHydrated(true)
      },
    }
  )
)

export default useGameStore
