// features/game/Storage/persistentStorage.ts
export interface Storage {
  getItem: (key: string) => string | null | Promise<string | null>
  setItem: (key: string, value: string) => void | Promise<void>
  removeItem: (key: string) => void | Promise<void>
}

class StorageApi implements Storage {
  private getStorage() {
    if (typeof window !== 'undefined') {
      return window.localStorage
    }
    return null
  }

  getItem(key: string): string | null {
    try {
      const storage = this.getStorage()
      if (!storage) return null
      return storage.getItem(key)
    } catch (error) {
      // Silently handle errors but return null
      return null
    }
  }

  setItem(key: string, value: string): void {
    try {
      const storage = this.getStorage()
      if (!storage) return
      storage.setItem(key, value)
    } catch (error) {
      // Silently handle errors
    }
  }

  removeItem(key: string): void {
    try {
      const storage = this.getStorage()
      if (!storage) return
      storage.removeItem(key)
    } catch (error) {
      // Silently handle errors
    }
  }
}

export default new StorageApi()
