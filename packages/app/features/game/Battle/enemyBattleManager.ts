import type { Attack } from '../Card/CardTypes'

interface DamageResult {
  targetPosition: 'left' | 'middle' | 'right'
  damage: number
}

export class EnemyBattleManager {
  static calculateDamage(damage: number, results: number[] = []): number {
    return damage || results.reduce((sum, val) => sum + val, 0)
  }

  static determineTarget(target?: number | 'lead' | 'notLead'): 'left' | 'middle' | 'right' {
    const positions: Array<'left' | 'middle' | 'right'> = ['left', 'middle', 'right']

    switch (target) {
      case 'lead':
        return 'middle' // Assuming middle is always lead
      case 'notLead':
        // Randomly select non-lead position
        return Math.random() < 0.5 ? 'left' : 'right'
      default:
        // Random target
        return positions[Math.floor(Math.random() * positions.length)]
    }
  }

  static processDamage(
    attack: Attack & { target?: number | 'lead' | 'notLead' },
    results: number[] = []
  ): DamageResult {
    // Calculate damage
    const damage = attack.fixed ? attack.value : results.reduce((sum, val) => sum + val, 0)

    // Determine target
    const targetPosition = this.determineTarget(attack.target)

    return {
      targetPosition,
      damage,
    }
  }

  static calculateTotalDamage(results: number[]): number {
    return results.reduce((sum, val) => sum + val, 0)
  }
}
