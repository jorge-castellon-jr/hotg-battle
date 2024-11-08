import { Stack, Button, XStack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'
import { DiceRoll } from '../Dice/DiceRoll'
import { BattleControls } from './DiceControls'
import { useBattleState } from './useBattleState'

export const BattleSequence = () => {
  const { gameState, playedCard, exitBattleMode } = useGameStore()

  const {
    isRolling,
    rollComplete,
    currentAttack,
    handleAddDice,
    handleRemoveDice,
    handleStartRoll,
    handleRollComplete,
  } = useBattleState(playedCard?.attack?.value || 0)

  if (gameState !== GameState.rangerBattle || !playedCard) return null

  const baseAttack = playedCard.attack?.value || 0

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
        height={300}
        width={350}
        borderRadius="$6"
        justifyContent={isRolling || rollComplete ? 'flex-end' : 'center'}
        alignItems="center"
        gap={20}
        paddingBottom="$5"
        zIndex={100}
        backgroundColor="$color2"
        padding="$4"
      >
        {!isRolling && !rollComplete ? (
          <BattleControls
            baseAttack={baseAttack}
            currentAttack={currentAttack}
            rangerColor={playedCard.color}
            onAddDice={handleAddDice}
            onRemoveDice={handleRemoveDice}
            onStartRoll={handleStartRoll}
            onCancel={exitBattleMode}
          />
        ) : (
          <>
            <DiceRoll
              numDice={currentAttack}
              isRolling={isRolling}
              onRollComplete={handleRollComplete}
            />
            <XStack width="100%" gap="$2" justifyContent="center" px="$5">
              <Button flexBasis="50%" disabled={!rollComplete} onPress={handleStartRoll}>
                Reroll
              </Button>
              <Button flexBasis="50%" disabled={!rollComplete} onPress={exitBattleMode}>
                Continue
              </Button>
            </XStack>
          </>
        )}
      </YStack>
    </Stack>
  )
}
