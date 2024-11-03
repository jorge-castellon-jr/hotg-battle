import React from 'react'
import { Stack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { EnemyCard as EnemyCardType } from '../CardTypes'
import EnemyCard from './EnemyCard'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface AnimatedEnemyCardProps {
  enemy?: EnemyCardType
  width: number
  height: number
}

const springConfig = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

export const AnimatedEnemyCard: React.FC<AnimatedEnemyCardProps> = ({ enemy, width, height }) => {
  const rotation = useSharedValue(0)
  const isRotated = useSharedValue(false)

  const tapGesture = Gesture.Tap().onStart(() => {
    isRotated.value = !isRotated.value
    rotation.value = withSpring(isRotated.value ? -90 : 0, springConfig)
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1000 },
        { rotateZ: `${rotation.value}deg` },
        {
          scale: interpolate(Math.abs(rotation.value), [0, 90], [1, 0.8], 'clamp'),
        },
      ],
    }
  }, [rotation])

  return (
    <GestureDetector gesture={tapGesture}>
      <AnimatedStack style={animatedStyle}>
        <EnemyCard enemy={enemy} width={width} height={height} />
      </AnimatedStack>
    </GestureDetector>
  )
}

export default AnimatedEnemyCard
