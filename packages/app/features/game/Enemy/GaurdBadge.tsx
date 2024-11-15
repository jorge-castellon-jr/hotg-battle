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
      withSequence(withTiming(1.2, { duration: 1000 }), withTiming(1, { duration: 1000 })),
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

    <AnimatedStack
      position="absolute"
      bottom="$2"
      right="$2"
      zIndex={100}
      width={size}
      height={size}
      borderRadius={size / 2}
      backgroundColor="rgba(0, 0, 0, 0.7)"
      justifyContent="center"
      alignItems="center"
      style={animatedStyle}
    >
      <Shield size={size * 0.6} color="white" />
    </AnimatedStack>
  )
}
