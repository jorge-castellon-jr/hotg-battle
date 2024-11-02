import { Stack, XStack, YStack, Text } from 'tamagui'
import { Heart, Sword } from 'lucide-react'
import { EnemyCard as EnemyCardType } from '../CardTypes'

interface EnemyCardProps {
  enemy: EnemyCardType
}

const EnemyCard = ({ enemy }: EnemyCardProps) => {
  const getColorByType = (type: string) => {
    switch (type) {
      case 'fast':
        return '#ff9944'
      case 'guard':
        return '#44bbff'
      case 'basic':
        return '#aaaaaa'
      case 'passive':
        return '#44ffaa'
      default:
        return '#ffffff'
    }
  }

  return (
    <Stack
      width={180}
      height={260}
      backgroundColor="$background"
      borderRadius="$6"
      overflow="hidden"
      borderWidth={2}
      borderColor={getColorByType(enemy.type)}
      pressStyle={{ scale: 0.98 }}
    >
      {/* Card Header */}
      <XStack
        backgroundColor={getColorByType(enemy.type)}
        padding="$2"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="white" fontSize="$4" fontWeight="bold">
          {enemy.name}
        </Text>
      </XStack>

      {/* Enemy Type */}
      <XStack
        padding="$2"
        backgroundColor="$gray2"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="$3" color="$gray11" textTransform="capitalize">
          {enemy.type}
        </Text>
      </XStack>

      {/* Stats */}
      <YStack padding="$3" gap="$2">
        <XStack gap="$2" alignItems="center" justifyContent="center">
          <Heart size={20} color={getColorByType(enemy.type)} />
          <Text fontSize="$5" fontWeight="bold">
            {enemy.health}
          </Text>
        </XStack>

        {enemy.attack && (
          <XStack gap="$2" alignItems="center" justifyContent="center">
            <Sword size={20} />
            <Text fontSize="$4">{enemy.attack.value}</Text>
          </XStack>
        )}
      </YStack>

      {/* Description */}
      <YStack flex={1} padding="$3">
        <Text fontSize="$3" textAlign="center">
          {enemy.text}
        </Text>
      </YStack>

      {/* Footer */}
      <XStack padding="$2" backgroundColor="$gray2" justifyContent="flex-end">
        <Text fontSize="$2" color="$gray11">
          {enemy.owner}
        </Text>
      </XStack>
    </Stack>
  )
}

export default EnemyCard
