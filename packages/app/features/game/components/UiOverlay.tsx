import { Button, Stack, XStack, YStack } from 'tamagui'
import useGameStore from '../gameStateStore'

export const UiOverlay = () => {
  const {
    turn,
    canDraw,
    setCanDraw,
    showCardOptions,
    enterBattleMode,
    exitBattleMode,
    playedCard,
    discardCard
  } = useGameStore()
  return (
    <>
      {showCardOptions && (
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
            {playedCard?.attack && <Button onPress={enterBattleMode}>Attack</Button>}
            <Button onPress={discardCard}>Discard</Button>
            <Button onPress={exitBattleMode}>Cancel</Button>
          </YStack>
        </Stack>
      )}

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
