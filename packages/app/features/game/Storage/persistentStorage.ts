import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'
import { StateStorage } from 'zustand/middleware'

// Create a storage object that works for both web and native
export const createStorage = (): StateStorage => ({
  getItem: async (name: string): Promise<string | null> => {
    try {
      if (Platform.OS === 'web') {
        const value = localStorage.getItem(name)
        return value ? Promise.resolve(value) : Promise.resolve(null)
      }
      return await AsyncStorage.getItem(name)
    } catch (error) {
      console.error('Error reading from storage:', error)
      return null
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      if (Platform.OS === 'web') {
        localStorage.setItem(name, value)
        return Promise.resolve()
      }
      return await AsyncStorage.setItem(name, value)
    } catch (error) {
      console.error('Error writing to storage:', error)
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      if (Platform.OS === 'web') {
        localStorage.removeItem(name)
        return Promise.resolve()
      }
      return await AsyncStorage.removeItem(name)
    } catch (error) {
      console.error('Error removing from storage:', error)
    }
  },
})

// Version control for storage migrations
export const STORAGE_VERSION = '1.0.0'

// Helper to handle storage versioning and migrations
export const createVersionedStorage = () => {
  const storage = createStorage()

  return {
    ...storage,
    getItem: async (name: string): Promise<string | null> => {
      const data = await storage.getItem(name)
      if (!data) return null

      try {
        const parsed = JSON.parse(data)
        // Check version and handle migrations if needed
        if (parsed.version !== STORAGE_VERSION) {
          // Implement migration logic here
          console.log('Storage version mismatch, migrating...')
          parsed.version = STORAGE_VERSION
          await storage.setItem(name, JSON.stringify(parsed))
        }
        return JSON.stringify(parsed.state)
      } catch (error) {
        console.error('Error parsing stored data:', error)
        return null
      }
    },
    setItem: async (name: string, value: string): Promise<void> => {
      const data = {
        version: STORAGE_VERSION,
        state: JSON.parse(value),
        timestamp: Date.now(),
      }
      await storage.setItem(name, JSON.stringify(data))
      return
    },
  }
}
