import React from 'react'
import { YStack, Text } from 'tamagui'
import { useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { DiceGrid } from './DiceGrid'
import { useDiceRoll } from './useDiceRoll'

interface DiceRollProps {
  numDice: number
  isRolling: boolean
  onRollComplete: (results: number[]) => void
}

export const DiceRoll: React.FC<DiceRollProps> = ({ numDice, isRolling, onRollComplete }) => {
  const animation = useSharedValue(0)
  const { diceResults, finalResults, totalDamage } = useDiceRoll(
    numDice,
    isRolling,
    onRollComplete,
    animation
  )

  const diceSize = 60
  const spacing = 10

  return (
    <YStack gap="$5" alignItems="center">
      <DiceGrid
        results={diceResults.length ? diceResults : finalResults}
        diceSize={diceSize}
        spacing={spacing}
        animation={animation}
      />

      <Text color="$accentColor" fontSize={24} fontWeight="bold">
        Total Damage: {totalDamage}
      </Text>
    </YStack>
  )
}
