import React, { useState } from 'react'
import { Button, Text, XStack, YStack } from 'tamagui'
import { BaseSheet } from '../game/UI/BaseSheet'
import EnemyDatabase from '../game/DB/Enemies/EnemyDatabase'
import { Enemy } from '../game/GameTypes'
import { enemyColors } from '../game/utils/colors'

interface EnemySelectorProps {
  selected: (Enemy | null)[]
  onSelect: (enemy: Enemy, index: number) => void
}

export const EnemySelector: React.FC<EnemySelectorProps> = ({ selected, onSelect }) => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)

  const availableEnemies = EnemyDatabase.filter((enemy) => enemy.type === 'foot')

  const handleOpenSelect = (index: number) => {
    setOpen(true)
    setCurrentIndex(index)
  }

  const handleSelectEnemy = (enemy: Enemy) => {
    onSelect(enemy, currentIndex)
    setOpen(false)
  }

  return (
    <XStack flex={1} padding="$2" gap="$2">
      {selected.map((enemy, index) => (
        <YStack
          key={`${enemy ? enemy.id : 'empty'}-${index}`}
          flex={1}
          flexBasis="100%"
          onPress={() => handleOpenSelect(index)}
          paddingVertical="$4"
          paddingHorizontal="$1"
          borderRadius="$4"
          justifyContent="center"
          backgroundColor={enemy ? enemyColors[enemy.type] : '$accentBackground'}
        >
          {enemy ? (
            <>
              <Text textAlign="center" fontSize="$3" color="white">
                {enemy.name}
              </Text>
              <Text textAlign="center" fontSize="$1" color="white" textTransform="capitalize">
                {enemy.type === 'foot' ? 'Foot Soldier' : enemy.type}
              </Text>
            </>
          ) : (
            <Text textAlign="center" fontSize="$2">
              Select Foot Soldier
            </Text>
          )}
        </YStack>
      ))}

      <BaseSheet open={open} onOpenChange={setOpen}>
        <YStack gap="$4" padding="$4">
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
        </YStack>
      </BaseSheet>
    </XStack>
  )
}
