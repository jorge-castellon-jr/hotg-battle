import React from 'react'
import { Stack, Text } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { Zap } from 'lucide-react'
import useGameStore from '../gameStateStore'
import { EnergySheet } from './EnergySheet'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

export const EnergyCounter: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pressed = useSharedValue(false)
  const scale = useSharedValue(1)

  const { energy } = useGameStore()

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true
      scale.value = withSpring(0.95)
    })
    .onFinalize(() => {
      pressed.value = false
      scale.value = withSpring(1)
      setIsOpen(true)
    })

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
      opacity: interpolate(scale.value, [0.95, 1], [0.8, 1]),
    }),
    [scale]
  )

  return (
    <>
      <GestureDetector gesture={tap}>
        <AnimatedStack
          position="absolute"
          left={0}
          top="30%"
          backgroundColor="$blue9Dark"
          paddingVertical="$3"
          paddingHorizontal="$4"
          borderTopRightRadius="$4"
          borderBottomRightRadius="$4"
          flexDirection="row"
          alignItems="center"
          gap="$2"
          style={animatedStyle}
          cursor="pointer"
        >
          <Zap size={24} color="white" />
          <Text color="white" fontSize="$6" fontWeight="bold">
            {energy}
          </Text>
        </AnimatedStack>
      </GestureDetector>

      <EnergySheet open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}
