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
  sharedOffsetY: SharedValue<number>
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
    sharedOffsetY,
  }: AnimatedCardProps) => {
    const isPressed = useSharedValue(false)
    const startY = useSharedValue(0)
    const initialOffset = useSharedValue(0)

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
        initialOffset.value = CARD_HEIGHT - event.y
        sharedOffsetY.value = initialOffset.value
      })
      .onUpdate((event) => {
        const touchX = event.absoluteX

        // Calculate which card we're over
        const cardIndex = Math.floor((touchX - EDGE_PADDING) / spacing)

        // Switch to new card if valid
        if (cardIndex >= 0 && cardIndex < totalCards && cardIndex !== dragTarget.value) {
          // Before switching, capture the current values
          const currentOffset = sharedOffsetY.value

          dragTarget.value = cardIndex
          hoveredIndex.value = cardIndex

          // When becoming the new target, update our reference points
          if (index === cardIndex) {
            startY.value = event.absoluteY
            initialOffset.value = currentOffset
          }
        }
        console.log('dragTarget', dragTarget.value)
        console.log('index', index)

        // Update vertical position for any selected card
        const dragAmount = startY.value - event.absoluteY
        sharedOffsetY.value = initialOffset.value + dragAmount
      })
      .onFinalize(() => {
        isPressed.value = false
        hoveredIndex.value = -1
        dragTarget.value = -1
        sharedOffsetY.value = 0
      })

    const baseStyle = useAnimatedStyle(() => {
      const baseX = EDGE_PADDING + index * spacing

      const spreadEffect =
        hoveredIndex.value !== -1 && !isPressed.value
          ? interpolate(
            Math.abs(index - hoveredIndex.value),
            [0, 1, 2],
            [0, SPREAD_DISTANCE, SPREAD_DISTANCE],
            'clamp'
          ) * Math.sign(index - hoveredIndex.value)
          : 0

      const isHovered = hoveredIndex.value === index
      const isSelected = dragTarget.value === index

      // Use shared offset for selected card, hover lift for hovered cards
      const y = isSelected ? -sharedOffsetY.value : isHovered ? HOVER_LIFT_AMOUNT : 0

      const scale = withSpring(isHovered ? HOVER_SCALE : 1, springConfig)

      return {
        position: 'absolute',
        left: withSpring(baseX + spreadEffect, springConfig),
        top: withSpring(y, springConfig),
        transform: [{ scale }],
        zIndex: isSelected ? 2 : isHovered ? 1 : 0,
      }
    }, [hoveredIndex, index, spacing, dragTarget, sharedOffsetY])

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
