import React, { useEffect } from 'react'
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
import useGameStore, { GameState } from '../../gameStateStore'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface AnimatedEnemyCardProps {
  enemy?: EnemyCardType
  width: number
  height: number
  index: number
  row: 'top' | 'bottom'
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
  row,
}) => {
  const { gameState, showUI, hideUI, selectedEnemy, setSelectedEnemy, selectedEnemyIndex } =
    useGameStore()

  const rotation = useSharedValue(0)
  const flipRotation = useSharedValue(0)
  const isRotated = useSharedValue(false)
  const isFlipped = useSharedValue(false)

  // Calculate icon size based on card dimensions
  const iconSize = Math.min(width, height) * 0.4

  const rotateCard = (rotate: boolean) => {
    if (!enemy) return
    if (gameState === GameState.rangerBattle) return
    if (gameState === GameState.rangerCardOptions) return
    isRotated.value = rotate
    rotation.value = withSpring(isRotated.value ? -90 : 0, springConfig)
  }
  const flipCard = (flip: boolean) => {
    if (!enemy) return
    if (gameState === GameState.rangerBattle) return
    if (gameState === GameState.rangerCardOptions) return
    isFlipped.value = flip
    flipRotation.value = withTiming(isFlipped.value ? 180 : 0, flipConfig)
  }

  // FIXME: dis will not be needed
  const longPressGesture = Gesture.Tap().onStart(() => {
    handleBattleTarget()
  })

  const gesture = Gesture.Exclusive(longPressGesture)

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(Math.abs(rotation.value), [0, 90], [1, 0.8], 'clamp')

    return {
      transform: [
        { perspective: 1000 },
        { scale },
        { rotateZ: `${rotation.value}deg` },
        { rotateY: `${flipRotation.value}deg` },
      ],
      opacity: 1,
      zIndex:
        gameState === GameState.selectedEnemy
          ? 10
          : !selectedEnemy
            ? 0
            : selectedEnemy.name === enemy?.name && index === selectedEnemyIndex
              ? 10
              : 0,
      backfaceVisibility: 'hidden',
    }
  }, [rotation, flipRotation, selectedEnemy, selectedEnemyIndex, gameState])

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
    setSelectedEnemy(enemy, index, row)
    if (gameState !== GameState.selectedEnemy) {
      showUI(GameState.enemyCardOptions)
      return
    }

    showUI(GameState.rangerBattle)
  }

  useEffect(() => {
    flipCard(enemy?.defeated ?? false)
    rotateCard(enemy?.activated ?? false)
    hideUI()
  }, [enemy])

  return (
    <GestureDetector gesture={gesture}>
      <Stack width={width} height={height}>
        {/* Front of card */}
        <AnimatedStack
          disabled={
            !selectedEnemy
              ? false
              : selectedEnemy.name === enemy?.name && selectedEnemyIndex === index
          }
          style={animatedStyle}
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
