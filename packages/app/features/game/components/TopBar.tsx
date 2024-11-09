import React from 'react'
import { Text, YStack } from 'tamagui'

interface GameTitleProps {
  title: string
  subtext?: string
  onPress?: () => void
}

const GameTitle: React.FC<GameTitleProps> = ({ title, subtext, onPress: onPress }) => {
  return (
    <YStack alignItems="center" padding="$4" backgroundColor="$background" onPress={onPress}>
      <Text fontSize="$6" fontWeight="bold">
        {title}
      </Text>
      {subtext && (
        <Text fontSize="$3" color="$colorHover">
          {subtext}
        </Text>
      )}
    </YStack>
  )
}

export default GameTitle
