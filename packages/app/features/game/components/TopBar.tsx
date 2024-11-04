import React from 'react'
import { Text, YStack } from 'tamagui'

interface GameTitleProps {
  currentTurn: string
  turn: number
  onHistoryRequest: () => void
}

const GameTitle: React.FC<GameTitleProps> = ({ currentTurn, turn, onHistoryRequest }) => {
  return (
    <YStack
      alignItems="center"
      padding="$4"
      backgroundColor="$background"
      onPressIn={onHistoryRequest}
    >
      <Text fontSize="$6" fontWeight="bold">
        {currentTurn}
      </Text>
      <Text fontSize="$3" color="$colorHover">
        Turn {turn}
      </Text>
    </YStack>
  )
}

export default GameTitle
