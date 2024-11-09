import React from 'react'
import { Button, Text, XStack, YStack } from 'tamagui'
import { DiceRoll } from '../Dice/DiceRoll'
import type { Attack } from '../Card/CardTypes'
import { EnemyBattleManager } from './enemyBattleManager'

interface AttackSequenceProps {
  attack: Attack & { target?: number | 'lead' | 'notLead' }
  isRolling: boolean
  setIsRolling: (rolling: boolean) => void
  rollComplete: boolean
  setRollComplete: (complete: boolean) => void
  onComplete: () => void
}

export const AttackSequence: React.FC<AttackSequenceProps> = ({
  attack,
  isRolling,
  setIsRolling,
  rollComplete,
  setRollComplete,
  onComplete,
}) => {
  const handleStartRoll = () => {
    if (!attack.fixed) {
      setIsRolling(true)
      return
    }
    EnemyBattleManager.processDamage(attack)
    setIsRolling(false)
    setRollComplete(true)
  }

  const handleRollComplete = (results: number[]) => {
    setIsRolling(false)
    setRollComplete(true)
    // Process damage based on target type
    EnemyBattleManager.processDamage(attack, results)
  }

  if (!attack) return null

  const targetText =
    attack.target === 'lead'
      ? 'Lead Ranger'
      : attack.target === 'notLead'
        ? 'Non-Lead Ranger'
        : 'Random Ranger'

  return (
    <YStack gap="$4" alignItems="center">
      <Text fontSize={18} color="$gray11">
        Target: {targetText}
      </Text>

      {!isRolling && !rollComplete ? (
        <>
          {attack.fixed ? (
            <Text fontSize={24}>Fixed Damage: {attack.value}</Text>
          ) : (
            <Text fontSize={24}>
              Roll {attack.value} {attack.value === 1 ? 'Die' : 'Dice'}
            </Text>
          )}
          <Button onPress={handleStartRoll}>{attack.fixed ? 'Apply Damage' : 'Roll Dice'}</Button>
        </>
      ) : (
        <>
          {attack.fixed ? (
            // Fixed Damage Display
            <YStack gap="$2" alignItems="center">
              <Text fontSize={32} color="$red9" fontWeight="bold">
                {attack.value}
              </Text>
              <Text fontSize={16} color="$gray11">
                Damage Dealt
              </Text>
            </YStack>
          ) : (
            // Dice Roll Display
            <DiceRoll
              numDice={attack.value}
              isRolling={isRolling}
              onRollComplete={handleRollComplete}
            />
          )}

          <Button disabled={!rollComplete} onPress={onComplete}>
            Continue
          </Button>
        </>
      )}
    </YStack>
  )
}
