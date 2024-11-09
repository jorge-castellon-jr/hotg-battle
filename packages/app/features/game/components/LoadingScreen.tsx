import React from 'react'
import { Stack, Text } from 'tamagui'
import { useWindowDimensions } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated'
import { Zap } from 'lucide-react'

const AnimatedStack = Animated.createAnimatedComponent(Stack)
const AnimatedZap = Animated.createAnimatedComponent(Zap)

const RANGER_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#ec4899']
const NUM_BOLTS = 5

export default function LoadingScreen() {
  const { width, height } = useWindowDimensions()
  const size = Math.min(width, height) * 0.5
  const rotation = useSharedValue(0)
  const scale = useSharedValue(0.8)
  const textOpacity = useSharedValue(0)

  React.useEffect(() => {
    // Rotate the bolts continuously
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }),
      -1, // Infinite repeats
      false // Don't reverse
    )

    // Pulse the scale
    scale.value = withRepeat(
      withSequence(withTiming(1, { duration: 1000 }), withTiming(0.8, { duration: 1000 })),
      -1,
      true
    )

    // Fade in the text
    textOpacity.value = withTiming(1, { duration: 800 })
  }, [])

  // Create array of bolt positions
  const bolts = Array.from({ length: NUM_BOLTS }, (_, index) => {
    const angle = (360 / NUM_BOLTS) * index
    return { angle, color: RANGER_COLORS[index] }
  })

  const containerStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${rotation.value}deg` }, { scale: scale.value }],
    }),
    [rotation]
  )

  const textStyle = useAnimatedStyle(
    () => ({
      opacity: textOpacity.value,
    }),
    [textOpacity]
  )

  return (
    <Stack f={1} bg="$background" ai="center" jc="center">
      <AnimatedStack style={containerStyle}>
        <Stack width={size} height={size} position="relative">
          {bolts.map(({ angle, color }, index) => (
            <Stack
              key={index}
              position="absolute"
              left="50%"
              top="50%"
              style={{
                transform: [
                  { translateX: -12 }, // Half of icon size
                  { translateY: -12 }, // Half of icon size
                  { rotate: `${angle}deg` },
                  { translateY: -size * 0.25 }, // Move away from center
                ],
              }}
            >
              <AnimatedZap
                size={24}
                color={color}
                strokeWidth={2.5}
                fill={color}
                style={{
                  transform: [{ rotate: '-90deg' }], // Adjust bolt orientation
                }}
              />
            </Stack>
          ))}
          {/* Center Circle */}
          <Stack
            position="absolute"
            left="50%"
            top="50%"
            width={40}
            height={40}
            borderRadius={20}
            backgroundColor="white"
            style={{
              transform: [{ translateX: -20 }, { translateY: -20 }],
            }}
          />
        </Stack>
      </AnimatedStack>

      <AnimatedStack style={textStyle} marginTop={40}>
        <Text fontSize={24} fontWeight="bold" color="$color" opacity={0.9} letterSpacing={2}>
          LOADING
        </Text>
      </AnimatedStack>
    </Stack>
  )
}
