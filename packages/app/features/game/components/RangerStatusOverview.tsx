import React from 'react'
import { XStack } from 'tamagui'
import { RangerDecks } from '../types'
import RangerStatus from './RangerStatus'

interface RangerStatusOverviewProps {
  rangers: RangerDecks
}

const RangerStatusOverview: React.FC<RangerStatusOverviewProps> = ({ rangers }) => {
  return (
    <XStack
      justifyContent="space-around"
      padding="$2"
      borderRadius="$3"
    >
      <RangerStatus ranger={rangers.left} position="left" />
      <RangerStatus ranger={rangers.middle} position="middle" />
      <RangerStatus ranger={rangers.right} position="right" />
    </XStack>
  )
}

export default RangerStatusOverview
