import React from 'react'
import { Stack, Text } from 'tamagui'
import { RangerCard } from '../CardTypes'

interface RangerHandProps {
  card: RangerCard
  onPlayCard: (card: RangerCard) => void
}

const RangerHand: React.FC<RangerHandProps> = ({ card, onPlayCard }) => {
  return (
    <Stack
      key={card.id}
      width={80}
      height={120}
      backgroundColor="$background"
      borderRadius="$3"
      padding="$2"
      hoverStyle={{ scale: 1.05 }}
      onPressIn={() => onPlayCard(card)}
    // Placeholder for drag and zoom-in animation events
    >
      <Text fontSize="$3" fontWeight="bold">
        {card.name}
      </Text>
      <Text fontSize="$2" color="$color">
        {card.type}
      </Text>
    </Stack>
  )
}

export default RangerHand
