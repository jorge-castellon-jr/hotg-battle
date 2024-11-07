import { Stack } from '@my/ui'
import { DrawUI } from './DrawUI'
import { RangerOptionsUI } from './RangerOptionsUI'
import useGameStore, { GameState } from '../gameStateStore'

export const UiOverlay = () => {
  const { gameState } = useGameStore()

  const showOverlay = gameState !== GameState.default && gameState !== GameState.draw
  return (
    <>
      <Stack
        backgroundColor={showOverlay ? '$accentColor' : undefined}
        pointerEvents={showOverlay ? 'auto' : 'none'}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.5}
      />
      <RangerOptionsUI />

      <DrawUI />
    </>
  )
}
