import React from 'react'
import { YStack } from 'tamagui'
import useGameStore, { Turn } from './gameStateStore'
import TopBar from './components/TopBar'
import EnemyRow from './components/EnemyRow'
import RangerHand from './RangerHand/components/RangerHand'
import RangerStatusOverview from './RangerStatus/RangerStatusOverview'
import { BattleSequence } from './Battle/components/BattleSequence'
import { UiOverlay } from './UI/UiOverlay'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, enemies, turn } = useGameStore()

  return (
    <YStack flex={1} backgroundColor="$background" position="relative" overflow="hidden">
      {/* Top Section */}
      <TopBar
        currentTurn={turn === Turn.player ? "Ranger's Turn" : "Enemy's Turn"}
        turn={0}
        onHistoryRequest={() => { }}
      />

      <BattleSequence />

      {/* Enemy Section */}
      <EnemyRow enemies={enemies} />

      {/* Hand Section */}
      <RangerHand hand={hand} />

      {/* Ranger Status - Fixed at bottom */}
      <RangerStatusOverview rangers={rangerDecks} />
      <UiOverlay />
    </YStack>
  )
}

export default GameScreen
