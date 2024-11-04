import React from 'react'
import { XStack, YStack, Text, Button } from 'tamagui'
import { Ranger } from '../GameTypes'
import { rangerColors } from '../utils/colors'

interface RangerStatusCardProps {
  ranger: Ranger
  onDrawCard: (position: 'left' | 'middle' | 'right') => void
}

export const RangerStatusCard: React.FC<RangerStatusCardProps> = ({ ranger, onDrawCard }) => {
  return (
    <YStack
      flex={1}
      backgroundColor={rangerColors[ranger.color]}
      borderRadius="$4"
      padding="$2"
      gap="$1"
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

      {/* <Button */}
      {/*   size="$2" */}
      {/*   backgroundColor="transparent" */}
      {/*   borderColor="white" */}
      {/*   borderWidth={1} */}
      {/*   onPress={() => onDrawCard(position)} */}
      {/* > */}
      {/*   <Text color="white" fontSize="$2"> */}
      {/*     Draw */}
      {/*   </Text> */}
      {/* </Button> */}
    </YStack>
  )
}
