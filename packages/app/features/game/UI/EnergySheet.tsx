import React from 'react'
import { Button, Sheet, Stack, Text, XStack, YStack } from 'tamagui'
import { Minus, Plus, Zap } from 'lucide-react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import useGameStore from '../gameStateStore'
import { BaseSheet } from './BaseSheet'
import { usePulseEffects } from './usePulseEffects'

const AnimatedXStack = Animated.createAnimatedComponent(XStack)
const AnimatedText = Animated.createAnimatedComponent(Text)
const AnimatedZap = Animated.createAnimatedComponent(Zap)
const AnimatedStack = Animated.createAnimatedComponent(Stack)

interface EnergySheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const EnergySheet: React.FC<EnergySheetProps> = ({ open, onOpenChange }) => {
  const { energy, addEnergy, removeEnergy } = useGameStore()
  const { scale, ringScale, ringOpacity } = usePulseEffects(energy)

  const counterStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale]
  )

  const ringStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: ringScale.value }],
      opacity: ringOpacity.value,
    }),
    [ringScale, ringOpacity]
  )

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack padding="$4" gap="$4" alignItems="center">
        <Text fontSize="$6" fontWeight="bold" color="$yellow9Dark">
          Team Energy
        </Text>

        {/* Counter Container */}
        <Stack position="relative">
          {/* Animated Ring */}
          <AnimatedStack
            position="absolute"
            width={120}
            height={120}
            borderRadius={60}
            backgroundColor="$yellow10Light"
            left={-20}
            top={-20}
            style={ringStyle}
          />

          {/* Counter Display */}
          <AnimatedXStack
            padding="$4"
            borderRadius="$4"
            alignItems="center"
            gap="$2"
            style={counterStyle}
          >
            <AnimatedZap size={32} color="var(--c-yellow10Light)" />
            <AnimatedText color="$yellow10Light" fontSize="$8" fontWeight="bold">
              {energy}
            </AnimatedText>
          </AnimatedXStack>
        </Stack>

        {/* Controls */}
        <XStack width="100%" gap="$4">
          <Button flex={1} flexBasis="100%" onPress={removeEnergy} icon={Minus} />
          <Button flex={1} flexBasis="100%" onPress={addEnergy} icon={Plus} />
        </XStack>
      </YStack>
    </BaseSheet>
  )
}
