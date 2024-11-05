import React from 'react'
import { YStack } from 'tamagui'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { useWindowDimensions } from 'react-native'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import { AnimatedCard } from './AnimatedCard'
import useGameStore from '../../gameStateStore'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

interface RangerHandProps {
  hand: RangerCardType[]
}

export const RangerHand: React.FC<RangerHandProps> = ({ hand }) => {
  const { width: windowWidth } = useWindowDimensions()
  const { enterBattleMode, battleMode, playedCardIndex } = useGameStore()

  const hoveredIndex = useSharedValue(-1)
  const dragTarget = useSharedValue(-1)
  const sharedOffsetY = useSharedValue(0)

  const handlePlayCard = (index: number) => {
    enterBattleMode(index)
  }

  return (
    <AnimatedYStack height={200} width="100%" position="absolute" bottom={0} zIndex={0}>
      {hand.map((card, index) => (
        <AnimatedCard
          key={`${card.name}-${index}`}
          card={card}
          index={index}
          totalCards={hand.length}
          cardWidth={140}
          screenWidth={windowWidth}
          hoveredIndex={hoveredIndex}
          dragTarget={dragTarget}
          sharedOffsetY={sharedOffsetY}
          selectedCardIndex={playedCardIndex}
          isInBattleMode={battleMode}
          onPlayCard={handlePlayCard}
        />
      ))}
    </AnimatedYStack>
  )
}

export default RangerHand
