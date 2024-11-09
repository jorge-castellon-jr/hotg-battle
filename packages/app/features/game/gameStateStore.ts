import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/CardTypes'
import EnemyCardDatabase from './DB/Enemies/EnemyCardDatabase'
import { RangerDecks } from './GameTypes'
import { getDeck, getEnemyDeck } from './Card/deckUtils'
import {
  addCardToDiscard,
  findRangerByCard,
  removeCardFromDeck,
  removeCardFromHand,
  returnCardFromDiscard,
  ReturnLocation,
} from './utils/cardOperations'
import { toggleEnemyStatus, updateEnemyDamage } from './Enemy/enemyOperations'
import { moveEnemy } from './Battle/enemyPositionManager'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createVersionedStorage } from './Storage/persistentStorage'

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
  showUI: (gameState: GameState) => void
  hideUI: () => void

  nextTurn: () => void

  setupEnemy: (foot: string, monster?: string) => void

  selectedRanger: (position: 'left' | 'middle' | 'right') => RangerDecks['left']
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
  discardCard: () => void
  discardDeckCard: () => void

  moveEnemyPosition: (direction: 'left' | 'right') => void
  markEnemyAsActivated: () => void
  markEnemyAsDefeated: () => void

  applyDamage: (value: number) => void

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
const createInitialState = (): GameStoreState => ({
  _hasHydrated: false,
  setupCompleted: false,
  enemySetupCompleted: false,
  turn: Turn.player,
  gameState: GameState.default,
  rangerDecks: {
    left: {
      name: 'Jason Lee Scott',
      ability: {
        name: 'Leadership',
        text: 'Once per battle, a Ranger of your choice may reroll any number of dice during an attack.',
      },
      color: 'red',
      team: 'Mighty Morphin',
      cards: getDeck('Red'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
    middle: {
      name: 'Billy Cranston',
      ability: {
        name: 'Strategize',
        text: 'Once per battle, a Ranger of your choice may draw 1 card and then place 1 card from their hand back on top of their deck.',
      },
      color: 'blue',
      team: 'Mighty Morphin',
      cards: getDeck('Blue'),
      energyUsed: false,
      abilityUsed: false,
      discard: [],
    },
    right: {
      name: 'Tommy Oliver',
      ability: {
        name: 'Loner',
        text: 'If you are the only player with a Ranger in your location, you may add 1 die to each of your attacks.',
      },
      color: 'green',
      team: 'Mighty Morphin',
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

      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        })
      },
      resetGame: () => {
        set({ ...createInitialState() })
      },

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
          rangerDecks,
          hand: hand || state.hand,
          playedCard: null,
          playedCardIndex: -1,
        })
      },

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
          gameState: GameState.default,
          enemies: toggleEnemyStatus(enemies, selectedEnemyIndex, selectedEnemyRow!, 'activated'),
        })),

      markEnemyAsDefeated: () =>
        set(({ enemies, selectedEnemyIndex, selectedEnemyRow }) => ({
          gameState: GameState.default,
          enemies: toggleEnemyStatus(enemies, selectedEnemyIndex, selectedEnemyRow!, 'defeated'),
        })),

      applyDamage: (value) => {
        // do something
        console.log(value)
      },

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
      enterEnemyBattle: () => set({
        gameState: GameState.enemyBattle,
      }),
    }),
    {
      name: 'hotg-game-storage',
      storage: createJSONStorage(() => createVersionedStorage()),
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
