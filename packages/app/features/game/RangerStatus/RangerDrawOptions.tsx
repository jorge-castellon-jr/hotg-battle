import { Button, Text, XStack, YStack } from 'tamagui'
import useGameStore from '../gameStateStore'
import RangerCard from '../Card/RangerCard'
import { BaseSheet } from '../UI/BaseSheet'

export const RangerDrawSheet = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const {
    playedCard,
    discardDeckCard,
    drawCard,
    exitBattleMode,
    moveCardToBottom,
    exitDrawOptions,
  } = useGameStore()

  function onOpenChange(open: boolean) {
    setOpen(open)
    if (!open) exitDrawOptions
  }
  function draw() {
    drawCard()
    setOpen(false)
    exitBattleMode()
  }
  function toBottom() {
    moveCardToBottom()
    setOpen(false)
  }
  function discard() {
    discardDeckCard()
    setOpen(false)
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

        <Button onPress={draw}>To Hand</Button>
        <Button onPress={toBottom}>Bottom of Deck</Button>
        <Button onPress={discard}>Discard</Button>
      </YStack>
    </BaseSheet>
  )
}
