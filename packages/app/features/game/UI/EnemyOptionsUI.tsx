import { Text, XStack, YStack, Button } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { BaseSheet } from './BaseSheet'
import { useEffect, useState } from 'react'
import EnemyCard from '../Card/EnemyCard'
import { DamageCounter } from '../Enemy/DamageCounter'
import { rangerColors } from '../utils/colors'
import { Minus, Plus } from 'lucide-react'
import { RangerPosition } from 'app/features/setup/setupTypes'

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
    enterEnemyBattle,
    rangerDecks,
    addEnemyCounter,
    removeEnemyCounter,
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

  const [openCounters, setOpenCounters] = useState(false)
  const placeCounterUI = () => {
    setOpenCounters(true)
  }

  if (!selectedEnemy) return null
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
          <Button flex={1} flexBasis="100%" onPress={markEnemyAsDefeated}>
            {selectedEnemy?.defeated ? 'Undo Defeat' : 'Defeat'}
          </Button>
          <Button flex={1} flexBasis="100%" onPress={markEnemyAsActivated}>
            {selectedEnemy?.activated ? 'Undo Rotation' : 'Rotate'}
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

        <Button onPress={placeCounterUI}>Place Counters</Button>

        <Button onPress={enterEnemyBattle}>Attack</Button>
      </YStack>

      <BaseSheet open={openCounters} onOpenChange={setOpenCounters}>
        <YStack padding="$4" gap="$4">
          <Text fontSize="$6" fontWeight="bold" textAlign="center">
            Place Counters
          </Text>
          <XStack gap="$4">
            {Object.entries(rangerDecks).map(([key, ranger]) => (
              <YStack
                backgroundColor="$gray3"
                borderRadius="$4"
                padding="$3"
                alignItems="center"
                gap="$1"
                flex={1}
                flexBasis="100%"
              >
                <Text fontSize="$6" fontWeight="bold" color={rangerColors[ranger.color]}>
                  {ranger.name}
                </Text>
                <Text fontSize="$10" fontWeight="bold" color="$gray9">
                  {selectedEnemy.counters[key].value}
                </Text>
                <XStack gap="$2" width="100%">
                  <Button
                    flex={1}
                    flexBasis="100%"
                    height="$2"
                    padding={0}
                    backgroundColor={rangerColors[ranger.color]}
                    onPress={() => removeEnemyCounter(key as RangerPosition)}
                  >
                    <Minus size={16} />
                  </Button>
                  <Button
                    flex={1}
                    flexBasis="100%"
                    height="$2"
                    padding={0}
                    backgroundColor={rangerColors[ranger.color]}
                    onPress={() => addEnemyCounter(key as RangerPosition)}
                  >
                    <Plus size={16} />
                  </Button>
                </XStack>
              </YStack>
            ))}
          </XStack>
        </YStack>
      </BaseSheet>
    </BaseSheet>
  )
}
