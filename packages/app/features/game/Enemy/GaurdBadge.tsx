import { Shield } from 'lucide-react'
import { Stack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface GuardBadgeProps {
  size?: number
}

export const GuardBadge = ({ size = 24 }: GuardBadgeProps) => {
  const scale = useSharedValue(1)

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(withTiming(1.1, { duration: 500 }), withTiming(1, { duration: 500 })),
      -1,
      true
    )
  }, [])

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale]
  )

  return (
    <Stack
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      backgroundColor="rgba(0, 0, 0, 0.2)"
      justifyContent="center"
      alignItems="center"
    >
      <AnimatedStack zIndex={100} justifyContent="center" alignItems="center" style={animatedStyle}>
        <Stack position="absolute">
          <Shield size={size} strokeWidth={2} color="white" />
        </Stack>
        <Shield size={size} strokeWidth={4} color="rgba(0, 0, 0, 0.5)" />
      </AnimatedStack>
    </Stack>
  )
}
