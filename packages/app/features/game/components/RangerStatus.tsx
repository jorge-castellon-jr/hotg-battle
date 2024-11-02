import React from 'react'
import { YStack, XStack, Text, Button } from 'tamagui'
import { Ranger } from '../GameTypes'
import useGameStore from '../gameState'

interface RangerStatusOverviewProps {
  ranger: Ranger
  position: 'left' | 'middle' | 'right'
}

const RangerStatusOverview: React.FC<RangerStatusOverviewProps> = ({ ranger, position }) => {
  const { drawCard } = useGameStore()

  const colors = {
    red: '$red9Dark',
    blue: '$blue9Dark',
    green: '$green9Dark',
  }

  return (
    <YStack flexGrow={1} alignItems="center" key={ranger.name} backgroundColor={colors[ranger.color]}>
      <Text fontSize="$4" fontWeight="bold">
        {ranger.name}
      </Text>
      <Text fontSize="$3">Deck: {ranger.cards.length}</Text>
      <Text fontSize="$3">Energy: {ranger.energyUsed ? 'Used' : 'No'}</Text>
      <Text fontSize="$3">Ability: {ranger.abilityUsed ? 'Used' : 'Available'}</Text>
      <Button onPressIn={() => drawCard(position)}>Draw</Button>
    </YStack>
  )
}

export default RangerStatusOverview
