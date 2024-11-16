import React from 'react'
import useGameStore, { Turn } from './gameStateStore'
import TopBar from './components/TopBar'
import EnemyRow from './components/EnemyRow'
import RangerHand from './RangerHand/RangerHand'
import RangerStatusOverview from './RangerStatus/RangerStatusOverview'
import { UiOverlay } from './UI/UiOverlay'
import { AppContainer } from './components/AppContainer'
import { EnemyBattleSequence } from './Battle/EnemyBattleSequence'
import { RangerBattleSequence } from './Battle/RangerBattleSequence'
import { ClientOnly } from './components/ClientOnly'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, turn } = useGameStore()

  return (
    <ClientOnly>
      <AppContainer>
        <TopBar
          title={turn === Turn.player ? "Ranger's Turn" : "Enemy's Turn"}
          subtext={`Turn ${0}`}
          onPress={() => { }}
        />

        <EnemyRow />

        <RangerHand hand={hand} />
        <RangerStatusOverview rangers={rangerDecks} />
        <RangerBattleSequence />
        <EnemyBattleSequence />
        <UiOverlay />
      </AppContainer>
    </ClientOnly>
  )
}

export default GameScreen
