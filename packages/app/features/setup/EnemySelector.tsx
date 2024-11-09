import React, { useState } from 'react'
import { Button, YStack } from 'tamagui'
import { EnemySelectorProps } from './setupTypes'
import { BaseSheet } from '../game/UI/BaseSheet'

const ENEMIES = {
  foot: ['Putty Patrollers', 'Tenga Warriors', 'Cogs'],
  monster: ['Evil Green Ranger', 'Goldar', 'King Sphinx', 'Knasty Knight'],
}

export const EnemySelector: React.FC<EnemySelectorProps> = ({ type, selected, onSelect }) => {
  const [open, setOpen] = useState(false)
  const availableEnemies = ENEMIES[type]

  return (
    <YStack flex={1} padding="$2">
      <Button onPress={() => setOpen(true)} padding="$4" borderRadius="$4">
        {selected || `${type === 'foot' ? 'Foot Soldiers' : 'Monster'}`}
      </Button>

      <BaseSheet open={open} onOpenChange={setOpen}>
        <YStack gap="$4" padding="$4">
          {availableEnemies.map((enemy) => (
            <Button
              key={enemy}
              onPress={() => {
                onSelect(enemy)
                setOpen(false)
              }}
            >
              {/* {enemy} */}
            </Button>
          ))}
        </YStack>
      </BaseSheet>
    </YStack>
  )
}
