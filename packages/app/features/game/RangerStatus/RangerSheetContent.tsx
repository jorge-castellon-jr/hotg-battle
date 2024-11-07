import React from 'react'
import { Stack, Text, XStack, YStack } from 'tamagui'
import { Ranger } from '../GameTypes'
import { Layers, ZapOff, Zap, Star, StarOff, BookOpen } from 'lucide-react'
import { rangerColors } from '../utils/colors'

interface RangerSheetContentProps {
  ranger: Ranger
}

const RangerSheetContent = ({ ranger }: RangerSheetContentProps) => {
  const StatBox = ({
    icon: Icon,
    value,
    used = false,
    label,
  }: {
    icon: typeof Layers
    value: number
    used?: boolean
    label: string
  }) => (
    <YStack
      backgroundColor="$gray3"
      borderRadius="$4"
      padding="$3"
      alignItems="center"
      gap="$1"
      flex={1}
    >
      <Icon
        size={24}
        color={used ? 'var(--gray8)' : `var(--${ranger.color}9)`}
        opacity={used ? 0.5 : 1}
      />
      <Text fontSize="$6" fontWeight="bold" color={used ? '$gray8' : `$${ranger.color}9`}>
        {value}
      </Text>
      <Text fontSize="$2" color="$gray11">
        {label}
      </Text>
    </YStack>
  )

  return (
    <YStack padding="$4" gap="$4">
      {/* Header with Ranger info */}
      <YStack backgroundColor={rangerColors[ranger.color]} padding="$4" borderRadius="$4" gap="$2">
        <Text fontSize="$8" fontWeight="bold" color="white">
          {ranger.name}
        </Text>
        <Text fontSize="$4" color="white" opacity={0.8} textTransform="capitalize">
          {ranger.team} {ranger.color} Ranger
        </Text>
      </YStack>

      {/* Ability Section */}
      <YStack backgroundColor="$gray3" padding="$4" borderRadius="$4" gap="$2">
        <Text fontSize="$5" fontWeight="bold" color={`$${ranger.color}9`}>
          {ranger.ability.name}
        </Text>
        <Text fontSize="$3" color="$gray11">
          {ranger.ability.text}
        </Text>
      </YStack>

      {/* Stats Grid */}
      <XStack gap="$2" flexWrap="wrap">
        <StatBox icon={Layers} value={ranger.cards.length} label="Deck" />
        <StatBox icon={BookOpen} value={ranger.discard.length} label="Discard" />
        <StatBox
          icon={ranger.energyUsed ? ZapOff : Zap}
          value={1}
          used={ranger.energyUsed}
          label="Energy"
        />
        <StatBox
          icon={ranger.abilityUsed ? StarOff : Star}
          value={1}
          used={ranger.abilityUsed}
          label="Ability"
        />
      </XStack>
    </YStack>
  )
}

export default RangerSheetContent
