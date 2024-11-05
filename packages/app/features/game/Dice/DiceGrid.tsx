import React from 'react'
import { Stack } from 'tamagui'
import Animated, { useAnimatedStyle, interpolate, SharedValue } from 'react-native-reanimated'
import { DiceFace } from './DiceFace'
import { DiceResult } from './diceTypes'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface DiceGridProps {
  results: DiceResult[]
  diceSize: number
  spacing: number
  animation: SharedValue<number>
}

export const DiceGrid: React.FC<DiceGridProps> = ({ results, diceSize, spacing, animation }) => {
  const DICE_PER_ROW = 4
  const rows = Math.ceil(results.length / DICE_PER_ROW)
  const gridHeight = rows * (diceSize + spacing) - spacing
  const fullWidth = (diceSize + spacing) * DICE_PER_ROW - spacing

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animation.value, [0, 1, 2, 3], [1, 1.1, 1.05, 1], 'clamp')

    return {
      transform: [{ scale }],
    }
  }, [animation])

  const getGridPosition = (index: number) => {
    const row = Math.floor(index / DICE_PER_ROW)
    const diceInThisRow = Math.min(DICE_PER_ROW, results.length - row * DICE_PER_ROW)
    const totalWidthForRow = diceInThisRow * diceSize + (diceInThisRow - 1) * spacing
    const startX = (fullWidth - totalWidthForRow) / 2
    const col = index % DICE_PER_ROW

    return {
      position: 'absolute' as const,
      left: startX + col * (diceSize + spacing),
      top: row * (diceSize + spacing),
    }
  }

  return (
    <Stack alignItems="center" width={fullWidth}>
      <AnimatedStack
        height={gridHeight}
        width={fullWidth}
        position="relative"
        style={animatedStyle}
      >
        {results.map((result, index) => (
          <Stack key={index} {...getGridPosition(index)}>
            <DiceFace value={result.face} size={diceSize} />
          </Stack>
        ))}
      </AnimatedStack>
    </Stack>
  )
}
