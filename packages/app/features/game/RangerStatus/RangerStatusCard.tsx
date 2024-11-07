import React from 'react'
import { XStack, YStack, Text, Stack } from 'tamagui'
import { Ranger } from '../GameTypes'
import { rangerColors } from '../utils/colors'

interface RangerStatusCardProps {
  ranger: Ranger
  onPress: () => void
}

export const RangerStatusCard: React.FC<RangerStatusCardProps> = ({ ranger, onPress }) => {
  return (
    <YStack flexBasis="32.5%" borderRadius="$4" onPress={onPress}>
      <YStack
        flex={1}
        backgroundColor={rangerColors[ranger.color]}
        borderRadius="$4"
        padding="$2"
        gap="$1"
        zIndex={1}
      >
        <XStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="$3" fontWeight="bold">
            {ranger.name}
          </Text>
          <Text color="white" fontSize="$2">
            {ranger.cards.length}
          </Text>
        </XStack>

        <XStack gap="$2" justifyContent="space-between">
          <Text color="white" fontSize="$2" opacity={ranger.energyUsed ? 0.5 : 1}>
            ⚡
          </Text>
          <Text color="white" fontSize="$2" opacity={ranger.abilityUsed ? 0.5 : 1}>
            ⭐
          </Text>
        </XStack>
      </YStack>
    </YStack>
  )
}
