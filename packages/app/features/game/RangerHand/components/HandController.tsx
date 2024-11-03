import React from 'react'
import { YStack } from 'tamagui'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import Animated from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated'
import type { SharedValue } from 'react-native-reanimated'
import { useWindowDimensions } from 'react-native'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

export interface HandControllerProps {
  hand: RangerCardType[]
  onPlayCard: (card: RangerCardType) => void
  children: (props: {
    cardWidth: number
    screenWidth: number
    hoveredIndex: SharedValue<number>
    dragTarget: SharedValue<number>
    sharedOffsetY: SharedValue<number> // Add shared offset
  }) => React.ReactNode
}

export const HandController: React.FC<HandControllerProps> = ({ hand, children }) => {
  const { width: windowWidth } = useWindowDimensions()
  const hoveredIndex = useSharedValue(-1)
  const dragTarget = useSharedValue(-1)
  const sharedOffsetY = useSharedValue(0) // Initialize shared offset

  const CARD_WIDTH = 140
  const CARD_HEIGHT = 200

  return (
    <AnimatedYStack height={CARD_HEIGHT + 40} width="100%" position="relative" zIndex={0}>
      {children({
        cardWidth: CARD_WIDTH,
        screenWidth: windowWidth,
        hoveredIndex,
        dragTarget,
        sharedOffsetY,
      })}
    </AnimatedYStack>
  )
}
