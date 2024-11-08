import { Button, Sheet, Stack, Text, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { useEffect } from 'react'
import RangerCard from '../Card/RangerCard'

export const RangerDeckOptionsUI = ({
  open,
  setOpen,
  type,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  type: 'deck' | 'discard'
}) => {
  const { gameState, playedCard, discardDeckCard,returnCardFromDiscard } = useGameStore()

  useEffect(() => {
    if (gameState === GameState.rangerDeckCardOptions) {
      setOpen(true)
    } else setOpen(false)
  }, [gameState])

  function onOpenChange(open: boolean) {
    setOpen(open)
  }
  function discard() {
    discardDeckCard()
    setOpen(false)
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
            {type === 'deck' ? (
              <Button onPress={discard}>Discard</Button>
            ) : (
              <Stack gap="$2">
                <Text>Add to:</Text>
                <XStack gap="$4">
                  <Button flex={1} flexBasis="100%" onPress={()=>returnCardFromDiscard('bottom')}>
                    Top of Deck
                  </Button>
                  <Button flex={1} flexBasis="100%" onPress={()=>returnCardFromDiscard('top')}>
                    Bottom of Deck
                  </Button>
                </XStack>
              </Stack>
            )}
          </YStack>
        </YStack>

        <XStack padding="$4" paddingTop={0} width="100%">
          <Button flex={1} onPress={() => setOpen(false)}>
            Close
          </Button>
        </XStack>
      </Sheet.Frame>
    </Sheet>
  )
}
