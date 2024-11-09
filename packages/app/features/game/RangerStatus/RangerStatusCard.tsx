import React from 'react'
import { XStack, YStack, Text } from 'tamagui'
import { Ranger } from '../GameTypes'
import { rangerColors } from '../utils/colors'
import { Layers, Star, StarOff, Zap, ZapOff } from 'lucide-react'
import DiscardIcon from './DiscardIcon'

interface RangerStatusCardProps {
  ranger: Ranger
  onPress: () => void
}

export const RangerStatusCard: React.FC<RangerStatusCardProps> = ({ ranger, onPress }) => {
  const [firstName] = ranger.name.split(' ')
  return (
    <YStack flex={1} flexBasis="100%" borderRadius="$4" onPress={onPress}>
      <YStack
        flex={1}
        backgroundColor={rangerColors[ranger.color]}
        borderRadius="$4"
        padding="$2"
        gap="$1"
        zIndex={1}
      >
        <Text color="white" fontSize="$3" fontWeight="bold" textAlign="center">
          {firstName}
        </Text>

        <XStack justifyContent="space-between">
          <XStack gap="$2">
            <XStack gap="$1">
              <Layers color="white" size={16} />
              <Text color="white" fontSize="$2">
                {ranger.cards.length}
              </Text>
            </XStack>
            <XStack gap="$1">
              <DiscardIcon color="white" size={16} />
              <Text color="white" fontSize="$2">
                {ranger.cards.length}
              </Text>
            </XStack>
          </XStack>

          <XStack gap="$1">
            <Text color="white" fontSize="$2" opacity={ranger.energyUsed ? 0.5 : 1}>
              {ranger.energyUsed ? <ZapOff size={16} /> : <Zap size={16} />}
            </Text>
            <Text color="white" fontSize="$2" opacity={ranger.abilityUsed ? 0.5 : 1}>
              {ranger.abilityUsed ? <StarOff size={16} /> : <Star size={16} />}
            </Text>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
}
