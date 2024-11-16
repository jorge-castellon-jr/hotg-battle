import React, { useEffect } from 'react'
import { YStack, XStack, useWindowDimensions } from 'tamagui'
import AnimatedEnemyCard from '../Card/AnimatedEnemyCard'
import useGameStore from '../gameStateStore'
import { checkEnemyGuardStatus } from '../Enemy/enemyGaurdState'

const EnemyRow = () => {
  const { width: windowWidth } = useWindowDimensions()

  // Calculate card sizes
  const totalHorizontalPadding = 32
  const totalGaps = 24
  const availableWidth = windowWidth - totalHorizontalPadding - totalGaps
  const cardWidth = Math.min(120, Math.floor(availableWidth / 4))
  const cardHeight = Math.floor(cardWidth * 1.5)

  const { setupCompleted, enemySetupCompleted, setupEnemy, enemyCards } = useGameStore()
  React.useEffect(() => {
    if (!setupCompleted || enemySetupCompleted) return

    setupEnemy()
  }, [setupCompleted])

  const isGuarded = (row: 'top' | 'bottom', index: number): boolean => {
    return checkEnemyGuardStatus(enemyCards, row, index)
  }

  return (
    <YStack padding="$1" gap="$2">
      {/* Back row */}
      <XStack justifyContent="center" gap="$2">
        {enemyCards.top.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`back-${index}-${enemy ? enemy.name : 'empty'}`}
            index={index}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
            row="top"
            isGuarded={isGuarded('top', index)}
          />
        ))}
      </XStack>

      {/* Front row */}
      <XStack justifyContent="center" gap="$2">
        {enemyCards.bottom.map((enemy, index) => (
          <AnimatedEnemyCard
            key={`front-${index}-${enemy ? enemy.name : 'empty'}`}
            index={index}
            enemy={enemy}
            width={cardWidth}
            height={cardHeight}
            row="bottom"
            isGuarded={isGuarded('bottom', index)}
          />
        ))}
      </XStack>
    </YStack>
  )
}

export default EnemyRow
