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
    return [...new Set(enemies.filter((enemy) => enemy !== null).map((enemy) => enemy.id))]
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
    deckMap: EnemyDeckMap,
    cardsPerEnemy: number
  ): EnemyCard[] {
    const result: EnemyCard[] = []

    enemies.forEach((enemy) => {
      if (!enemy) return

      const deck = deckMap.get(enemy.id)
      if (!deck || deck.length < cardsPerEnemy) return

      // Take cards for this enemy position
      const cards = deck.splice(0, cardsPerEnemy)
      result.push(...cards)
    })

    console.log('distributeCards',result)

    return result
  }

  static setupEnemyCards(enemies: EnemySetup, cardsPerEnemy: number = 4): EnemySetup {
    console.log('start',enemies)
    // Get unique enemy IDs for each row
    const topEnemyIds = this.getUniqueEnemyIds(enemies.top)
    const bottomEnemyIds = this.getUniqueEnemyIds(enemies.bottom)
    console.log('ids', topEnemyIds, bottomEnemyIds)

    // Create deck maps for both rows
    const topDeckMap = this.createEnemyDeckMap(topEnemyIds)
    const bottomDeckMap = this.createEnemyDeckMap(bottomEnemyIds)
    console.log('deck maps', topDeckMap, bottomDeckMap)

    return {
      top: this.distributeCards(enemies.top, topDeckMap, cardsPerEnemy),
      bottom: this.distributeCards(enemies.bottom, bottomDeckMap, cardsPerEnemy),
    }
  }
}
