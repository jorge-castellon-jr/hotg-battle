import { EnemyCard } from '../Card/CardTypes';

interface EnemyRows {
  top: EnemyCard[];
  bottom: EnemyCard[];
}

interface Position {
  row: 'top' | 'bottom';
  index: number;
}

// Check if a position is valid within the enemy grid
const isValidPosition = (enemies: EnemyRows, pos: Position): boolean => {
  const rowLength = enemies[pos.row].length;
  return pos.index >= 0 && pos.index < rowLength;
};

// Get all valid adjacent positions (horizontal and vertical)
const getAdjacentPositions = (enemies: EnemyRows, pos: Position): Position[] => {
  const positions: Position[] = [];
  
  // Check left
  if (isValidPosition(enemies, { ...pos, index: pos.index - 1 })) {
    positions.push({ ...pos, index: pos.index - 1 });
  }
  
  // Check right
  if (isValidPosition(enemies, { ...pos, index: pos.index + 1 })) {
    positions.push({ ...pos, index: pos.index + 1 });
  }
  
  // Check vertical (opposite row, same index)
  const oppositeRow = pos.row === 'top' ? 'bottom' : 'top';
  if (isValidPosition(enemies, { row: oppositeRow, index: pos.index })) {
    positions.push({ row: oppositeRow, index: pos.index });
  }

  return positions;
};

// Check if an enemy is guarded by checking adjacent positions for guard keyword
export const isEnemyGuarded = (enemies: EnemyRows, pos: Position): boolean => {
  const adjacentPositions = getAdjacentPositions(enemies, pos);
  
  return adjacentPositions.some(adjPos => {
    const enemy = enemies[adjPos.row][adjPos.index];
    return enemy && enemy.type === 'guard';
  });
};

// Get all guarded enemies in the grid
export const getGuardedEnemies = (enemies: EnemyRows): Position[] => {
  const guarded: Position[] = [];
  
  ['top', 'bottom'].forEach(row => {
    enemies[row as keyof EnemyRows].forEach((enemy, index) => {
      const pos = { row: row as 'top' | 'bottom', index };
      if (isEnemyGuarded(enemies, pos)) {
        guarded.push(pos);
      }
    });
  });
  
  return guarded;
};

// Check if a specific enemy card is guarded
export const checkEnemyGuardStatus = (
  enemies: EnemyRows,
  row: 'top' | 'bottom',
  index: number
): boolean => {
  return isEnemyGuarded(enemies, { row, index });
};
