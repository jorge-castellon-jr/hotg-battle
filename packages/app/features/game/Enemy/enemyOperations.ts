import { EnemyCard } from '../Card/CardTypes'

interface EnemyRows {
  top: EnemyCard[]
  bottom: EnemyCard[]
}

export const updateEnemyDamage = (
  enemies: EnemyRows,
  enemyIndex: number,
  row: 'top' | 'bottom',
  newDamage: number
): EnemyRows => {
  return {
    ...enemies,
    [row]: enemies[row].map((enemy, index) =>
      index === enemyIndex
        ? {
          ...enemy,
          currentDamage: newDamage,
          // Automatically mark as defeated if damage equals or exceeds health
          defeated: newDamage >= enemy.health,
        }
        : enemy
    ),
  }
}

// Function to check if enemy is at max health
export const isEnemyAtMaxHealth = (enemy: EnemyCard): boolean => {
  return enemy.currentDamage === 0
}

// Function to check if enemy is defeated by damage
export const isEnemyDefeatedByDamage = (enemy: EnemyCard): boolean => {
  return enemy.currentDamage >= enemy.health
}

// Function to get remaining health
export const getRemainingHealth = (enemy: EnemyCard): number => {
  return Math.max(0, enemy.health - enemy.currentDamage)
}

export const toggleEnemyStatus = (
  enemies: EnemyRows,
  enemyIndex: number,
  row: 'top' | 'bottom',
  statusKey: 'activated' | 'defeated'
): EnemyRows => {
  return {
    ...enemies,
    [row]: enemies[row].map((enemy, index) =>
      index === enemyIndex
        ? {
          ...enemy,
          [statusKey]: !enemy[statusKey],
        }
        : enemy
    ),
  }
}

export const resetEnemyActivations = (enemies: EnemyRows): EnemyRows => {
  const resetRow = (row: EnemyCard[]) =>
    row.map((enemy) => ({
      ...enemy,
      activated: false,
    }))

  return {
    top: resetRow(enemies.top),
    bottom: resetRow(enemies.bottom),
  }
}

export const findEnemyCard = (
  enemies: EnemyRows,
  index: number,
  row: 'top' | 'bottom'
): EnemyCard | undefined => {
  return enemies[row][index]
}

export const isEnemyDefeated = (enemy: EnemyCard): boolean => {
  return !!enemy.defeated
}

export const isEnemyActivated = (enemy: EnemyCard): boolean => {
  return !!enemy.activated
}
