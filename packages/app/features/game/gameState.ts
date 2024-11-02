import { create } from 'zustand'
import { RangerCard, EnemyCard } from './Card/CardTypes'
import cardDatabase from './Card/data/cardDatabase'
import { RangerDecks } from './GameTypes'

interface GameState {
  rangerDecks: RangerDecks
  hand: RangerCard[] // Cards currently in play
  enemies: string[] // Enemy team members (Foot Soldiers, Monster)
  enemyDeck: EnemyCard[] // Enemy card deck
  energy: number
  bonusDice: number
  turn: 'rangers' | 'enemies'
  phase: 'action' | 'battle'
  selectRanger: boolean

  drawCard: (position: 'left' | 'middle' | 'right') => void
  setEnergy: (energy: number) => void
  nextTurn: () => void
  setBonusDice: (dice: number) => void
  applyDamage: (value: number) => void
  promptRangerCardPlay: () => void
  // New state management functions
  setPhase: (phase: 'action' | 'battle') => void
  addEnemy: (enemy: EnemyCard) => void
  removeEnemy: (enemyId: string) => void
}

const getDeck = (owner: string) => {
  return cardDatabase.filter((card) => card.owner === owner)
}

const useGameStore = create<GameState>((set) => ({
  rangerDecks: {
    left: {
      name: 'Red Ranger',
      abilities: [{ name: 'Red Power' }],
      color: 'red',
      cards: getDeck('Red Ranger'),
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
  hand: [...getDeck('Red Ranger'), ...getDeck('Green Ranger')],
  enemies: ['Foot Soldier 1', 'Foot Soldier 2', 'Monster'],
  enemyDeck: [
    {
      id: 'fs1',
      name: 'Foot Soldier 1',
      type: 'basic',
      text: 'Basic attack',
      owner: 'Foot Soldier',
      enemyType: 'foot',
      health: 2,
      attack: { value: 1 },
    },
    {
      id: 'fs2',
      name: 'Foot Soldier 2',
      type: 'guard',
      enemyType: 'foot',
      text: 'Guards the area',
      owner: 'Foot Soldier',
      health: 3,
      attack: { value: 1 },
    },
    {
      id: 'm1',
      name: 'Monster',
      type: 'passive',
      enemyType: 'monster',
      text: 'Strong passive defense',
      owner: 'Monster',
      health: 5,
      attack: { value: 2 },
    },
  ],
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
  addEnemy: (enemy) =>
    set((state) => ({
      enemies: [...state.enemies, enemy.name],
      enemyDeck: [...state.enemyDeck, enemy],
    })),
  removeEnemy: (enemyId) =>
    set((state) => ({
      enemies: state.enemies.filter((name) => name !== enemyId),
    })),

  openSelectRanger: () => set({ selectRanger: true }),
}))

export default useGameStore
