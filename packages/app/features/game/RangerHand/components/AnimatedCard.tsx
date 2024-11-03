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
  dragTarget: SharedValue<number>
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
    dragTarget,
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
        dragTarget.value = index
        startY.value = event.absoluteY

        // Initial offset calculation
        touchOffset.value = CARD_HEIGHT - event.y
        dragY.value = -touchOffset.value
      })
      .onUpdate((event) => {
        const cardPosition = EDGE_PADDING + index * spacing
        const touchX = event.absoluteX

        // Calculate which card we're over
        const cardIndex = Math.floor((touchX - EDGE_PADDING) / spacing)
        if (cardIndex >= 0 && cardIndex < totalCards && cardIndex !== dragTarget.value) {
          // When switching cards, maintain the current vertical position
          if (index === cardIndex) {
            dragY.value = Math.min(0, event.absoluteY - startY.value - touchOffset.value)
          }
          dragTarget.value = cardIndex
          hoveredIndex.value = cardIndex
        }

        // Update position only for currently dragged card
        if (dragTarget.value === index) {
          dragY.value = Math.min(0, event.absoluteY - startY.value - touchOffset.value)
        }
      })
      .onFinalize(() => {
        // Reset everything
        isPressed.value = false
        hoveredIndex.value = -1
        dragTarget.value = -1
        // Spring animation back to original positions
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

      // Determine if this card is being hovered/dragged
      const isHovered = hoveredIndex.value === index
      const isSelected = dragTarget.value === index

      // Use hover lift or drag position for vertical movement
      const y = isSelected ? dragY.value : isHovered ? HOVER_LIFT_AMOUNT : 0

      // Return to original positions when no card is selected
      const finalX =
        dragTarget.value === -1
          ? withSpring(baseX, springConfig)
          : withSpring(baseX + spreadEffect, springConfig)

      // Scale based on hover state
      const scale = withSpring(isHovered ? HOVER_SCALE : 1, springConfig)

      return {
        position: 'absolute',
        left: finalX,
        top: withSpring(y, springConfig),
        transform: [{ scale }],
        zIndex: isSelected ? 2 : isHovered ? 1 : 0,
      }
    }, [hoveredIndex, index, spacing, dragY, dragTarget])

    return (
      <GestureDetector gesture={dragGesture}>
        <AnimatedYStack
          style={baseStyle}
          userSelect="none"
          cursor="grab"
          pressStyle={{ cursor: 'grabbing' }}
        >
          <RangerCard card={card} onPlayCard={onPlayCard} />
        </AnimatedYStack>
      </GestureDetector>
    )
  }
)
