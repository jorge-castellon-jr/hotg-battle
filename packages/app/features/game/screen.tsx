import React from 'react'
import useGameStore, { Turn } from './gameStateStore'
import TopBar from './components/TopBar'
import EnemyRow from './components/EnemyRow'
import RangerHand from './RangerHand/RangerHand'
import RangerStatusOverview from './RangerStatus/RangerStatusOverview'
import { BattleSequence } from './Battle/BattleSequence'
import { UiOverlay } from './UI/UiOverlay'
import { AppContainer } from './components/AppContainer'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, enemies, turn } = useGameStore()

  return (
    <AppContainer>
      <TopBar
        currentTurn={turn === Turn.player ? "Ranger's Turn" : "Enemy's Turn"}
        turn={0}
        onHistoryRequest={() => { }}
      />

      <EnemyRow enemies={enemies} />

      <RangerHand hand={hand} />
      <RangerStatusOverview rangers={rangerDecks} />
      <BattleSequence />
      <UiOverlay />
    </AppContainer>
  )
}

export default GameScreen
