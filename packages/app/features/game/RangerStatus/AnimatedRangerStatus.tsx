// AnimatedRangerStatus/index.tsx
import React from 'react'
import { XStack, YStack } from 'tamagui'
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated'
import { RangerStatusCard } from './RangerStatusCard'
import useGameStore from '../gameStateStore'
import { DrawButton } from './DrawButton'
import { rangerColors } from '../utils/colors'
import { RangerDecks } from '../GameTypes'

const AnimatedXStack = Animated.createAnimatedComponent(XStack)

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

interface RangerStatusProps {
  rangers: RangerDecks
}

export const AnimatedRangerStatus: React.FC<RangerStatusProps> = ({ rangers }) => {
  const { drawCard, canDraw, playedCard } = useGameStore()
  const translateY = useSharedValue(0)
  const drawTranslateY = useSharedValue(0)

  React.useEffect(() => {
    translateY.value = withSpring(
      playedCard ? 75 : 0, // Move 200 units down when not visible
      SPRING_CONFIG
    )
  }, [playedCard])
  React.useEffect(() => {
    drawTranslateY.value = withSpring(
      canDraw ? -69 : 69, // Move 200 units down when not visible
      SPRING_CONFIG
    )
  }, [canDraw])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  }, [translateY])

  const drawAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: drawTranslateY.value }],
    }
  }, [drawTranslateY])

  return (
    <>
      <AnimatedXStack
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        width="100%"
        backgroundColor="$background"
        borderTopWidth={1}
        borderTopColor="$borderColor"
        padding="$2"
        justifyContent="space-between"
        style={drawAnimatedStyle}
      >
        {Object.entries(rangers).map(([position, ranger]) => (
          <YStack flexBasis="32.5%">
            <DrawButton
              key={position}
              onPress={() => drawCard(position as 'left' | 'middle' | 'right')}
              color={rangerColors[ranger.color]}
            />
          </YStack>
        ))}
      </AnimatedXStack>

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
          <RangerStatusCard key={position} ranger={ranger} />
        ))}
      </AnimatedXStack>
    </>
  )
}
