import React from 'react'
import { XStack, YStack, Text, Button, Sheet } from 'tamagui'
import { RangerDecks } from '../GameTypes'
import { rangerColors } from '../utils/colors'
import useGameStore from '../gameState'

interface RangerStatusOverviewProps {
  rangers: RangerDecks
}

const RangerStatusOverview: React.FC<RangerStatusOverviewProps> = ({ rangers }) => {
  const [open, setOpen] = React.useState(false)
  const [selectedPosition, setSelectedPosition] = React.useState<
    'left' | 'middle' | 'right' | null
  >(null)

  const { drawCard } = useGameStore()

  return (
    <>
      <XStack
        position="absolute"
        bottom={0}
        width="100%"
        backgroundColor="$background"
        borderTopWidth={1}
        borderTopColor="$borderColor"
        padding="$2"
        gap="$2"
      >
        {Object.entries(rangers).map(([position, ranger]) => (
          <YStack
            key={position}
            flex={1}
            backgroundColor={rangerColors[ranger.color]}
            borderRadius="$4"
            padding="$2"
            gap="$1"
          >
            {/* Ranger Name Header */}
            <XStack justifyContent="space-between" alignItems="center">
              <Text color="white" fontSize="$3" fontWeight="bold">
                {ranger.name}
              </Text>
              <Text color="white" fontSize="$2">
                {ranger.cards.length}
              </Text>
            </XStack>

            {/* Status Indicators */}
            <XStack gap="$2" justifyContent="space-between">
              <Text color="white" fontSize="$2" opacity={ranger.energyUsed ? 0.5 : 1}>
                ⚡
              </Text>
              <Text color="white" fontSize="$2" opacity={ranger.abilityUsed ? 0.5 : 1}>
                ⭐
              </Text>
            </XStack>

            {/* Draw Card Button */}
            <Button
              size="$2"
              backgroundColor="transparent"
              borderColor="white"
              borderWidth={1}
              onPress={() => {
                drawCard(position as 'left' | 'middle' | 'right')
                setSelectedPosition(position as 'left' | 'middle' | 'right')
                // setOpen(true)
              }}
            >
              <Text color="white" fontSize="$2">
                Draw
              </Text>
            </Button>
          </YStack>
        ))}
      </XStack>

      {/* Draw Card Confirmation Sheet */}
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
                    // Call your draw card function here
                    drawCard(selectedPosition)
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
