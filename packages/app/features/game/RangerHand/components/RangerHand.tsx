// src/features/game/RangerHand/components/RangerHand.tsx
import React from 'react'
import { YStack } from 'tamagui'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { useWindowDimensions } from 'react-native'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import { AnimatedCard } from './AnimatedCard'
import { BattleSequence } from '../../Battle/components/BattleSequence'
import useGameStore from '../../gameState'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

interface RangerHandProps {
  hand: RangerCardType[]
}

export const RangerHand: React.FC<RangerHandProps> = ({ hand }) => {
  const { width: windowWidth } = useWindowDimensions()
  const { enterBattleMode, exitBattleMode, enemies } = useGameStore()

  const hoveredIndex = useSharedValue(-1)
  const dragTarget = useSharedValue(-1)
  const sharedOffsetY = useSharedValue(0)
  const [battleCard, setBattleCard] = React.useState<RangerCardType>()

  const handlePlayCard = (index: number) => {
    const card = hand[index]
    if (card.type === 'attack') {
      setBattleCard(card)
      enterBattleMode(card)
    }
  }

  const handleBackFromBattle = () => {
    setBattleCard(undefined)
    exitBattleMode()
  }

  return (
    <>
      <AnimatedYStack height={200} width="100%" position="absolute" bottom={0} zIndex={0}>
        {hand.map((card, index) => (
          <AnimatedCard
            key={card.name}
            card={card}
            index={index}
            totalCards={hand.length}
            cardWidth={140}
            screenWidth={windowWidth}
            hoveredIndex={hoveredIndex}
            dragTarget={dragTarget}
            sharedOffsetY={sharedOffsetY}
            onPlayCard={handlePlayCard}
          />
        ))}
      </AnimatedYStack>

      <BattleSequence
        isVisible={!!battleCard}
        playedCard={battleCard}
        onBack={handleBackFromBattle}
        handOffsetY={sharedOffsetY}
        enemies={enemies}
      />
    </>
  )
}

export default RangerHand
