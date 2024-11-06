import React from 'react'
import { YStack, XStack, useWindowDimensions } from 'tamagui'
import AnimatedEnemyCard from '../Card/components/AnimatedEnemyCard'
import useGameStore, { GameState } from '../gameStateStore'

interface EnemyRowProps {
  enemies: GameState['enemies']
}

const EnemyRow: React.FC<EnemyRowProps> = ({ enemies }) => {
  const { width: windowWidth } = useWindowDimensions()

  // Calculate card sizes
  const totalHorizontalPadding = 32
  const totalGaps = 24
  const availableWidth = windowWidth - totalHorizontalPadding - totalGaps
  const cardWidth = Math.min(100, Math.floor(availableWidth / 4))
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

  const { turn, setupEnemy } = useGameStore()
  React.useEffect(() => {
    if (turn !== 'enemySetup') return

    setupEnemy('Putty Patrollers', 'Evil Green Ranger')
  }, [turn])

  return (
    <YStack padding="$2" gap="$2">
      {/* Back row */}
      <XStack justifyContent="center" gap="$2">
        {backRowSlots.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`back-${index}-${enemy ? enemy.name : 'empty'}`}
            index={index}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
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
          />
        ))}
      </XStack>
    </YStack>
  )
}

export default EnemyRow
