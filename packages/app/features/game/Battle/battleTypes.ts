// src/features/game/battle/types/battleTypes.ts
import { RangerCard, EnemyCard } from '../../Card/CardTypes';
import { SharedValue } from 'react-native-reanimated';

export interface BattleState {
  attackingCard?: RangerCard;
  targetEnemy?: EnemyCard;
  diceResults: number[];
  totalDamage: number;
}

export interface BattleSequenceProps {
  handOffsetY: SharedValue<number>;
}

export interface DiceRollProps {
  numDice: number;
  isRolling: boolean;
  onRollComplete: (results: number[]) => void;
}
