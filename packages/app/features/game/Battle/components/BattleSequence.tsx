// src/features/game/battle/components/BattleSequence.tsx
import React from 'react'
import { Stack, Button, Text } from 'tamagui'
import { withSpring } from 'react-native-reanimated'
import type { BattleSequenceProps } from '../types/battleTypes'
import { DiceRoll } from './DiceRoll'
import { EnemyCard } from '../../Card/CardTypes'

interface ExtendedBattleSequenceProps extends BattleSequenceProps {
  enemies: {
    top: EnemyCard[]
    bottom: EnemyCard[]
  }
}

export const BattleSequence: React.FC<ExtendedBattleSequenceProps> = ({
  isVisible,
  playedCard,
  onBack,
  handOffsetY,
  enemies,
}) => {
  const [selectedEnemy, setSelectedEnemy] = React.useState<EnemyCard | null>(null)
  const [isRolling, setIsRolling] = React.useState(false)
  const [rollComplete, setRollComplete] = React.useState(false)

  // Reset states when battle sequence starts
  React.useEffect(() => {
    if (isVisible) {
      setSelectedEnemy(null)
      setIsRolling(false)
      setRollComplete(false)
      // Animate hand away
      handOffsetY.value = withSpring(500)
    }
  }, [isVisible])

  const handleEnemySelect = (enemy: EnemyCard) => {
    setSelectedEnemy(enemy)
  }

  const handleStartRoll = () => {
    setIsRolling(true)
  }

  const handleRollComplete = (results: number[]) => {
    setIsRolling(false)
    setRollComplete(true)
    const totalDamage = results.reduce((a, b) => a + b, 0)
    console.log('Total damage:', totalDamage)
    // Handle damage application here
  }

  if (!isVisible) return null

  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="rgba(0, 0, 0, 0.7)"
      justifyContent="center"
      alignItems="center"
    >
      {!selectedEnemy ? (
        // Enemy Selection Phase
        <Stack flex={1} justifyContent="center" alignItems="center" padding={20}>
          <Text color="white" fontSize={20} marginBottom={20}>
            Select an enemy to attack
          </Text>
          <Stack gap={10}>
            {[...enemies.top, ...enemies.bottom].map((enemy, index) => (
              <Button
                key={index}
                onPress={() => handleEnemySelect(enemy)}
                backgroundColor="$gray8"
                pressStyle={{ scale: 0.98 }}
              >
                {enemy.name} (Health: {enemy.health})
              </Button>
            ))}
          </Stack>
        </Stack>
      ) : !isRolling && !rollComplete ? (
        // Pre-Roll Phase
        <Stack alignItems="center" gap={20}>
          <Text color="white" fontSize={20}>
            Attacking {selectedEnemy.name}
          </Text>
          <Button onPress={handleStartRoll}>Roll Dice</Button>
        </Stack>
      ) : (
        // Rolling or Results Phase
        <Stack alignItems="center" gap={20}>
          {playedCard?.attack?.value && (
            <DiceRoll
              numDice={playedCard.attack.value}
              isRolling={isRolling}
              onRollComplete={handleRollComplete}
            />
          )}
          {rollComplete && (
            <Text color="white" fontSize={20}>
              Attack Complete!
            </Text>
          )}
        </Stack>
      )}

      {/* Back Button */}
      <Button
        position="absolute"
        bottom={40}
        left={20}
        onPress={() => {
          handOffsetY.value = withSpring(0)
          setSelectedEnemy(null)
          setIsRolling(false)
          setRollComplete(false)
          onBack()
        }}
      >
        Back
      </Button>
    </Stack>
  )
}
