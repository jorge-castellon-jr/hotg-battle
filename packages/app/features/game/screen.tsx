import React from 'react'
import PlayCardModal from './Card/components/PlayCardModal'
import useGameStore from './gameState'
import TopBar from './components/TopBar'
import EnemyRow from './components/EnemyRow'
import RangerHand from './components/RangerHand'
import RangerStatusOverview from './components/RangerStatusOverview'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, enemies, enemyDeck, energy, turn } = useGameStore()

  return (
    <>
      <TopBar
        currentTurn={turn === 'rangers' ? "Ranger's Turn" : "Enemy's Turn"}
        turn={0}
        onHistoryRequest={() => { }}
      />
      <EnemyRow enemies={enemyDeck} />
      <RangerHand hand={hand} onPlayCard={() => { }} />
      <RangerStatusOverview rangers={rangerDecks} />

      {/* Play Card Modal */}
      <PlayCardModal />
    </>
  )
}

export default GameScreen
