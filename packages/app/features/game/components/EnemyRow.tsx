import React from 'react'
import { YStack, XStack, useWindowDimensions } from 'tamagui'
import AnimatedEnemyCard from '../Card/AnimatedEnemyCard'
import useGameStore, { GameStoreState } from '../gameStateStore'

interface EnemyRowProps {
  enemies: GameStoreState['enemies']
}

const EnemyRow: React.FC<EnemyRowProps> = ({ enemies }) => {
  const { width: windowWidth } = useWindowDimensions()

  // Calculate card sizes
  const totalHorizontalPadding = 32
  const totalGaps = 24
  const availableWidth = windowWidth - totalHorizontalPadding - totalGaps
  const cardWidth = Math.min(120, Math.floor(availableWidth / 4))
  const cardHeight = Math.floor(cardWidth * 1.5)

  // Create arrays for both rows
  const backRowSlots = Array(4).fill(undefined)
  const frontRowSlots = Array(4).fill(undefined)

  // Fill slots with enemies
  enemies.top.forEach((enemy, index) => {
    backRowSlots[index] = enemy
  })
  enemies.bottom.forEach((enemy, index) => {
    frontRowSlots[index] = enemy
  })

  const { setupCompleted, enemySetupCompleted, setupEnemy } = useGameStore()
  React.useEffect(() => {
    if (!setupCompleted || enemySetupCompleted) return

    setupEnemy('Putty Patrollers', 'Evil Green Ranger')
  }, [setupCompleted])

  return (
    <YStack padding="$1" gap="$2">
      {/* Back row */}
      <XStack justifyContent="center" gap="$2">
        {backRowSlots.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`back-${index}-${enemy ? enemy.name : 'empty'}`}
            index={index}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
            row="top"
          />
        ))}
      </XStack>

      {/* Front row */}
      <XStack justifyContent="center" gap="$2">
        {frontRowSlots.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`front-${index}-${enemy ? enemy.name : 'empty'}`}
            index={index}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
            row="bottom"
          />
        ))}
      </XStack>
    </YStack>
  )
}

export default EnemyRow
