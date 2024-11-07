import React from 'react'
import { Stack, Button, Text, XStack, YStack } from 'tamagui'
import useGameStore from '../../gameStateStore'
import { DiceRoll } from '../../Dice/DiceRoll'

export const BattleSequence = () => {
  const [isRolling, setIsRolling] = React.useState(false)
  const [rollComplete, setRollComplete] = React.useState(false)

  const { gameState, playedCard, exitBattleMode, selectedEnemy } = useGameStore()

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

  const canReroll = true
  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        backgroundColor="$accentColor"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.5}
      />
      {!selectedEnemy ? null : (
        <YStack
          height={300}
          width={350}
          borderRadius="$6"
          justifyContent={isRolling || rollComplete ? 'flex-end' : 'center'}
          alignItems="center"
          gap={20}
          paddingBottom="$5"
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
              <XStack width="100%" gap="$2" justifyContent="center" px="$5">
                {canReroll && (
                  <Button flexBasis="50%" disabled={!rollComplete} onPress={handleStartRoll}>
                    Reroll
                  </Button>
                )}
                <Button flexBasis="50%" disabled={!rollComplete} onPress={exitBattleMode}>
                  Continue
                </Button>
              </XStack>
            </>
          )}
        </YStack>
      )}
    </Stack>
  )
}
