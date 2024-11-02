import React from 'react'
import { YStack, XStack } from 'tamagui'
import { EnemyCard as EnemyCardData } from '../Card/CardTypes'
import EnemyCard from '../Card/components/EnemyCard'

interface EnemyRowProps {
  enemies: EnemyCardData[]
}

const EnemyRow: React.FC<EnemyRowProps> = ({ enemies }) => {
  // Create arrays of length 4 for both rows, filling with undefined for empty slots
  const backRowSlots = Array(4).fill(undefined)
  const frontRowSlots = Array(4).fill(undefined)

  // Fill slots with actual enemies
  enemies.forEach((enemy, index) => {
    if (index < 4) {
      frontRowSlots[index] = enemy
    } else if (index < 8) {
      backRowSlots[index - 4] = enemy
    }
  })

  return (
    <YStack padding="$4" gap="$4">
      {/* Back row */}
      <XStack justifyContent="center" gap="$4">
        {backRowSlots.map((enemy, index) => (
          <YStack
            key={enemy?.id || `back-empty-${index}`}
            animation="lazy"
            enterStyle={{
              opacity: 0,
              scale: 0.9,
              y: -20,
            }}
            exitStyle={{
              opacity: 0,
              scale: 0.9,
              y: -20,
            }}
          >
            <EnemyCard enemy={enemy} />
          </YStack>
        ))}
      </XStack>

      {/* Front row */}
      <XStack justifyContent="center" gap="$4">
        {frontRowSlots.map((enemy, index) => (
          <YStack
            key={enemy?.id || `front-empty-${index}`}
            animation="lazy"
            enterStyle={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            exitStyle={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
          >
            <EnemyCard enemy={enemy} />
          </YStack>
        ))}
      </XStack>
    </YStack>
  )
}

export default EnemyRow
