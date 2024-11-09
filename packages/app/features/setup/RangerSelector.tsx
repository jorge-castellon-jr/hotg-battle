import React, { useState } from 'react'
import { Button, YStack, XStack } from 'tamagui'
import { RangerSelectorProps } from './setupTypes'
import { BaseSheet } from '../game/UI/BaseSheet'
import rangerDatabase from '../game/DB/rangerDatabase'

export const RangerSelector: React.FC<RangerSelectorProps> = ({ position, selected, onSelect }) => {
  const [open, setOpen] = useState(false)
  const availableRangers = rangerDatabase

  return (
    <YStack flex={1} padding="$2">
      <Button onPress={() => setOpen(true)} padding="$4" borderRadius="$4">
        {selected ? selected.name : `Select ${position} Ranger`}
      </Button>

      <BaseSheet open={open} onOpenChange={setOpen}>
        <XStack gap="$4" padding="$4" flexWrap="wrap">
          {availableRangers.map((ranger) => (
            <Button
              key={ranger.id}
              flex={1}
              flexBasis="100%"
              onPress={() => {
                onSelect(ranger.id)
                setOpen(false)
              }}
            >
              {ranger.name}
            </Button>
          ))}
        </XStack>
      </BaseSheet>
    </YStack>
  )
}
