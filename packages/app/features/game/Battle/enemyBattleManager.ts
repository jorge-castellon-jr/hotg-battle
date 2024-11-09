import type { Attack } from '../Card/CardTypes'
import useGameStore from '../gameStateStore'

interface DamageResult {
  targetPosition: 'left' | 'middle' | 'right'
  damage: number
}

export class EnemyBattleManager {
  static processDamage(
    attack: Attack & { target?: number | 'lead' | 'notLead' },
    results: number[] = []
  ): DamageResult {
    const gameStore = useGameStore.getState()
    const positions: Array<'left' | 'middle' | 'right'> = ['left', 'middle', 'right']

    // Calculate damage
    const damage = attack.fixed ? attack.value : results.reduce((sum, val) => sum + val, 0)

    // Determine target based on attack rules
    let targetPosition: 'left' | 'middle' | 'right'

    switch (attack.target) {
      case 'lead':
        targetPosition = 'middle' // Assuming middle is always lead
        break
      case 'notLead':
        // Randomly select non-lead position
        targetPosition = Math.random() < 0.5 ? 'left' : 'right'
        break
      default:
        // Random target
        targetPosition = positions[Math.floor(Math.random() * positions.length)]
    }

    // Apply damage to target
    gameStore.applyDamage(damage)

    return {
      targetPosition,
      damage,
    }
  }

  static calculateTotalDamage(results: number[]): number {
    return results.reduce((sum, val) => sum + val, 0)
  }
}
