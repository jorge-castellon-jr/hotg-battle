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
import useGameStore from '../../gameStateStore'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface AnimatedEnemyCardProps {
  enemy?: EnemyCardType
  width: number
  height: number
  index: number
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

export const AnimatedEnemyCard: React.FC<AnimatedEnemyCardProps> = ({
  enemy,
  width,
  height,
  index,
}) => {
  const { showCardOptions, battleMode, selectedEnemy, setSelectedEnemy, selectedEnemyIndex } =
    useGameStore()

  const rotation = useSharedValue(0)
  const flipRotation = useSharedValue(0)
  const isRotated = useSharedValue(false)
  const isFlipped = useSharedValue(false)

  // Calculate icon size based on card dimensions
  const iconSize = Math.min(width, height) * 0.4

  const rotateCard = () => {
    if (!enemy) return
    if (battleMode) return
    if (showCardOptions) return
    isRotated.value = !isRotated.value
    rotation.value = withSpring(isRotated.value ? -90 : 0, springConfig)
  }
  const flipCard = () => {
    if (!enemy) return
    if (battleMode) return
    if (showCardOptions) return
    isFlipped.value = !isFlipped.value
    flipRotation.value = withTiming(isFlipped.value ? 180 : 0, flipConfig)
  }

  // FIXME: the tap should zoom in card and get info later
  const tapGesture = Gesture.Tap().onStart(() => { })
  // FIXME: dis will not be needed
  const longPressGesture = Gesture.LongPress()
    .minDuration(200)
    .onStart(() => {
      rotateCard()
    })

  const gesture = Gesture.Exclusive(tapGesture, longPressGesture)

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(Math.abs(rotation.value), [0, 90], [1, 0.8], 'clamp')

    if (showCardOptions)
      return {
        transform: [
          { perspective: 1000 },
          { scale },
          { rotateZ: `${rotation.value}deg` },
          { rotateY: `${flipRotation.value}deg` },
        ],
        opacity: 0.5,
        backfaceVisibility: 'hidden',
      }

    return {
      transform: [
        { perspective: 1000 },
        { scale },
        { rotateZ: `${rotation.value}deg` },
        { rotateY: `${flipRotation.value}deg` },
      ],
      opacity: !selectedEnemy
        ? 1
        : (selectedEnemy.name === enemy?.name && selectedEnemyIndex === index) || !showCardOptions
          ? 1
          : 0.5,
      backfaceVisibility: 'hidden',
    }
  }, [rotation, flipRotation, selectedEnemy, selectedEnemyIndex, showCardOptions])

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

  const handleBattleTarget = () => {
    if (!enemy) return
    if (!battleMode) return
    setSelectedEnemy(enemy, index)
  }

  return (
    <GestureDetector gesture={gesture}>
      <Stack width={width} height={height}>
        {/* Front of card */}
        <AnimatedStack
          disabled={
            !selectedEnemy || showCardOptions
              ? false
              : selectedEnemy.name === enemy?.name && selectedEnemyIndex === index
          }
          style={animatedStyle}
          onPress={handleBattleTarget}
        >
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
            <Skull
              size={iconSize}
              color={enemy ? `var(--c-${enemyColors[enemy.enemyType].slice(1)}` : 'white'}
              strokeWidth={1.5}
            />
          </Stack>
        </AnimatedStack>
      </Stack>
    </GestureDetector>
  )
}

export default AnimatedEnemyCard
