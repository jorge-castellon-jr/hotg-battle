import React from 'react'
import { Stack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { Skull } from 'lucide-react'
import { EnemyCard as EnemyCardType } from '../CardTypes'
import EnemyCard from './EnemyCard'
import { enemyColors } from '../../utils/colors'

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

const flipConfig = {
  duration: 800,
  easing: Easing.bezier(0.4, 0.0, 0.2, 1),
}

export const AnimatedEnemyCard: React.FC<AnimatedEnemyCardProps> = ({ enemy, width, height }) => {
  const rotation = useSharedValue(0)
  const flipRotation = useSharedValue(0)
  const isRotated = useSharedValue(false)
  const isFlipped = useSharedValue(false)

  // Calculate icon size based on card dimensions
  const iconSize = Math.min(width, height) * 0.4

  const rotateCard = () => {
    isRotated.value = !isRotated.value
    rotation.value = withSpring(isRotated.value ? -90 : 0, springConfig)
  }
  const flipCard = () => {
    isFlipped.value = !isFlipped.value
    flipRotation.value = withTiming(isFlipped.value ? 180 : 0, flipConfig)
  }

  // FIXME: the tap should zoom in card and get info later
  const tapGesture = Gesture.Tap().onStart(() => {
    rotateCard()
  })
  // FIXME: dis will not be needed
  const longPressGesture = Gesture.LongPress()
    .minDuration(200)
    .onStart(() => {
      flipCard()
    })

  const gesture = Gesture.Exclusive(tapGesture, longPressGesture)

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(Math.abs(rotation.value), [0, 90], [1, 0.8], 'clamp')

    return {
      transform: [
        { perspective: 1000 },
        { scale },
        { rotateZ: `${rotation.value}deg` },
        { rotateY: `${flipRotation.value}deg` },
      ],
      backfaceVisibility: 'hidden',
    }
  }, [rotation, flipRotation])

  const backAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(Math.abs(rotation.value), [0, 90], [1, 0.8], 'clamp')

    return {
      transform: [
        { perspective: 1000 },
        { scale },
        { rotateZ: `${rotation.value}deg` },
        { rotateY: `${flipRotation.value + 180}deg` },
      ],
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
    }
  }, [rotation, flipRotation])

  return (
    <GestureDetector gesture={gesture}>
      <Stack width={width} height={height}>
        {/* Front of card */}
        <AnimatedStack style={animatedStyle}>
          <EnemyCard enemy={enemy} width={width} height={height} />
        </AnimatedStack>

        {/* Back of card */}
        <AnimatedStack style={backAnimatedStyle}>
          <Stack
            width={width}
            height={height}
            backgroundColor="$gray8"
            borderRadius="$4"
            borderWidth={2}
            borderColor={enemy ? enemyColors[enemy.enemyType] : '$gray6'}
            justifyContent="center"
            alignItems="center"
          >
            <Skull size={iconSize} color="white" strokeWidth={1.5} />
          </Stack>
        </AnimatedStack>
      </Stack>
    </GestureDetector>
  )
}

export default AnimatedEnemyCard
