import { Stack, Button, XStack, YStack, Text } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { DiceRoll } from '../Dice/DiceRoll'
import { BattleControls } from './DiceControls'
import { useBattleStore } from '../Battle/useBattleState'
import { useEffect } from 'react'

export const RangerBattleSequence = () => {
  const { gameState, playedCard, exitBattleMode, showCardOptions, playedCardIndex } = useGameStore()

  const {
    currentAttackIndex,
    isRolling,
    rollComplete,
    currentDiceCount,
    hasMoreAttacks,
    totalDamage,
    totalDamageAllAttacks,
    attacks,
    initializeBattle,
    addDice,
    removeDice,
    startRoll,
    completeRoll,
    nextAttack,
    reset,
  } = useBattleStore()

  // Initialize battle when entering battle mode
  useEffect(() => {
    if (gameState === GameState.rangerBattle && playedCard) {
      initializeBattle(playedCard.type === 'attack' ? playedCard.attack : [])
    }
    return () => reset()
  }, [gameState, playedCard])

  if (gameState !== GameState.rangerBattle || !playedCard) {
    return null
  }

  const currentAttack = attacks[currentAttackIndex]
  const baseAttack = currentAttack?.value || 0

  const handleContinue = () => {
    if (hasMoreAttacks) {
      nextAttack()
    } else {
      showCardOptions(playedCardIndex)
    }
  }

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

      <YStack
        height={350}
        width={350}
        borderRadius="$6"
        justifyContent="space-between"
        alignItems="center"
        gap={20}
        paddingVertical="$5"
        zIndex={100}
        backgroundColor="$color2"
        padding="$4"
      >
        <YStack gap="$2" alignItems="center">
          <Text fontSize="$5" fontWeight="bold" color="$gray11">
            Attack {currentAttackIndex + 1} of {attacks.length}
          </Text>
          {attacks.length > 1 && (
            <Text fontSize="$3" color="$gray10">
              Total Damage So Far: {totalDamageAllAttacks}
            </Text>
          )}
        </YStack>

        <YStack flex={1} justifyContent="center" alignItems="center" gap="$4">
          {!isRolling && !rollComplete ? (
            <BattleControls
              baseAttack={baseAttack}
              currentAttack={currentDiceCount}
              rangerColor={playedCard.color}
              onAddDice={addDice}
              onRemoveDice={removeDice}
              onStartRoll={startRoll}
              onCancel={exitBattleMode}
            />
          ) : (
            <>
              <DiceRoll
                numDice={currentDiceCount}
                isRolling={isRolling}
                onRollComplete={completeRoll}
              />
            </>
          )}
        </YStack>

        <XStack width="100%" gap="$2" justifyContent="center" px="$5">
          {isRolling || rollComplete ? (
            <>
              <Button flexBasis="50%" disabled={!rollComplete || isRolling} onPress={startRoll}>
                Reroll
              </Button>
              <Button
                flexBasis="50%"
                disabled={!rollComplete || isRolling}
                onPress={handleContinue}
              >
                {hasMoreAttacks ? 'Next Attack' : 'Continue'}
              </Button>
            </>
          ) : (
            <Button flexBasis="100%" onPress={exitBattleMode}>
              Cancel
            </Button>
          )}
        </XStack>
      </YStack>
    </Stack>
  )
}
