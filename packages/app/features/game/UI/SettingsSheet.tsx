import React from 'react'
import { Anchor, Button, Text, YStack } from 'tamagui'
import useGameStore from '../gameStateStore'
import { BaseSheet } from './BaseSheet'
import { useLink } from 'solito/navigation'
import { SwitchThemeButton } from '@my/ui'

interface EnergySheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const SettingsSheet: React.FC<EnergySheetProps> = ({ open, onOpenChange }) => {
  const { resetGame } = useGameStore()

  const reset = () => {
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
        <SwitchThemeButton />
        <Button onPress={reset}>Reset Game</Button>
        <Button {...link}>Leave Game</Button>
        <Anchor href="https://forms.gle/s9R3Ln1X96xnh2Zo9" target="_blank">
          <Button width="100%" backgroundColor="$red8">
            Report Bug
          </Button>
        </Anchor>
      </YStack>
    </BaseSheet>
  )
}
