import { Button, Stack, YStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'

export const EnemyOptionsUI = () => {
  const { gameState, exitBattleMode, markEnemyAsActivated, markEnemyAsDefeated, selectedEnemy } =
    useGameStore()

  if (gameState !== GameState.enemyCardOptions) return null

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
      <YStack
        height={300}
        width={350}
        borderRadius="$6"
        justifyContent="center"
        alignItems="center"
        gap={20}
        paddingBottom="$5"
        zIndex={100}
        backgroundColor="$background"
        shadowColor="$shadowColor"
        shadowRadius={5}
        shadowOffset={{ width: -4, height: 2 }}
        shadowOpacity={1}
      >
        <Button onPress={markEnemyAsActivated}>Rotate</Button>
        <Button onPress={markEnemyAsDefeated}>{selectedEnemy?.defeated && 'Undo'}Defeat</Button>
        <Button onPress={exitBattleMode}>Cancel</Button>
      </YStack>
    </Stack>
  )
}
