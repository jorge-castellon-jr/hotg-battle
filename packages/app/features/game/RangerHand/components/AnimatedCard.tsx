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
    const dragY = useSharedValue(0)
    const startY = useSharedValue(0)
    const touchOffset = useSharedValue(0)

    const CARD_HEIGHT = 200

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
      .onBegin((event) => {
        isPressed.value = true
        hoveredIndex.value = index
        startY.value = event.absoluteY

        // Calculate initial offset to move card up so finger is at bottom
        touchOffset.value = CARD_HEIGHT - event.y

        // Apply initial offset (negative to move up)
        dragY.value = -touchOffset.value
      })
      .onUpdate((event) => {
        // Calculate new position while maintaining offset
        dragY.value = Math.min(0, event.absoluteY - startY.value - touchOffset.value)
      })
      .onFinalize(() => {
        isPressed.value = false
        hoveredIndex.value = -1
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

      // Use hover lift or drag position for vertical movement
      const y = isPressed.value ? dragY.value : isHovered ? HOVER_LIFT_AMOUNT : 0

      // Scale based on hover state
      const scale = withSpring(isHovered ? HOVER_SCALE : 1, springConfig)

      return {
        position: 'absolute',
        left: withSpring(baseX + spreadEffect, springConfig),
        top: withSpring(y, springConfig),
        transform: [{ scale }],
        zIndex: isPressed.value ? 2 : isHovered ? 1 : 0,
      }
    }, [hoveredIndex, index, spacing, dragY])

    return (
      <GestureDetector gesture={dragGesture}>
        <AnimatedYStack
          style={baseStyle}
          userSelect="none"
          onPointerDown={(e) => e.preventDefault()}
          cursor="grab"
          pressStyle={{ cursor: 'grabbing' }}
        >
          <RangerCard card={card} onPlayCard={onPlayCard} />
        </AnimatedYStack>
      </GestureDetector>
    )
  }
)
