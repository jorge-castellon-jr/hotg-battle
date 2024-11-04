import React from 'react'
import { XStack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated'
import { RangerStatusCard } from './RangerStatusCard'
import { RangerStatusProps } from './types'
import { SPRING_CONFIG } from './animations'
import useGameStore from '../gameState'

const AnimatedXStack = Animated.createAnimatedComponent(XStack)

export const AnimatedRangerStatus: React.FC<RangerStatusProps> = ({ rangers, isVisible }) => {
  const { drawCard } = useGameStore()
  const animation = useSharedValue(isVisible ? 0 : 1)

  React.useEffect(() => {
    animation.value = withSpring(isVisible ? 0 : 1, SPRING_CONFIG)
  }, [isVisible])

  const translateY = useDerivedValue(() => {
    return interpolate(animation.value, [0, 1], [0, 100])
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }),[translateY])

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
          position={position as 'left' | 'middle' | 'right'}
          ranger={ranger}
          onDrawCard={drawCard}
        />
      ))}
    </AnimatedXStack>
  )
}
