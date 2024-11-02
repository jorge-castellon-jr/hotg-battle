import React from 'react';
import { YStack } from 'tamagui';
import { RangerCard as RangerCardType } from '../../Card/CardTypes';
import RangerCard from '../../Card/components/RangerCard';
import Animated from 'react-native-reanimated';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const AnimatedYStack = Animated.createAnimatedComponent(YStack);

export interface AnimatedCardProps {
  card: RangerCardType;
  index: number;
  handLength: number;
  scrollX: SharedValue<number>;
  isDragging: SharedValue<boolean>;
  centerOffset: number;
  cardSpacing: number;
  totalWidth: number;
  onPlayCard: (card: RangerCardType) => void;
}

export const AnimatedCard = React.memo(({ 
  card, 
  index,
  handLength,
  scrollX,
  isDragging,
  centerOffset,
  cardSpacing,
  totalWidth,
  onPlayCard 
}: AnimatedCardProps) => {
  const isPressed = useSharedValue(false);
  const maxRotation = 7;

  // Animation Constants
  const HOVER_LIFT_AMOUNT = -30;  // How high the card lifts when hovered
  const HOVER_SCALE = 1.15;       // How much the card scales when hovered
  const ARC_HEIGHT = 15;          // Maximum height of the arc formation

  const pressGesture = Gesture.LongPress()
    .minDuration(0)
    .onBegin(() => {
      isPressed.value = true;
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const baseStyle = useAnimatedStyle(() => {
    const middleIndex = Math.floor(handLength / 2);
    const progress = (index - middleIndex) / middleIndex;
    
    const rotateZ = withSpring(interpolate(
      progress,
      [-1, 0, 1],
      [-maxRotation, 0, maxRotation]
    ), {
      damping: 15,
      stiffness: 150,
    });

    const arcHeight = withSpring(interpolate(
      Math.abs(progress),
      [0, 1],
      [0, ARC_HEIGHT],
    ), {
      damping: 15,
      stiffness: 150,
    });

    const baseX = (index - middleIndex) * cardSpacing;
    const x = baseX + scrollX.value + centerOffset;

    const baseScale = withSpring(isDragging.value ? 0.95 : 1, {
      damping: 15,
      stiffness: 150,
    });

    return {
      position: 'absolute',
      left: x,
      top: arcHeight,
      transform: [
        { rotateZ: `${rotateZ}deg` },
        { scale: baseScale },
      ],
    };
  }, [scrollX, isDragging, index, handLength, centerOffset, cardSpacing]);

  const hoverStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(isPressed.value ? HOVER_SCALE : 1, {
          damping: 15,
          stiffness: 150,
        })},
        { translateY: withSpring(isPressed.value ? HOVER_LIFT_AMOUNT : 0, {
          damping: 15,
          stiffness: 150,
        })},
      ],
      zIndex: isPressed.value ? 10 : 0,
    };
  }, [isPressed]);

  return (
    <GestureDetector gesture={pressGesture}>
      <AnimatedYStack style={[baseStyle, hoverStyle]}>
        <RangerCard card={card} onPlayCard={onPlayCard} />
      </AnimatedYStack>
    </GestureDetector>
  );
});
