import { EnemyCard } from '../Card/CardTypes'
import { getEnemyDeck } from '../Card/deckUtils'
import { Enemy } from '../GameTypes'

export interface EnemySetup {
  top: (Enemy | null)[]
  bottom: (Enemy | null)[]
}

type EnemyDeckMap = Map<string, EnemyCard[]>

export class EnemySetupManager {
  private static getUniqueEnemyIds(enemies: (Enemy | null)[]): string[] {
    return [
      ...new Set(
        enemies.filter((enemy): enemy is Enemy => enemy !== null).map((enemy) => enemy.id)
      ),
    ]
  }

  private static createEnemyDeckMap(enemyIds: string[]): EnemyDeckMap {
    const deckMap = new Map<string, EnemyCard[]>()

    enemyIds.forEach((id) => {
      const deck = getEnemyDeck(id)
      deckMap.set(id, deck)
    })

    return deckMap
  }

  private static distributeCards(
    enemies: (Enemy | null)[],
    deckMap: EnemyDeckMap
  ): (EnemyCard | null)[] {
    // Distribute cards maintaining original positions
    const result = enemies.map((enemy, index) => {
      if (!enemy) {
        console.log('no enemy', index, enemy)
        // Keep null in this position
        // result[index] = null
        return null
      }

      const deck = deckMap.get(enemy.id)
      if (!deck) {
        console.log('no cards', deck, deckMap)

        // If no deck or not enough cards, set position to null
        // result[index] = null
        return null
      }

      // Take cards for this enemy position
      return deck.pop() // Take first card for this position
    })

    return result as (EnemyCard | null)[]
  }

  static setupEnemyCards(enemies: EnemySetup): {
    top: (EnemyCard | null)[]
    bottom: (EnemyCard | null)[]
  } {
    // Get unique enemy IDs for each row
    const topEnemyIds = this.getUniqueEnemyIds(enemies.top)
    const bottomEnemyIds = this.getUniqueEnemyIds(enemies.bottom)

    // Create deck maps for both rows
    const topDeckMap = this.createEnemyDeckMap(topEnemyIds)
    const bottomDeckMap = this.createEnemyDeckMap(bottomEnemyIds)

    return {
      top: this.distributeCards(enemies.top, topDeckMap),
      bottom: this.distributeCards(enemies.bottom, bottomDeckMap),
    }
  }
}
