import { Button, Sheet, Text, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { useEffect, useState } from 'react'
import RangerCard from '../Card/RangerCard'

export const RangerOptionsUI = () => {
  const { gameState, enterBattleMode, exitBattleMode, playedCard, discardCard } = useGameStore()

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

  return (
    <Sheet
      modal
      animation="100ms"
      open={open}
      onOpenChange={onOpenChange}
      snapPoints={[70]}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Handle />
      <Sheet.Frame padding={0} justifyContent="space-between" backgroundColor="$color2">
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

        <XStack padding="$4" paddingTop={0} width="100%">
          <Button
            flex={1}
            onPress={() => {
              setOpen(false)
              exitBattleMode()
            }}
          >
            Close
          </Button>
        </XStack>
      </Sheet.Frame>
    </Sheet>
  )
}
