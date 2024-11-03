import React from 'react'
import { YStack } from 'tamagui'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import RangerCard from '../../Card/components/RangerCard'
import Animated from 'react-native-reanimated'
import { useAnimatedStyle, useSharedValue, withSpring, interpolate } from 'react-native-reanimated'
import type { SharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

export interface AnimatedCardProps {
  card: RangerCardType
  index: number
  totalCards: number
  cardWidth: number
  screenWidth: number
  onPlayCard: (card: RangerCardType) => void
  hoveredIndex: SharedValue<number>
}

const springConfig = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

export const AnimatedCard = React.memo(
  ({
    card,
    index,
    totalCards,
    cardWidth,
    screenWidth,
    onPlayCard,
    hoveredIndex,
  }: AnimatedCardProps) => {
    const isPressed = useSharedValue(false)
    const dragX = useSharedValue(0)
    const dragY = useSharedValue(0)

    // Animation Constants
    const HOVER_LIFT_AMOUNT = -75
    const HOVER_SCALE = 1.2
    const SPREAD_DISTANCE = cardWidth * 0.75
    const EDGE_PADDING = cardWidth * 0.1

    // Calculate spacing that ensures no overflow
    const totalContentWidth = screenWidth - 2 * EDGE_PADDING
    const totalCardsWidth = cardWidth * totalCards
    const overlap = Math.max(0, (totalCardsWidth - totalContentWidth) / (totalCards - 1))
    const spacing = cardWidth - overlap

    const dragGesture = Gesture.Pan()
      .onBegin(() => {
        isPressed.value = true
        hoveredIndex.value = index
      })
      .onUpdate((event) => {
        dragX.value = event.translationX
        dragY.value = event.translationY
        hoveredIndex.value = index
      })
      .onFinalize(() => {
        isPressed.value = false
        hoveredIndex.value = -1
        // Animate back to original position
        dragX.value = withSpring(0, springConfig)
        dragY.value = withSpring(0, springConfig)
      })

    const baseStyle = useAnimatedStyle(() => {
      // Position each card with calculated overlap
      const baseX = EDGE_PADDING + index * spacing

      // Calculate spread effect when a card is hovered
      const spreadEffect =
        hoveredIndex.value !== -1 && !isPressed.value
          ? interpolate(
            Math.abs(index - hoveredIndex.value),
            [0, 1, 2],
            [0, SPREAD_DISTANCE, SPREAD_DISTANCE],
            'clamp'
          ) * Math.sign(index - hoveredIndex.value)
          : 0

      // Determine if this card is being hovered
      const isHovered = hoveredIndex.value === index

      // Calculate final position with spread and drag
      const x = baseX + spreadEffect + dragX.value
      const y = (isHovered && !isPressed.value ? HOVER_LIFT_AMOUNT : 0) + dragY.value

      // Scale based on hover state
      const scale = withSpring(isHovered ? HOVER_SCALE : 1, springConfig)

      return {
        position: 'absolute',
        left: withSpring(isPressed.value ? x : baseX + spreadEffect, springConfig),
        top: withSpring(isPressed.value ? y : (isHovered ? HOVER_LIFT_AMOUNT : 0), springConfig),
        transform: [
          { scale },
        ],
        zIndex: isPressed.value ? 2 : isHovered ? 1 : 0,
      }
    }, [hoveredIndex, index, spacing, dragX, dragY])

    return (
      <GestureDetector gesture={dragGesture}>
        <AnimatedYStack style={baseStyle}>
          <RangerCard card={card} onPlayCard={onPlayCard} />
        </AnimatedYStack>
      </GestureDetector>
    )
  }
)
