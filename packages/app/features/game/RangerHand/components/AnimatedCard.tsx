import React from 'react'
import { YStack } from 'tamagui'
import { RangerCard as RangerCardType } from '../../Card/CardTypes'
import RangerCard from '../../Card/components/RangerCard'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  SharedValue,
  withSpring,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { ANIMATION_CONFIG, getCardAnimation } from '../utils/animations'
import useGameStore, { Turn } from '../../gameStateStore'

const AnimatedYStack = Animated.createAnimatedComponent(YStack)

interface AnimatedCardProps {
  card: RangerCardType
  index: number
  totalCards: number
  cardWidth: number
  screenWidth: number
  onPlayCard: (index: number) => void
  hoveredIndex: SharedValue<number>
  dragTarget: SharedValue<number>
  sharedOffsetY: SharedValue<number>
  selectedCardIndex: number
  isInBattleMode: boolean
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
    selectedCardIndex,
    isInBattleMode,
  }: AnimatedCardProps) => {
    const isPressed = useSharedValue(false)
    const startY = useSharedValue(0)
    const initialOffset = useSharedValue(0)

    const CARD_HEIGHT = 200
    const HOVER_LIFT_AMOUNT = -75
    const HOVER_SCALE = 1.2
    const SPREAD_DISTANCE = cardWidth * 0.75
    const EDGE_PADDING = cardWidth * 0.1

    // Calculate card spacing
    const totalContentWidth = screenWidth - 2 * EDGE_PADDING
    const totalCardsWidth = cardWidth * totalCards
    const overlap = Math.max(0, (totalCardsWidth - totalContentWidth) / (totalCards - 1))
    const spacing = cardWidth - overlap

    const { turn } = useGameStore()

    React.useEffect(() => {
      if (!isInBattleMode) sharedOffsetY.value = 0
    }, [isInBattleMode])

    const dragGesture = Gesture.Pan()
      .onBegin((event) => {
        if (isInBattleMode) return
        if (turn == Turn.playerSetup) return

        isPressed.value = true
        hoveredIndex.value = index
        dragTarget.value = index
        startY.value = event.absoluteY
        initialOffset.value = CARD_HEIGHT - event.y
        sharedOffsetY.value = initialOffset.value
      })
      .onUpdate((event) => {
        if (isInBattleMode) return
        if (turn == Turn.playerSetup) return

        const touchX = event.absoluteX
        const cardIndex = Math.floor((touchX - EDGE_PADDING) / spacing)
        const dragAmount = startY.value - event.absoluteY
        sharedOffsetY.value = initialOffset.value + dragAmount

        if (sharedOffsetY.value > CARD_HEIGHT) return

        if (cardIndex >= 0 && cardIndex < totalCards && cardIndex !== dragTarget.value) {
          dragTarget.value = cardIndex
          hoveredIndex.value = cardIndex
          isPressed.value = false
          sharedOffsetY.value = 500
        }
      })
      .onFinalize(() => {
        if (isInBattleMode) return

        if (sharedOffsetY.value > CARD_HEIGHT) {
          onPlayCard(hoveredIndex.value)
        }
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
      const isSelected = dragTarget.value === index || selectedCardIndex === index

      // Calculate vertical position based on battle mode and selection
      let yOffset = 0
      if (isInBattleMode) {
        yOffset = getCardAnimation(
          index,
          selectedCardIndex,
          // isSelected ? -sharedOffsetY.value : 0
          0
        )
      } else {
        yOffset = isSelected ? -sharedOffsetY.value : isHovered ? HOVER_LIFT_AMOUNT : 0
      }

      const scale = withSpring(isHovered && !isInBattleMode ? HOVER_SCALE : 1, ANIMATION_CONFIG)

      return {
        position: 'absolute',
        left: withSpring(baseX + spreadEffect, ANIMATION_CONFIG),
        top: withSpring(yOffset, ANIMATION_CONFIG),
        transform: [{ scale }],
        zIndex: isSelected ? 2 : isHovered ? 1 : 0,
        opacity: withSpring(isInBattleMode && !isSelected ? 0.5 : 1, ANIMATION_CONFIG),
      }
    }, [hoveredIndex, index, spacing, dragTarget, sharedOffsetY, selectedCardIndex, isInBattleMode])

    return (
      <GestureDetector gesture={dragGesture}>
        <AnimatedYStack
          style={baseStyle}
          userSelect="none"
          cursor={isInBattleMode ? 'default' : 'grab'}
          pressStyle={{ cursor: isInBattleMode ? 'default' : 'grabbing' }}
        >
          <RangerCard card={card} />
        </AnimatedYStack>
      </GestureDetector>
    )
  }
)
