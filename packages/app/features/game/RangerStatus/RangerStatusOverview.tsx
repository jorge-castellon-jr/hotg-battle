import React from 'react'
import { Sheet, YStack, Text, Button, XStack } from 'tamagui'
import { RangerDecks } from '../GameTypes'
import { rangerColors } from '../utils/colors'
import useGameStore from '../gameState'
import { AnimatedRangerStatus } from './AnimatedRangerStatus'

interface RangerStatusOverviewProps {
  rangers: RangerDecks
}

const RangerStatusOverview: React.FC<RangerStatusOverviewProps> = ({ rangers }) => {
  const [open, setOpen] = React.useState(false)
  const [selectedPosition, setSelectedPosition] = React.useState<
    'left' | 'middle' | 'right' | null
  >(null)

  const { playedCard } = useGameStore()

  return (
    <>
      <AnimatedRangerStatus rangers={rangers} isVisible={!playedCard} />

      <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[30]} dismissOnSnapToBottom>
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <YStack gap="$4">
            <Text fontSize="$4" fontWeight="bold" textAlign="center">
              Draw Card for {selectedPosition && rangers[selectedPosition].name}?
            </Text>
            <Text fontSize="$3" color="$gray11" textAlign="center">
              Remaining cards: {selectedPosition && rangers[selectedPosition].cards.length}
            </Text>
            <XStack gap="$2" justifyContent="center">
              <Button size="$4" backgroundColor="$gray3" onPress={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                size="$4"
                backgroundColor={
                  selectedPosition ? rangerColors[rangers[selectedPosition].color] : '$blue9'
                }
                onPress={() => {
                  if (selectedPosition) {
                    setOpen(false)
                  }
                }}
              >
                <Text color="white">Confirm Draw</Text>
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

export default RangerStatusOverview
