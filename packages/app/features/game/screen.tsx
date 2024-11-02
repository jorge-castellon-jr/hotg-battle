import React from 'react'
import { YStack } from 'tamagui'
import useGameStore from './gameState'
import TopBar from './components/TopBar'
import EnemyRow from './components/EnemyRow'
import RangerHand from './RangerHand/components/RangerHand'
import RangerStatusOverview from './components/RangerStatusOverview'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, enemies, enemyDeck, energy, turn } = useGameStore()

  return (
    <YStack flex={1} backgroundColor="$background" position="relative" overflow="hidden">
      {/* Top Section */}
      <YStack paddingBottom="$2">
        <TopBar
          currentTurn={turn === 'rangers' ? "Ranger's Turn" : "Enemy's Turn"}
          turn={0}
          onHistoryRequest={() => { }}
        />
      </YStack>

      {/* Enemy Section */}
      <YStack flex={1} justifyContent="center">
        <EnemyRow enemies={enemyDeck} />
      </YStack>

      {/* Hand Section */}
      <YStack height={240} paddingBottom="$2">
        <RangerHand hand={hand} onPlayCard={() => { }} />
      </YStack>

      {/* Ranger Status - Fixed at bottom */}
      <RangerStatusOverview rangers={rangerDecks} />
    </YStack>
  )
}

export default GameScreen
