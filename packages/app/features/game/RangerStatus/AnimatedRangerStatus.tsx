// AnimatedRangerStatus/index.tsx
import React from 'react'
import { XStack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated'
import { RangerStatusCard } from './RangerStatusCard'
import { RangerStatusProps } from './types'
import useGameStore from '../gameState'

const AnimatedXStack = Animated.createAnimatedComponent(XStack)

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

export const AnimatedRangerStatus: React.FC<RangerStatusProps> = ({ rangers, isVisible }) => {
  const { drawCard } = useGameStore()
  const translateY = useSharedValue(0)

  React.useEffect(() => {
    translateY.value = withSpring(
      isVisible ? 0 : 75, // Move 200 units down when not visible
      SPRING_CONFIG
    )
  }, [isVisible])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  }, [translateY])

  return (
    <AnimatedXStack
      position="absolute"
      bottom={0}
      width="100%"
      backgroundColor="$background"
      borderTopWidth={1}
      borderTopColor="$borderColor"
      padding="$2"
      gap="$2"
      style={animatedStyle}
    >
      {Object.entries(rangers).map(([position, ranger]) => (
        <RangerStatusCard
          key={position}
          ranger={ranger}
          onDrawCard={() => drawCard(position as 'left' | 'middle' | 'right')}
        />
      ))}
    </AnimatedXStack>
  )
}
