import React, { useEffect } from 'react'
import { Stack } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated'
import LoadingScreen from './LoadingScreen'
import useGameStore from '../gameStateStore'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

export function AppContainer({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true)
  const opacity = useSharedValue(1)

  // We'll use a ref to track if we've started the fade out
  const hasFadeStarted = React.useRef(false)

  // Get the hydration state just once using selector
  const isHydrated = useGameStore((state) => state._hasHydrated)

  const handleFinishLoading = React.useCallback(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (isHydrated && !hasFadeStarted.current) {
      hasFadeStarted.current = true
      // Fade out loading screen
      opacity.value = withTiming(0, { duration: 500 }, () => {
        runOnJS(handleFinishLoading)()
      })
    }
  }, [isHydrated, opacity, handleFinishLoading])

  const loadingStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      position: 'absolute',
      width: '100%',
      height: '100%',
    }),
    [opacity]
  )

  const contentStyle = useAnimatedStyle(
    () => ({
      opacity: isLoading ? 0 : withTiming(1),
      flex: 1,
    }),
    [isLoading]
  )

  return (
    <Stack f={1} overflow="hidden">
      <AnimatedStack style={contentStyle}>{children}</AnimatedStack>
      {isLoading && (
        <AnimatedStack style={loadingStyle}>
          <LoadingScreen />
        </AnimatedStack>
      )}
    </Stack>
  )
}
