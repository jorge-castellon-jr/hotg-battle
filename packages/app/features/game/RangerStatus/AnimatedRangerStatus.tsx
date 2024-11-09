import React from 'react'
import { Button, Sheet, Text, XStack, YStack, styled } from 'tamagui'
import { RangerStatusCard } from './RangerStatusCard'
import useGameStore, { GameState, Turn } from '../gameStateStore'
import { DrawButton } from './DrawButton'
import { rangerColors } from '../utils/colors'
import { RangerDecks } from '../GameTypes'

// Styled components with animation configurations
const AnimatedContainer = styled(YStack, {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '$2',
  backgroundColor: '$background',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

const DrawButtonsContainer = styled(XStack, {
  gap: '$2',
  variants: {
    isVisible: {
      true: {
        height: 44,
        marginBottom:"$2"
      },
      false: {
        height: 0,
      },
    },
  } as const,
})

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

  const canDraw = (gameState === GameState.draw || !setupCompleted) && turn === Turn.player

  return (
    <AnimatedContainer animation="quick">
      <DrawButtonsContainer animation="quick" isVisible={canDraw}>
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
      </DrawButtonsContainer>

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
    </AnimatedContainer>
  )
}
