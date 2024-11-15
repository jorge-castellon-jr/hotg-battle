import { Button, Text, XStack, YStack } from 'tamagui'
import useGameStore from '../gameStateStore'
import { BaseSheet } from '../UI/BaseSheet'
import { Badge, Minus, Plus } from 'lucide-react'
import { rangerColors } from '../utils/colors'

export const RangerCounterSheet = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const { selectedRanger, selectedPosition, setRangerCounter } = useGameStore()

  function onOpenChange(open: boolean) {
    setOpen(open)
  }
  const currentRanger = selectedRanger(selectedPosition!)

  function up() {
    setRangerCounter(currentRanger.counters + 1, selectedPosition!)
  }
  function down() {
    setRangerCounter(currentRanger.counters < 1 ? 0 : currentRanger.counters - 1, selectedPosition!)
  }

  const rangerColor = rangerColors[currentRanger.color]
  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack flex={1} padding="$4" gap="$4">
        {/* Header */}
        <Text fontSize="$6" fontWeight="bold" textAlign="center">
          Counter
        </Text>

        <YStack flex={1} justifyContent="center" alignItems="center">
          <Text fontSize="$10" fontWeight="bold" color={rangerColor}>
            {currentRanger.counters}
          </Text>
          <Text fontSize="$6" color="$gray11">
            Counters
          </Text>
        </YStack>

        <XStack gap="$3">
          <Button flex={1} flexBasis="100%" onPress={down}>
            <Minus color={rangerColor} />
          </Button>
          <Button flex={1} flexBasis="100%" onPress={up}>
            <Plus color={rangerColor} />
          </Button>
        </XStack>
      </YStack>
    </BaseSheet>
  )
}
