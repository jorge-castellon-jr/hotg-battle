import React, { useCallback } from 'react'
import { Stack, Text, YStack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import useGameStore, { GameState } from '../gameStateStore'
import { AttackSequence } from './AttackSequence'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

export const EnemyBattleSequence = () => {
  const [currentAttackIndex, setCurrentAttackIndex] = React.useState(0)
  const [isRolling, setIsRolling] = React.useState(false)
  const [rollComplete, setRollComplete] = React.useState(false)

  const opacity = useSharedValue(0)
  const translateY = useSharedValue(100)

  const { gameState, selectedEnemy, exitBattleMode, markEnemyAsActivated } = useGameStore()

  const attacks = selectedEnemy?.attacks || []
  const currentAttack = attacks[currentAttackIndex]

  React.useEffect(() => {
    if (gameState === GameState.enemyBattle) {
      opacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.ease,
      })
      translateY.value = withSpring(0, SPRING_CONFIG)

      setCurrentAttackIndex(0)
      setIsRolling(false)
      setRollComplete(false)
    } else {
      opacity.value = withTiming(0)
      translateY.value = withSpring(100, SPRING_CONFIG)
    }
  }, [gameState])

  const overlayStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
    }),
    [opacity]
  )

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    }),
    [translateY, opacity]
  )

  const handleNextAttack = useCallback(() => {
    if (currentAttackIndex < attacks.length - 1) {
      setCurrentAttackIndex((prev) => prev + 1)
      setIsRolling(false)
      setRollComplete(false)
    } else {
      requestAnimationFrame(() => {
        markEnemyAsActivated()
        exitBattleMode()
      })
    }
  }, [currentAttackIndex, attacks.length, markEnemyAsActivated, exitBattleMode])

  if (gameState !== GameState.enemyBattle || !selectedEnemy) return null

  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
    >
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          overlayStyle,
        ]}
      />

      <AnimatedYStack
        width={350}
        borderRadius="$6"
        justifyContent="center"
        alignItems="center"
        gap={20}
        padding="$5"
        zIndex={100}
        backgroundColor="$background"
        style={animatedStyle}
      >
        <Text color="$red9" fontSize={24} fontWeight="bold">
          {selectedEnemy.name} Attacks!
        </Text>

        <AttackSequence
          attack={currentAttack}
          isRolling={isRolling}
          setIsRolling={setIsRolling}
          rollComplete={rollComplete}
          setRollComplete={setRollComplete}
          onComplete={handleNextAttack}
        />

        <Text fontSize={14} color="$gray11">
          Attack {currentAttackIndex + 1} of {attacks.length}
        </Text>
      </AnimatedYStack>
    </Stack>
  )
}
