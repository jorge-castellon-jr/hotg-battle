import { Text, XStack, YStack, Button } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { BaseSheet } from './BaseSheet'
import { useEffect, useState } from 'react'
import EnemyCard from '../Card/EnemyCard'
import { DamageCounter } from '../Enemy/DamageCounter'

export const EnemyOptionsUI = () => {
  const {
    gameState,
    exitBattleMode,
    moveEnemyPosition,
    markEnemyAsActivated,
    markEnemyAsDefeated,
    selectedEnemy,
    updateEnemyDamage,
    selectedEnemyIndex,
    selectedEnemyRow,
  } = useGameStore()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (gameState === GameState.enemyCardOptions) {
      setOpen(true)
    } else setOpen(false)
  }, [gameState])

  function onOpenChange(open: boolean) {
    setOpen(open)
    exitBattleMode()
  }

  const handleDamageChange = (newDamage: number) => {
    if (selectedEnemy && selectedEnemyRow && selectedEnemyIndex !== undefined) {
      updateEnemyDamage(selectedEnemyIndex, selectedEnemyRow, newDamage)
    }
  }

  const moveEnemyLeft = () => {
    moveEnemyPosition('left')
    exitBattleMode()
  }
  const moveEnemyRight = () => {
    moveEnemyPosition('right')
    exitBattleMode()
  }

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack padding="$4" gap="$4">
        <Text fontSize="$6" fontWeight="bold" textAlign="center">
          Enemy Options
        </Text>

        <XStack flex={1} justifyContent="center">
          {selectedEnemy && <EnemyCard enemy={selectedEnemy} />}
        </XStack>

        {selectedEnemy && (
          <DamageCounter
            currentDamage={selectedEnemy.currentDamage}
            onDamageChange={handleDamageChange}
          />
        )}

        <XStack gap="$4">
          <Button flex={1} flexBasis="100%" onPress={markEnemyAsActivated}>
            {selectedEnemy?.activated ? 'Undo Rotation' : 'Rotate'}
          </Button>
          <Button flex={1} flexBasis="100%" onPress={markEnemyAsDefeated}>
            {selectedEnemy?.defeated ? 'Undo Defeat' : 'Defeat'}
          </Button>
        </XStack>
        <XStack gap="$4">
          <Button flex={1} flexBasis="100%" onPress={moveEnemyLeft}>
            Move Left
          </Button>
          <Button flex={1} flexBasis="100%" onPress={moveEnemyRight}>
            Move Right
          </Button>
        </XStack>
      </YStack>
    </BaseSheet>
  )
}
