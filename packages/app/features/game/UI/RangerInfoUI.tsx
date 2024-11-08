import { Button, Sheet, Text, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { useEffect, useState } from 'react'
import RangerSheetContent from '../RangerStatus/RangerSheetContent'

export const RangerInfoUI = () => {
  const { gameState, hideUI, selectedPosition, selectedRanger } = useGameStore()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (gameState === GameState.rangerInfo) {
      setOpen(true)
    } else setOpen(false)
  }, [gameState])

  function onOpenChange(open: boolean) {
    setOpen(open)
    hideUI()
  }

  return (
    <>
      <Sheet
        modal
        animation="100ms"
        open={open}
        onOpenChange={onOpenChange}
        snapPoints={[80]}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle bg="$gray8" />
        <Sheet.Frame ai="center" jc="space-between" bg="$color2">
          {selectedPosition && (
            <RangerSheetContent
              ranger={selectedRanger(selectedPosition)}
              position={selectedPosition}
            />
          )}

          <XStack padding="$4" width="100%">
            <Button
              flex={1}
              onPress={() => {
                onOpenChange(false)
              }}
            >
              Close
            </Button>
          </XStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
