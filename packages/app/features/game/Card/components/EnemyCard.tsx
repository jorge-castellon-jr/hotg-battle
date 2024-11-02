import React from 'react'
import { Text, Stack, YStack } from 'tamagui'
import { EnemyCard as EnemyCardData } from '../types'

interface EnemyCardProps {
  enemy: EnemyCardData
}

const EnemyCard: React.FC<EnemyCardProps> = ({ enemy }) => {
  return (
    <YStack
      width={100}
      height={150}
      backgroundColor="$background"
      borderRadius="$4"
      padding="$2"
      alignItems="center"
      hoverStyle={{
        scale: 1.05,
      }}
    >
      <Text fontSize="$4" fontWeight="bold">
        {enemy.name}
      </Text>
      <Text fontSize="$2" color="$color">
        {enemy.type}
      </Text>
      <Text fontSize="$2" color="$color">
        Health: {enemy.health}
      </Text>
    </YStack>
  )
}

export default EnemyCard
