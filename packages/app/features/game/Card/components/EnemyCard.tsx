import React from 'react'
import { Stack, XStack, YStack, Text } from 'tamagui'
import { Heart, Sword } from 'lucide-react'
import { EnemyCard as EnemyCardType } from '../CardTypes'
import { enemyColors } from '../../utils/colors'

interface EnemyCardProps {
  enemy?: EnemyCardType
  width: number
  height: number
}

const EnemyCard = ({ enemy, width, height }: EnemyCardProps) => {
  // Calculate responsive sizes based on card dimensions
  const headerPadding = Math.max(4, Math.floor(width * 0.03))
  const fontSize = {
    small: Math.max(10, Math.floor(width * 0.06)),
    medium: Math.max(12, Math.floor(width * 0.08)),
    large: Math.max(14, Math.floor(width * 0.1)),
  }
  const iconSize = Math.max(12, Math.floor(width * 0.1))

  // If no enemy, render an empty slot
  if (!enemy) {
    return (
      <Stack
        width={width}
        height={height}
        backgroundColor="$gray3"
        borderRadius="$4"
        borderWidth={2}
        borderColor="$gray6"
        borderStyle="dashed"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$gray8" fontSize={fontSize.medium}>
          Empty Slot
        </Text>
      </Stack>
    )
  }

  return (
    <Stack
      width={width}
      height={height}
      backgroundColor="$background"
      borderRadius="$4"
      overflow="hidden"
      borderWidth={2}
      borderColor={enemyColors[enemy.enemyType]}
      pressStyle={{ scale: 0.98 }}
    >
      {/* Card Header */}
      <XStack
        backgroundColor={enemyColors[enemy.enemyType]}
        padding={headerPadding}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="white" fontSize={fontSize.small} fontWeight="bold">
          {enemy.name}
        </Text>
      </XStack>

      {/* Enemy Type */}
      {enemy.type !== 'basic' && (
        <XStack
          padding={headerPadding}
          backgroundColor="$gray2"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize={fontSize.small} color="$gray11" textTransform="capitalize">
            {enemy.type}
          </Text>
        </XStack>
      )}

      {/* Stats */}
      <YStack padding={headerPadding} gap="$1" justifyContent='center' alignItems='center'>
        <XStack gap="$1" alignItems="center" justifyContent="center">
          <Heart size={iconSize} color={enemyColors[enemy.enemyType]} />
          <Text fontSize={fontSize.large} fontWeight="bold">
            {enemy.health}
          </Text>
        </XStack>

        {enemy.attack && (
          <XStack gap="$1" alignItems="center" justifyContent="center">
            <Sword size={iconSize} />
            <Text fontSize={fontSize.medium}>{enemy.attack.value}</Text>
          </XStack>
        )}
      </YStack>

      {/* Description */}
      <YStack flex={1} padding={headerPadding}>
        <Text fontSize={fontSize.small} textAlign="center" numberOfLines={2}>
          {enemy.text}
        </Text>
      </YStack>

      {/* Footer */}
      <XStack padding={headerPadding} backgroundColor="$gray2" justifyContent="flex-end">
        <Text fontSize={fontSize.small} color="$gray11">
          {enemy.owner}
        </Text>
      </XStack>
    </Stack>
  )
}

export default EnemyCard
