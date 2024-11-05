import React from 'react'
import { Stack, Button, Text, XStack, YStack } from 'tamagui'
import useGameStore from '../../gameState'
import { DiceRoll } from '../../Dice/DiceRoll'

export const BattleSequence = () => {
  const [isRolling, setIsRolling] = React.useState(false)
  const [rollComplete, setRollComplete] = React.useState(false)

  const { playedCard, exitBattleMode, enemies, selectedEnemy, setSelectedEnemy } = useGameStore()

  // Reset states when battle sequence starts
  React.useEffect(() => {
    if (!!playedCard) {
      setIsRolling(false)
      setRollComplete(false)
      // Animate hand away
    }
  }, [playedCard])

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

  if (!playedCard) return null

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
      {!selectedEnemy ? null : (
        <YStack
          height={300}
          width={350}
          borderRadius="$10"
          justifyContent="center"
          alignItems="center"
          gap={20}
          zIndex={100}
          backgroundColor="$background"
        >
          {!isRolling && !rollComplete ? (
            // Pre-Roll Phase
            <>
              <Text color="$accentColor" fontSize={20}>
                Attacking {selectedEnemy.name}
              </Text>
              <Button onPress={handleStartRoll}>Roll Dice</Button>
            </>
          ) : (
            <>
              {playedCard?.attack?.value && (
                // Rolling or Results Phase
                <DiceRoll
                  numDice={playedCard.attack.value}
                  isRolling={isRolling}
                  onRollComplete={handleRollComplete}
                />
              )}
              <Button disabled={!rollComplete} onPress={exitBattleMode}>Continue</Button>
            </>
          )}
        </YStack>
      )}

      {/* Back Button */}
      <Button
        position="absolute"
        top="$6"
        left="$6"
        onPress={() => {
          setIsRolling(false)
          setRollComplete(false)
          exitBattleMode()
        }}
      >
        Back
      </Button>
    </Stack>
  )
}
