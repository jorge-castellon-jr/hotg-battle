import React from 'react'
import { ScrollView, YStack } from 'tamagui'
import { RangerCard as RangerCardData } from '../Card/CardTypes'
import RangerCard from '../Card/components/RangerCard'

interface RangerHandProps {
  hand: RangerCardData[]
  onPlayCard: (card: RangerCardData) => void
}

const RangerHand: React.FC<RangerHandProps> = ({ hand, onPlayCard }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} padding="$2">
      <YStack flexDirection="row" gap="$3">
        {hand.map((card) => (
          <RangerCard card={card} onPlayCard={onPlayCard} />
        ))}
      </YStack>
    </ScrollView>
  )
}

export default RangerHand
