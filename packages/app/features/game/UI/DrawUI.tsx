import { Button, XStack } from 'tamagui'
import useGameStore, { GameState } from '../gameStateStore'

export const DrawUI = () => {
  const {
    setupCompleted,
    gameState,

    showUI,
    hideUI,
  } = useGameStore()

  if (!setupCompleted) return null
  if (
    gameState == GameState.rangerBattle ||
    gameState === GameState.rangerCardOptions ||
    gameState == GameState.selectedEnemy
  ) {
    return null
  }

  return (
    <XStack position="absolute" top="50%" right="$3" justifyContent="flex-end" padding="$3">
      {gameState !== GameState.draw ? (
        <Button onPress={() => showUI(GameState.draw)}>Draw</Button>
      ) : (
        <Button onPress={hideUI}>Cancel</Button>
      )}
    </XStack>
  )
}
