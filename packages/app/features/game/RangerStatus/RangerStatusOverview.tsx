import React from 'react'
import { RangerDecks } from '../GameTypes'
import { AnimatedRangerStatus } from './AnimatedRangerStatus'

interface RangerStatusOverviewProps {
  rangers: RangerDecks
}

const RangerStatusOverview: React.FC<RangerStatusOverviewProps> = ({ rangers }) => {
  return <AnimatedRangerStatus rangers={rangers} />
}

export default RangerStatusOverview
