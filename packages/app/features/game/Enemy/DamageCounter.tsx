import { YStack, Text, XStack, Button } from 'tamagui'
import { Plus, Minus } from 'lucide-react'
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withSequence,
} from 'react-native-reanimated'

const AnimatedText = Animated.createAnimatedComponent(Text)

interface DamageCounterProps {
  currentDamage: number
  onDamageChange: (newDamage: number) => void
}

export const DamageCounter = ({ currentDamage, onDamageChange }: DamageCounterProps) => {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale]
  )

  const handleDamageChange = (amount: number) => {
    const newDamage = Math.max(0, currentDamage + amount)
    if (newDamage !== currentDamage) {
      scale.value = withSequence(withSpring(1.2, { damping: 0 }), withSpring(1))
      onDamageChange(newDamage)
    }
  }

  return (
    <YStack gap="$4" alignItems="center">
      <Text fontSize="$4" color="$gray11">
        Damage Counters
      </Text>

      <XStack gap="$4" alignItems="center" width="100%">
        <Button
          flex={2}
          flexBasis="100%"
          onPress={() => handleDamageChange(-1)}
          disabled={currentDamage <= 0}
          backgroundColor="$red9Dark"
          pressStyle={{ scale: 0.95 }}
        >
          <Minus size={24} color="white" />
        </Button>

        <Button
          flex={2}
          flexBasis="100%"
          onPress={() => handleDamageChange(1)}
          backgroundColor="$red9"
          pressStyle={{ scale: 0.95 }}
        >
          <Plus size={24} color="white" />
        </Button>
      </XStack>
    </YStack>
  )
}
