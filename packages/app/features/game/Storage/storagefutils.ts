import useGameStore from '../gameStateStore'
import { createVersionedStorage } from './persistentStorage'

// Interface for save game metadata
export interface SaveGameMetadata {
  timestamp: number
  version: string
  rangerNames: string[]
  turnCount: number
}

// Utility functions for managing saved games
export const storageUtils = {
  // Get metadata about the saved game without loading entire state
  getSaveMetadata: async (): Promise<SaveGameMetadata | null> => {
    try {
      const store = useGameStore.getState()
      if (!store.lastSaved) return null

      return {
        timestamp: store.lastSaved,
        version: store.gameVersion,
        rangerNames: Object.values(store.rangerDecks).map((ranger) => ranger.name),
        turnCount: 0, // Add turn counting to your state if needed
      }
    } catch (error) {
      console.error('Error getting save metadata:', error)
      return null
    }
  },

  // Create a save game backup
  createBackup: async (): Promise<void> => {
    const state = useGameStore.getState()
    const timestamp = Date.now()
    const backupKey = `hotg-backup-${timestamp}`

    try {
      const storage = createVersionedStorage()
      await storage.setItem(backupKey, JSON.stringify(state))
    } catch (error) {
      console.error('Error creating backup:', error)
    }
  },

  // Load a specific backup
  loadBackup: async (timestamp: number): Promise<boolean> => {
    const backupKey = `hotg-backup-${timestamp}`
    try {
      const storage = createVersionedStorage()
      const backup = await storage.getItem(backupKey)
      if (backup) {
        const state = JSON.parse(backup)
        useGameStore.setState(state)
        return true
      }
      return false
    } catch (error) {
      console.error('Error loading backup:', error)
      return false
    }
  },
}
