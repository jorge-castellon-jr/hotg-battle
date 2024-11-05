import { Button, Stack, XStack } from 'tamagui'
import useGameStore from '../gameStateStore'

export const UiOverlay = () => {
  const { turn, canDraw, setCanDraw } = useGameStore()
  return (
    <>
      {turn != 'playerSetup' && (
        <XStack position="absolute" top="50%" right="$3" justifyContent="flex-end" padding="$3">
          {canDraw ? (
            <Button onPress={() => setCanDraw(false)}>Cancel</Button>
          ) : (
            <Button onPress={() => setCanDraw(true)}>Draw</Button>
          )}
        </XStack>
      )}
    </>
  )
}
