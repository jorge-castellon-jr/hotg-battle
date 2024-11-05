import React from 'react'
import { Stack } from 'tamagui'
import Animated, { useAnimatedStyle, interpolate, SharedValue } from 'react-native-reanimated'
import { DiceFace } from './DiceFace'
import { DiceResult } from './diceTyes'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface DiceGridProps {
  results: DiceResult[]
  diceSize: number
  spacing: number
  animation: SharedValue<number>
}

export const DiceGrid: React.FC<DiceGridProps> = ({ results, diceSize, spacing, animation }) => {
  const rows = Math.ceil(results.length / 4)
  const gridHeight = rows * (diceSize + spacing) - spacing

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animation.value, [0, 1, 2, 3], [1, 1.2, 1.1, 1], 'clamp')

    const translateY = interpolate(animation.value, [0, 1, 2, 3], [0, -30, -15, 0], 'clamp')

    return {
      transform: [{ scale }, { translateY }],
    }
  }, [animation])

  const getGridPosition = (index: number) => {
    const row = Math.floor(index / 4)
    const col = index % 4
    return {
      position: 'absolute' as const,
      left: col * (diceSize + spacing),
      top: row * (diceSize + spacing),
    }
  }

  return (
    <AnimatedStack
      height={gridHeight}
      width={(diceSize + spacing) * 4 - spacing}
      position="relative"
      style={animatedStyle}
      justifyContent="center"
    >
      {results.map((result, index) => (
        <Stack key={index} {...getGridPosition(index)}>
          <DiceFace value={result.face} size={diceSize} />
        </Stack>
      ))}
    </AnimatedStack>
  )
}
