import { Button, Sheet, Text, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { useEffect, useState } from 'react'
import RangerCard from '../Card/RangerCard'
import { BaseSheet } from './BaseSheet'

export const RangerOptionsUI = () => {
  const { gameState, enterBattleMode, exitBattleMode, playedCard, discardCard } = useGameStore()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log('gameState changed', gameState)

    if (gameState === GameState.rangerCardOptions) {
      setOpen(true)
    } else setOpen(false)
  }, [gameState])

  function onOpenChange(open: boolean) {
    setOpen(open)
    if (!open) exitBattleMode()
  }

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack flex={1} padding="$4" gap="$4">
        {/* Header */}
        <Text fontSize="$6" fontWeight="bold" textAlign="center">
          Card Options
        </Text>

        <XStack flex={1} justifyContent="center">
          {playedCard && <RangerCard card={playedCard} />}
        </XStack>

        {/* Cards Grid */}
        <YStack gap="$4">
          {playedCard?.attack && <Button onPress={enterBattleMode}>Attack</Button>}
          <Button onPress={discardCard}>Discard</Button>
        </YStack>
      </YStack>
    </BaseSheet>
  )
}
