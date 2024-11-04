import React from 'react'
import { YStack } from 'tamagui'
import useGameStore from './gameState'
import TopBar from './components/TopBar'
import EnemyRow from './components/EnemyRow'
import RangerHand from './RangerHand/components/RangerHand'
import RangerStatusOverview from './RangerStatus/RangerStatusOverview'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, enemies, enemyDeck, energy, turn } = useGameStore()

  return (
    <YStack flex={1} backgroundColor="$background" position="relative" overflow="hidden">
      {/* Top Section */}
      <TopBar
        currentTurn={turn === 'rangers' ? "Ranger's Turn" : "Enemy's Turn"}
        turn={0}
        onHistoryRequest={() => { }}
      />

      {/* Enemy Section */}
      <EnemyRow enemies={enemies} />

      {/* Hand Section */}
      <RangerHand hand={hand} />

      {/* Ranger Status - Fixed at bottom */}
      <RangerStatusOverview rangers={rangerDecks} />
    </YStack>
  )
}

export default GameScreen
