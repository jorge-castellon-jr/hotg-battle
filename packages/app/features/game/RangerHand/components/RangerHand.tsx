import React from 'react'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import { AnimatedCard } from './AnimatedCard'
import { useWindowDimensions } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { YStack } from 'tamagui'

interface RangerHandProps {
  hand: RangerCardType[]
  onPlayCard: (index: number) => void
}
const AnimatedYStack = Animated.createAnimatedComponent(YStack)

export const RangerHand: React.FC<RangerHandProps> = ({ hand, onPlayCard }) => {
  const { width: windowWidth } = useWindowDimensions()
  const hoveredIndex = useSharedValue(-1)
  const dragTarget = useSharedValue(-1)
  const sharedOffsetY = useSharedValue(0) // Initialize shared offset

  const CARD_WIDTH = 140
  const CARD_HEIGHT = 200

  return (
    <AnimatedYStack height={CARD_HEIGHT} width="100%" position="absolute" bottom={0} zIndex={0}>
      {hand.map((card, index) => (
        <AnimatedCard
          key={card.name}
          card={card}
          index={index}
          totalCards={hand.length}
          cardWidth={CARD_WIDTH}
          screenWidth={windowWidth}
          hoveredIndex={hoveredIndex}
          dragTarget={dragTarget}
          sharedOffsetY={sharedOffsetY}
          onPlayCard={onPlayCard}
        />
      ))}
    </AnimatedYStack>
  )
}

export default RangerHand
