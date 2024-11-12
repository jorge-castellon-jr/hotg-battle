import { YStack, XStack, Button, Text } from 'tamagui'
import { RangerSelector } from './RangerSelector'
import useGameStore from '../game/gameStateStore'
import { RangerPosition, SetupConfig } from './setupTypes'
import { useLink } from 'solito/navigation'
import { useEffect } from 'react'

const GameSetupScreen = () => {
  const { enemies, setRanger, rangerDecks, resetGame, resetRangers } = useGameStore()

  const handleRangerSelect = (position: RangerPosition, rangerId: string) => {
    setRanger(position, rangerId)
  }

  const handleEnemySelect = (type: 'footSoldiers' | 'monster', enemyName: string) => {
    // setSetupConfig((prev) => ({
    //   ...prev,
    //   enemies: {
    //     ...prev.enemies,
    //     [type]: enemyName,
    //   },
    // }))
  }

  const canStartGame = Object.values(rangerDecks).every((r) => r !== null)

  const gameLinkProps = useLink({
    href: '/game',
  })

  useEffect(() => {
    resetGame()
    resetRangers()
  }, [])

  return (
    <YStack flex={1} padding="$4" gap="$4">
      <Text fontSize="$8" fontWeight="bold" textAlign="center">
        Game Setup
      </Text>

      {/* Rangers Selection */}
      <YStack gap="$4">
        <Text fontSize="$6" fontWeight="bold">
          Choose Your Rangers
        </Text>
        <YStack gap="$2" justifyContent="space-between">
          <RangerSelector
            position="First"
            selected={rangerDecks.left}
            onSelect={(ranger) => handleRangerSelect('left', ranger)}
          />
          <RangerSelector
            position="Second"
            selected={rangerDecks.middle}
            onSelect={(ranger) => handleRangerSelect('middle', ranger)}
          />
          <RangerSelector
            position="Last"
            selected={rangerDecks.right}
            onSelect={(ranger) => handleRangerSelect('right', ranger)}
          />
        </YStack>
      </YStack>

      {/* Enemies Selection */}
      {/* <YStack gap="$4"> */}
      {/*   <Text fontSize="$6" fontWeight="bold"> */}
      {/*     Choose Your Enemies */}
      {/*   </Text> */}
      {/*   <XStack gap="$2" justifyContent="space-between"> */}
      {/*     <EnemySelector */}
      {/*       type="monster" */}
      {/*       selected={enemies.top} */}
      {/*       onSelect={(enemy) => handleEnemySelect('monster', enemy)} */}
      {/*     /> */}
      {/*     <EnemySelector */}
      {/*       type="foot" */}
      {/*       selected={enemies.bottom} */}
      {/*       onSelect={(enemy) => handleEnemySelect('footSoldiers', enemy)} */}
      {/*     /> */}
      {/*   </XStack> */}
      {/* </YStack> */}
      {/**/}
      <Button
        {...gameLinkProps}
        backgroundColor="$blue9"
        color="white"
        size="$6"
        disabled={!canStartGame}
        opacity={canStartGame ? 1 : 0.5}
      >
        Start Game
      </Button>
    </YStack>
  )
}

export default GameSetupScreen
