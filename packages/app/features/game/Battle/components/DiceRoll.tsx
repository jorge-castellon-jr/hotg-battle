// src/features/game/battle/components/DiceRoll.tsx
import React from 'react'
import { Stack, Text } from 'tamagui'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
  interpolate,
} from 'react-native-reanimated'
import { DiceFace } from './DiceFace'

const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface DiceRollProps {
  numDice: number
  isRolling: boolean
  onRollComplete: (results: number[]) => void
}

interface DiceResult {
  face: number // The actual face (1-6)
  value: number // The damage value (0-2)
}

const getDiceValue = (face: number): number => {
  switch (face) {
    case 1: // Circle outline
    case 6: // Circle outline
      return 0
    case 2: // Single damage
    case 3: // Single damage
    case 4: // Single damage
      return 1
    case 5: // Double damage
      return 2
    default:
      return 0
  }
}

export const DiceRoll: React.FC<DiceRollProps> = ({ numDice, isRolling, onRollComplete }) => {
  const [diceResults, setDiceResults] = React.useState<DiceResult[]>([])
  const [finalResults, setFinalResults] = React.useState<DiceResult[]>([])
  const animation = useSharedValue(0)
  const rollRef = React.useRef<NodeJS.Timeout>()
  const completeRef = React.useRef<NodeJS.Timeout>()

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animation.value, [0, 1, 2, 3], [1, 1.2, 1.1, 1], 'clamp')

    const translateY = interpolate(animation.value, [0, 1, 2, 3], [0, -30, -15, 0], 'clamp')

    return {
      transform: [{ scale }, { translateY }],
    }
  }, [animation])

  React.useEffect(() => {
    if (isRolling) {
      // Generate final values immediately
      const finalRolls = Array(numDice)
        .fill(0)
        .map(() => {
          const face = Math.floor(Math.random() * 6) + 1
          return {
            face,
            value: getDiceValue(face),
          }
        })
      setFinalResults(finalRolls)

      // Start animation
      animation.value = withSequence(
        withSpring(1, { damping: 10 }),
        withTiming(2, { duration: 800 }),
        withSpring(3, { damping: 15 })
      )

      // Rolling animation
      rollRef.current = setInterval(() => {
        const newRolls = Array(numDice)
          .fill(0)
          .map(() => {
            const face = Math.floor(Math.random() * 6) + 1
            return {
              face,
              value: getDiceValue(face),
            }
          })
        setDiceResults(newRolls)
      }, 100)

      // Complete roll
      completeRef.current = setTimeout(() => {
        if (rollRef.current) clearInterval(rollRef.current)
        setDiceResults(finalRolls)
        onRollComplete(finalRolls.map((r) => r.value))
      }, 1000)
    }

    return () => {
      if (rollRef.current) clearInterval(rollRef.current)
      if (completeRef.current) clearTimeout(completeRef.current)
    }
  }, [isRolling, numDice, animation, onRollComplete])

  const diceSize = 60
  const spacing = 20

  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <AnimatedStack flexDirection="row" gap={spacing} style={animatedStyle}>
        {(diceResults.length ? diceResults : finalResults).map((result, index) => (
          <DiceFace key={index} value={result.face} size={diceSize} />
        ))}
      </AnimatedStack>

      {diceResults.length > 0 && (
        <Stack padding={20} alignItems="center" gap={10}>
          <Stack flexDirection="row" gap={10}>
            <Text color="white" fontSize={18}>
              Dice Values: {diceResults.map((d) => d.value).join(', ')}
            </Text>
          </Stack>
          <Text color="white" fontSize={24} fontWeight="bold">
            Total Damage: {diceResults.reduce((sum, die) => sum + die.value, 0)}
          </Text>
        </Stack>
      )}
    </Stack>
  )
}

export default DiceRoll
