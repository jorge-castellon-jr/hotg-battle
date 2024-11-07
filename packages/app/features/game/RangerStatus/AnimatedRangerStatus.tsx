import React, { useState } from 'react'
import { Button, Sheet, Text, XStack, YStack } from 'tamagui'
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated'
import { RangerStatusCard } from './RangerStatusCard'
import useGameStore, { GameState, Turn } from '../gameStateStore'
import { DrawButton } from './DrawButton'
import { rangerColors } from '../utils/colors'
import { RangerDecks } from '../GameTypes'
import RangerSheetContent from './RangerSheetContent'

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
  const { drawCard, turn, setupCompleted, gameState, playedCard } = useGameStore()
  const translateY = useSharedValue(0)
  const drawTranslateY = useSharedValue(0)

  React.useEffect(() => {
    translateY.value = withSpring(
      playedCard ? 75 : 0, // Move 200 units down when not visible
      SPRING_CONFIG
    )
  }, [playedCard])

  React.useEffect(() => {
    const canDraw = (gameState === GameState.draw || !setupCompleted) && turn === Turn.player
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

  const drawAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: drawTranslateY.value }],
    }
  }, [drawTranslateY])

  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const [selectedRanger, setSelectedRanger] = useState<RangerDecks['left'] | null>(null)

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
          <YStack key={`${position}-draw`} flexBasis="32.5%">
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
          <RangerStatusCard
            key={position}
            ranger={ranger}
            onPress={() => {
              setOpen(true)
              setSelectedRanger(ranger)
            }}
          />
        ))}
      </AnimatedXStack>

      <Sheet
        modal
        animation="quick"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[70]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle bg="$gray8" />
        <Sheet.Frame ai="center" jc="flex-end" gap="$10" bg="$color2">
          {selectedRanger && <RangerSheetContent ranger={selectedRanger} />}

          <XStack padding="$2" width="100%">
            <Button
              flex={1}
              onPress={() => {
                setOpen(false)
              }}
            >
              Cancel
            </Button>
          </XStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
