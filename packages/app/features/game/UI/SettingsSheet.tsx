import React from 'react'
import { Button, Text, YStack } from 'tamagui'
import useGameStore from '../gameStateStore'
import { BaseSheet } from './BaseSheet'
import { useLink } from 'solito/navigation'

interface EnergySheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const SettingsSheet: React.FC<EnergySheetProps> = ({ open, onOpenChange }) => {
  const { resetGame } = useGameStore()

  const reset = (e) => {
    resetGame()
    onOpenChange(false)
  }
  const link = useLink({
    href: '/',
  })

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack padding="$4" gap="$4">
        <Text fontSize="$6" fontWeight="bold" textAlign="center">
          Settings
        </Text>

        {/* Controls */}
        <Button onPress={reset}>Reset Game</Button>
        <Button {...link}>Leave Game</Button>
      </YStack>
    </BaseSheet>
  )
}
