import { Button, Text, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { BaseSheet } from './BaseSheet'
import { useEffect, useState } from 'react'
import EnemyCard from '../Card/EnemyCard'

export const EnemyOptionsUI = () => {
  const { gameState, exitBattleMode, markEnemyAsActivated, markEnemyAsDefeated, selectedEnemy } =
    useGameStore()

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

  return (
    <BaseSheet open={open} onOpenChange={onOpenChange}>
      <YStack padding="$4" gap="$4">
        <Text fontSize="$6" fontWeight="bold" textAlign="center">
          Enemy Options
        </Text>

        <XStack flex={1} justifyContent="center">
          {selectedEnemy && <EnemyCard enemy={selectedEnemy} />}
        </XStack>
        <Button onPress={markEnemyAsActivated}>Rotate</Button>
        <Button onPress={markEnemyAsDefeated}>{selectedEnemy?.defeated && 'Undo'}Defeat</Button>
      </YStack>
    </BaseSheet>
  )
}
