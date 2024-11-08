import React, { useState } from 'react'
import { Button, Sheet, Text, XStack, YStack } from 'tamagui'
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated'
import { RangerStatusCard } from './RangerStatusCard'
import useGameStore, { GameState, Turn } from '../gameStateStore'
import { DrawButton } from './DrawButton'
import { rangerColors } from '../utils/colors'
import { RangerDecks } from '../GameTypes'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

interface RangerStatusProps {
  rangers: RangerDecks
}

export const AnimatedRangerStatus: React.FC<RangerStatusProps> = ({ rangers }) => {
  const {
    drawCard,
    turn,
    setupCompleted,
    gameState,
    playedCard,
    showRangerInfo,
    setSelectedPosition,
  } = useGameStore()
  const translateY = useSharedValue(0)
  const drawTranslateY = useSharedValue(0)

  React.useEffect(() => {
    translateY.value = withSpring(
      playedCard ? 75 : 0, // Move 200 units down when not visible
      SPRING_CONFIG
    )
  }, [playedCard])

  const canDraw = (gameState === GameState.draw || !setupCompleted) && turn === Turn.player
  React.useEffect(() => {
    drawTranslateY.value = withSpring(
      canDraw ? -69 : 69, // Move 200 units down when not visible
      SPRING_CONFIG
    )
  }, [gameState, turn, setupCompleted])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  }, [translateY])

  return (
    <>
      <AnimatedYStack
        position="absolute"
        bottom={0}
        width="100%"
        padding="$2"
        gap="$2"
        backgroundColor="$background"
        borderTopWidth={1}
        borderTopColor="$borderColor"
        style={animatedStyle}
      >
        {canDraw && (
          <XStack gap="$2">
            {Object.entries(rangers).map(([position, ranger]) => (
              <YStack key={`${position}-draw`} flex={1} flexBasis="100%">
                <DrawButton
                  key={position}
                  onPress={() => {
                    setSelectedPosition(position as 'left' | 'middle' | 'right')
                    drawCard()
                  }}
                  color={rangerColors[ranger.color]}
                />
              </YStack>
            ))}
          </XStack>
        )}

        <XStack gap="$2">
          {Object.entries(rangers).map(([position, ranger]) => (
            <RangerStatusCard
              key={position}
              ranger={ranger}
              onPress={() => {
                showRangerInfo(position as 'left' | 'middle' | 'right')
              }}
            />
          ))}
        </XStack>
      </AnimatedYStack>
    </>
  )
}
