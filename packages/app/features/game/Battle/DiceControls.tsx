import React from 'react'
import { Button, XStack, YStack } from 'tamagui'
import { Minus, Plus } from 'lucide-react'
import { DiceIcon } from '../Card/RangerCard'
import { RangerColorKey, rangerColors } from '../utils/colors'

interface BattleControlsProps {
  baseAttack: number
  currentAttack: number
  rangerColor: RangerColorKey
  onAddDice: () => void
  onRemoveDice: () => void
  onStartRoll: () => void
  onCancel: () => void
}

export const BattleControls: React.FC<BattleControlsProps> = ({
  baseAttack,
  currentAttack,
  rangerColor,
  onAddDice,
  onRemoveDice,
  onStartRoll,
  onCancel,
}) => {
  // Ensure baseAttack is at least 1
  const effectiveBaseAttack = Math.max(1, baseAttack)

  // Calculate how many dice to show in each row
  const rows: React.ReactNode[][] = []
  let currentRow: React.ReactNode[] = []

  // Create all dice elements
  for (let i = 0; i < Math.max(effectiveBaseAttack, currentAttack); i++) {
    const isBonus = i >= effectiveBaseAttack
    const isActive = i < currentAttack

    currentRow.push(
      <DiceIcon
        key={i}
        size={24}
        color={
          isBonus
            ? rangerColors[rangerColor]
            : isActive
              ? `rgb(55, 65, 81)`
              : `rgba(55, 65, 81, 0.5)`
        }
      />
    )

    // Start new row after every 5 dice
    if (currentRow.length === 5) {
      rows.push([...currentRow])
      currentRow = []
    }
  }

  // Add any remaining dice in the last row
  if (currentRow.length > 0) {
    rows.push(currentRow)
  }

  return (
    <>
      <XStack gap="$4" alignItems="flex-start">
        <Button size="$3" circular disabled={currentAttack <= 1} onPress={onRemoveDice}>
          <Minus size={16} />
        </Button>

        <YStack gap="$2">
          {rows.map((row, index) => (
            <XStack key={`row-${index}`} gap="$2">
              {row}
            </XStack>
          ))}
        </YStack>

        <Button size="$3" circular onPress={onAddDice}>
          <Plus size={16} />
        </Button>
      </XStack>

      <XStack gap="$4" paddingTop="$4">
        <Button flexGrow={1} onPress={onCancel}>
          Cancel
        </Button>
        <Button flexGrow={1} onPress={onStartRoll}>
          Roll Dice
        </Button>
      </XStack>
    </>
  )
}
