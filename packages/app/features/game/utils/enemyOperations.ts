import { EnemyCard } from '../Card/CardTypes'

interface EnemyRows {
  top: EnemyCard[]
  bottom: EnemyCard[]
}

export const updateEnemyStatus = (
  enemies: EnemyRows,
  enemyIndex: number,
  row: 'top' | 'bottom',
  status: {
    activated?: boolean
    defeated?: boolean
  }
): EnemyRows => {
  return {
    ...enemies,
    [row]: enemies[row].map((enemy, index) =>
      index === enemyIndex
        ? {
          ...enemy,
          ...status,
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
