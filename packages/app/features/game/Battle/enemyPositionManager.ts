import { EnemyCard } from '../Card/CardTypes'

export interface EnemyPosition {
  index: number
  row: 'top' | 'bottom'
}

export const swapEnemyPositions = (
  enemies: { top: EnemyCard[]; bottom: EnemyCard[] },
  from: EnemyPosition,
  to: EnemyPosition
): { top: EnemyCard[]; bottom: EnemyCard[] } => {
  const result = {
    top: [...enemies.top],
    bottom: [...enemies.bottom],
  }

  if (from.row === to.row) {
    const row = result[from.row]
    const temp = row[from.index]
    row[from.index] = row[to.index]
    row[to.index] = temp
  }

  return result
}

export const moveEnemy = (
  enemies: { top: EnemyCard[]; bottom: EnemyCard[] },
  position: EnemyPosition,
  direction: 'left' | 'right'
): { top: EnemyCard[]; bottom: EnemyCard[] } | null => {
  const { row, index } = position
  const targetIndex = direction === 'left' ? index - 1 : index + 1

  // Check if move is valid
  if (targetIndex < 0 || targetIndex >= enemies[row].length) {
    return null
  }

  return swapEnemyPositions(enemies, position, { row, index: targetIndex })
}

export const canMoveEnemy = (
  enemies: { top: EnemyCard[]; bottom: EnemyCard[] },
  position: EnemyPosition,
  direction: 'left' | 'right'
): boolean => {
  const { row, index } = position
  const targetIndex = direction === 'left' ? index - 1 : index + 1
  return targetIndex >= 0 && targetIndex < enemies[row].length
}
