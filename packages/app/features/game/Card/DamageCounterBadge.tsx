import { Stack, Text } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withSequence,
} from 'react-native-reanimated'
import { Svg, Path } from 'react-native-svg'
import { useEffect } from 'react'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface SpikyDamageBadgeProps {
  damage: number
  size?: number
}

export const DamageCounterBadge = ({ damage, size = 24 }: SpikyDamageBadgeProps) => {
  const scale = useSharedValue(1)
  const numSpikes = 12 // Number of spikes around the circle
  const spikeHeight = size * 0.2 // Height of spikes relative to badge size
  const innerRadius = (size - spikeHeight * 2) / 2 // Radius of the inner circle

  // Trigger animation when damage changes
  useEffect(() => {
    scale.value = withSequence(withSpring(1.2, { damping: 12 }), withSpring(1))
  }, [damage])

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale]
  )

  if (damage === 0) return null

  // Generate the spiky circle path
  const generateSpikePath = () => {
    const center = size / 2
    let path = `M ${center + innerRadius} ${center} ` // Start at rightmost point

    for (let i = 0; i <= numSpikes; i++) {
      const angle = (i * 2 * Math.PI) / numSpikes
      const nextAngle = ((i + 0.5) * 2 * Math.PI) / numSpikes

      // Outer point (spike)
      const outerX = center + (innerRadius + spikeHeight) * Math.cos(angle)
      const outerY = center + (innerRadius + spikeHeight) * Math.sin(angle)

      // Inner point (between spikes)
      const innerX = center + innerRadius * Math.cos(nextAngle)
      const innerY = center + innerRadius * Math.sin(nextAngle)

      path += `L ${outerX} ${outerY} L ${innerX} ${innerY} `
    }

    path += 'Z' // Close the path
    return path
  }

  return (
    <AnimatedStack
      position="absolute"
      bottom="$1"
      right="$1"
      width={size}
      height={size}
      justifyContent="center"
      alignItems="center"
      style={animatedStyle}
    >
      <Stack position="absolute" width={size} height={size}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Path d={generateSpikePath()} fill="var(--red9)" stroke="white" strokeWidth={1} />
        </Svg>
      </Stack>
      <Text color="white" fontSize={size * 0.4} fontWeight="bold" textAlign="center" zIndex={1}>
        {damage}
      </Text>
    </AnimatedStack>
  )
}
