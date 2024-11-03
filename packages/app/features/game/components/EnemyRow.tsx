import React from 'react'
import { YStack, XStack, useWindowDimensions } from 'tamagui'
import { EnemyCard as EnemyCardData } from '../Card/CardTypes'
import AnimatedEnemyCard from '../Card/components/AnimatedEnemyCard'

interface EnemyRowProps {
  enemies: EnemyCardData[]
}

const EnemyRow: React.FC<EnemyRowProps> = ({ enemies }) => {
  const { width: windowWidth } = useWindowDimensions()
  const [mountedEnemies] = React.useState(new Set())

  // Calculate card sizes
  const totalHorizontalPadding = 32
  const totalGaps = 24
  const availableWidth = windowWidth - totalHorizontalPadding - totalGaps
  const cardWidth = Math.floor(availableWidth / 4)
  const cardHeight = Math.floor(cardWidth * 1.5)

  // Create arrays for both rows
  const backRowSlots = Array(4).fill(undefined)
  const frontRowSlots = Array(4).fill(undefined)

  // Fill slots with enemies
  enemies.forEach((enemy, index) => {
    if (index < 4) {
      frontRowSlots[index] = enemy
    } else if (index < 8) {
      backRowSlots[index - 4] = enemy
    }
  })

  return (
    <YStack padding="$4" gap="$2" width="100%">
      {/* Back row */}
      <XStack justifyContent="center" gap="$2" width="100%">
        {backRowSlots.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`back-${index}-${enemy?.id || 'empty'}`}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
          />
        ))}
      </XStack>

      {/* Front row */}
      <XStack justifyContent="center" gap="$2" width="100%">
        {frontRowSlots.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`front-${index}-${enemy?.id || 'empty'}`}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
          />
        ))}
      </XStack>
    </YStack>
  )
}

export default EnemyRow
