import React from 'react'
import { Stack, XStack, YStack, Text } from 'tamagui'
import { Shield, Sword, Zap } from 'lucide-react'
import { RangerCard } from '../CardTypes'
import { rangerColors } from '../../utils/colors'

interface RangerCardProps {
  card: RangerCard
  onPlayCard: (card: RangerCard) => void
}

const RangerCard = ({ card, onPlayCard }: RangerCardProps) => {
  return (
    <Stack
      width={140}
      height={200}
      backgroundColor="$background"
      borderRadius="$6"
      overflow="hidden"
      borderWidth={2}
      borderColor={rangerColors[card.color]}
      pressStyle={{ scale: 0.98 }}
      onPress={() => onPlayCard(card)}
    >
      {/* Card Header */}
      <XStack
        backgroundColor={rangerColors[card.color]}
        padding="$2"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="white" fontSize="$3" fontWeight="bold">
          {card.name}
        </Text>
        <XStack alignItems="center" gap="$1">
          <Shield size={14} color="white" />
          <Text color="white" fontSize="$2">
            {card.shields}
          </Text>
        </XStack>
      </XStack>

      {/* Card Type */}
      <XStack padding="$1" backgroundColor="$gray2" alignItems="center" gap="$2">
        <Text fontSize="$2" color="$gray11">
          {card.type.toUpperCase()}
        </Text>
        {card.attack && (
          <XStack gap="$1" alignItems="center">
            <Sword size={14} />
            <Text fontSize="$2">{card.attack.value}</Text>
          </XStack>
        )}
      </XStack>

      {/* Card Content */}
      <YStack flex={1} padding="$2" gap="$1">
        <Text fontSize="$2" textAlign="center">
          {card.text}
        </Text>

        {/* Effects Section */}
        {card.effects && card.effects.length > 0 && (
          <YStack gap="$1">
            {card.effects.map((effect, index) => (
              <XStack
                key={index}
                backgroundColor="$gray2"
                padding="$1"
                borderRadius="$2"
                alignItems="center"
                gap="$1"
              >
                <Zap size={12} />
                <Text fontSize="$1" flex={1}>
                  {effect.description}
                </Text>
              </XStack>
            ))}
          </YStack>
        )}
      </YStack>

      {/* Card Footer */}
      <XStack padding="$1" backgroundColor="$gray2" justifyContent="flex-end">
        <Text fontSize="$1" color="$gray11">
          {card.owner}
        </Text>
      </XStack>
    </Stack>
  )
}

export default RangerCard
