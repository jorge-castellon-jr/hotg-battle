import { Stack, XStack, YStack, Text } from 'tamagui'
import { Shield, Sword, Zap } from 'lucide-react'
import { RangerCard } from '../CardTypes'
import { colors } from '../../utils/colors'

interface RangerCardProps {
  card: RangerCard
  onPlayCard: (card: RangerCard) => void
}

const RangerCard = ({ card, onPlayCard }: RangerCardProps) => {
  // Get color based on ranger

  return (
    <Stack
      width={200}
      height={280}
      backgroundColor="$background"
      borderRadius="$6"
      overflow="hidden"
      borderWidth={2}
      borderColor={colors[card.color]}
      pressStyle={{ scale: 0.98 }}
      onPress={() => onPlayCard(card)}
    >
      {/* Card Header */}
      <XStack
        backgroundColor={colors[card.color]}
        padding="$2"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="white" fontSize="$4" fontWeight="bold">
          {card.name}
        </Text>
        <XStack alignItems="center" gap="$1">
          <Shield size={16} color="white" />
          <Text color="white" fontSize="$3">
            {card.shields}
          </Text>
        </XStack>
      </XStack>

      {/* Card Type */}
      <XStack padding="$2" backgroundColor="$gray2" alignItems="center" gap="$2">
        <Text fontSize="$3" color="$gray11">
          {card.type.toUpperCase()}
        </Text>
        {card.attack && (
          <XStack space="$1" alignItems="center">
            <Sword size={16} />
            <Text fontSize="$3">{card.attack.value}</Text>
          </XStack>
        )}
      </XStack>

      {/* Card Content */}
      <YStack flex={1} padding="$3" gap="$2">
        <Text fontSize="$3" textAlign="center">
          {card.text}
        </Text>

        {/* Effects Section */}
        {card.effects && card.effects.length > 0 && (
          <YStack gap="$2">
            {card.effects.map((effect, index) => (
              <XStack
                key={index}
                backgroundColor="$gray2"
                padding="$2"
                borderRadius="$2"
                alignItems="center"
                gap="$2"
              >
                <Zap size={16} />
                <Text fontSize="$2" flex={1}>
                  {effect.description}
                </Text>
              </XStack>
            ))}
          </YStack>
        )}
      </YStack>

      {/* Card Footer */}
      <XStack padding="$2" backgroundColor="$gray2" justifyContent="flex-end">
        <Text fontSize="$2" color="$gray11">
          {card.owner}
        </Text>
      </XStack>
    </Stack>
  )
}

export default RangerCard
