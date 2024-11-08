import { useEffect } from 'react'
import {
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
  WithSpringConfig,
  withDelay,
} from 'react-native-reanimated'

const SPRING_CONFIG: WithSpringConfig = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

export const usePulseEffects = (value: number) => {
  const scale = useSharedValue(1)
  const ringScale = useSharedValue(0)
  const ringOpacity = useSharedValue(0)

  useEffect(() => {
    // Main counter pulse
    scale.value = withSequence(
      withSpring(1.2, { ...SPRING_CONFIG, duration: 100 }),
      withSpring(1, SPRING_CONFIG)
    )

    // Ring animation
    ringScale.value = withSequence(
      withTiming(0, { duration: 0 }), // Reset
      withTiming(1.5, { duration: 600 }) // Expand
    )

    // Ring opacity
    ringOpacity.value = withSequence(
      withTiming(0.6, { duration: 50 }), // Quickly fade in
      withTiming(0, { duration: 350 }) // Slowly fade out
    )
  }, [value])

  return {
    scale,
    ringScale,
    ringOpacity,
  }
}
