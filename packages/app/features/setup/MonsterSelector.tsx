import React, { useState } from 'react'
import { Button, ScrollView, Text, XStack, YStack } from 'tamagui'
import { BaseSheet } from '../game/UI/BaseSheet'
import EnemyDatabase from '../game/DB/Enemies/EnemyDatabase'
import { enemyColors } from '../game/utils/colors'
import { Enemy } from '../game/GameTypes'
import useGameStore from '../game/gameStateStore'

interface EnemySelectorProps {
  selected: Enemy[]
  onSelect: (enemy: Enemy) => void
  onRemove: (index: number) => void
}

export const MonsterSelector: React.FC<EnemySelectorProps> = ({ selected, onSelect, onRemove }) => {
  const [open, setOpen] = useState(false)
  const availableEnemies = EnemyDatabase.filter((enemy) => enemy.type !== 'foot')

  const hasSelected = !!selected.length
  function handleSelectEnemy(enemy: Enemy): void {
    onSelect(enemy)
    setOpen(false)
  }

  return (
    <YStack flex={1} padding="$2">
      <Button
        onPress={() => setOpen(true)}
        padding="$4"
        borderRadius="$4"
        backgroundColor={hasSelected ? enemyColors[selected[0].type] : '$background'}
      >
        {selected.length ? selected[0].name : 'Select Monster'}
      </Button>

      <BaseSheet open={open} onOpenChange={setOpen}>
        <YStack gap="$4" padding="$4">
          <Text fontSize="$6" fontWeight="bold" textAlign="center">
            Choose Ranger
          </Text>
          <ScrollView flex={1} height={500} showsVerticalScrollIndicator={false}>
            <XStack gap="$3" padding="$3" flexWrap="wrap">
              {availableEnemies.map((enemy) => (
                <YStack
                  key={enemy.id}
                  flex={1}
                  flexBasis="40%"
                  backgroundColor={enemyColors[enemy.type]}
                  borderRadius="$4"
                  padding="$2"
                  justifyContent="center"
                  onPress={() => handleSelectEnemy(enemy)}
                >
                  <Text textAlign="center" fontSize="$3" color="white">
                    {enemy.name}
                  </Text>
                  <Text textAlign="center" fontSize="$1" color="white" textTransform="capitalize">
                    {enemy.type}
                  </Text>
                </YStack>
              ))}
            </XStack>
          </ScrollView>
        </YStack>
      </BaseSheet>
    </YStack>
  )
}
