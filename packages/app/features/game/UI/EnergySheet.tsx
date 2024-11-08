import React from 'react'
import { Button, Sheet, Stack, Text, XStack, YStack } from 'tamagui'
import { Minus, Plus, Zap } from 'lucide-react'
import useGameStore from '../gameStateStore'
import { BaseSheet } from './BaseSheet'

interface EnergySheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const EnergySheet: React.FC<EnergySheetProps> = ({ open, onOpenChange }) => {
  const { energy, addEnergy, removeEnergy } = useGameStore()

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack padding="$4" gap="$4" alignItems="center">
        <Text fontSize="$6" fontWeight="bold" color="$blue9Dark">
          Team Energy
        </Text>

        {/* Counter Display */}
        <XStack padding="$4" borderRadius="$4" alignItems="center" gap="$2">
          <Zap size={32} color="var(--c-blue9Dark)" />
          <Text color="$blue9Dark" fontSize="$8" fontWeight="bold">
            {energy}
          </Text>
        </XStack>

        {/* Controls */}
        <XStack width="100%" gap="$4">
          <Button flex={1} flexBasis="100%" onPress={removeEnergy} icon={Minus} />
          <Button flex={1} flexBasis="100%" onPress={addEnergy} icon={Plus} />
        </XStack>
      </YStack>
    </BaseSheet>
  )
}
