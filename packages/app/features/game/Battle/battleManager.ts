// src/features/game/battle/battleManager.ts
import type { BattleState } from './types/battleTypes';

class BattleManager {
  private state: BattleState = {
    diceResults: [],
    totalDamage: 0
  };

  rollDice(numDice: number): number[] {
    const results = Array(numDice)
      .fill(0)
      .map(() => Math.floor(Math.random() * 6) + 1);
    
    this.state.diceResults = results;
    this.state.totalDamage = results.reduce((sum, value) => sum + value, 0);
    
    return results;
  }

  calculateDamage(): number {
    return this.state.totalDamage;
  }

  reset() {
    this.state = {
      diceResults: [],
      totalDamage: 0
    };
  }
}

export const battleManager = new BattleManager();
