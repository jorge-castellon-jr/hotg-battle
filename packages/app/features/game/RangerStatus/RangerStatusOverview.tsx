import React from 'react'
import { RangerDecks } from '../GameTypes'
import useGameStore from '../gameState'
import { AnimatedRangerStatus } from './AnimatedRangerStatus'

interface RangerStatusOverviewProps {
  rangers: RangerDecks
}

const RangerStatusOverview: React.FC<RangerStatusOverviewProps> = ({ rangers }) => {
  const { playedCard } = useGameStore()

  return <AnimatedRangerStatus rangers={rangers} isVisible={!playedCard} />
}

export default RangerStatusOverview
