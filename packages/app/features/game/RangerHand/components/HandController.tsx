import React from 'react'
import { YStack } from 'tamagui'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import Animated from 'react-native-reanimated'
import { useSharedValue, withSpring } from 'react-native-reanimated'
import type { SharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useWindowDimensions } from 'react-native'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

export interface HandControllerProps {
  hand: RangerCardType[]
  onPlayCard: (card: RangerCardType) => void
  children: (props: {
    scrollX: SharedValue<number>
    isDragging: SharedValue<boolean>
    centerOffset: number
    cardSpacing: number
    totalWidth: number
  }) => React.ReactNode
}

export const HandController: React.FC<HandControllerProps> = ({ hand, children }) => {
  const { width: windowWidth } = useWindowDimensions()
  const scrollX = useSharedValue(0)
  const isDragging = useSharedValue(false)
  const startX = useSharedValue(0)

  const cardWidth = 140
  const cardHeight = 200
  const AMPLIFICATION_FACTOR = 0.2

  const availableWidth = windowWidth - 80
  const cardSpacing = (availableWidth - cardWidth) / Math.max(hand.length - 1, 1)
  const centerOffset = windowWidth / 2
  const maxScroll = availableWidth * 0.3

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      startX.value = scrollX.value
      isDragging.value = true
    })
    .onUpdate((event) => {
      const amplifiedDelta = -event.translationX * AMPLIFICATION_FACTOR
      scrollX.value = Math.max(Math.min(startX.value + amplifiedDelta, maxScroll), -maxScroll)
    })
    .onEnd(() => {
      isDragging.value = false
      scrollX.value = withSpring(0, {
        damping: 15,
        stiffness: 100,
        mass: 0.8,
      })
    })

  return (
    <GestureDetector gesture={panGesture}>
      <AnimatedYStack height={cardHeight + 40} width="100%" position="relative">
        {children({
          scrollX,
          isDragging,
          centerOffset,
          cardSpacing,
          totalWidth: availableWidth,
        })}
      </AnimatedYStack>
    </GestureDetector>
  )
}
