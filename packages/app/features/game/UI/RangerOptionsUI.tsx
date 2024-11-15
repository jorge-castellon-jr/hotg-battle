import { Button, Stack, Text, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { useEffect, useState } from 'react'
import RangerCard from '../Card/RangerCard'
import { BaseSheet } from './BaseSheet'

export const RangerOptionsUI = () => {
  const {
    gameState,
    enterBattleMode,
    exitBattleMode,
    playedCard,
    moveHandCardToTop,
    moveHandCardToBottom,
    discardCard,
  } = useGameStore()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (gameState === GameState.rangerCardOptions) {
      setOpen(true)
    } else setOpen(false)
  }, [gameState])

  function onOpenChange(open: boolean) {
    setOpen(open)
    if (!open) exitBattleMode()
  }

  if (!playedCard) return null

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
          {playedCard.type === 'attack' && playedCard.attack.length && (
            <Button onPress={enterBattleMode}>Attack</Button>
          )}
          <Stack gap="$2">
            <Text>Move to:</Text>
            <XStack gap="$4">
              <Button flex={1} flexBasis="100%" onPress={moveHandCardToTop}>
                Top of Deck
              </Button>
              <Button flex={1} flexBasis="100%" onPress={moveHandCardToBottom}>
                Bottom of Deck
              </Button>
            </XStack>
          </Stack>
          <Button onPress={discardCard}>Discard</Button>
        </YStack>
      </YStack>
    </BaseSheet>
  )
}
