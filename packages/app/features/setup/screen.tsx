import { YStack, Button, Text, Tabs, Separator, SizableText, H5, H2 } from 'tamagui'
import { RangerSelector } from './RangerSelector'
import useGameStore from '../game/gameStateStore'
import { RangerPosition } from './setupTypes'
import { useLink } from 'solito/navigation'
import { useEffect } from 'react'
import { EnemySelector } from './EnemySelector'
import { Enemy } from '../game/GameTypes'
import { MonsterSelector } from './MonsterSelector'

const GameSetupScreen = () => {
  const { setRanger, rangerDecks, resetGame, resetRangers, setEnemy, removeEnemy, enemies } =
    useGameStore()

  const handleRangerSelect = (position: RangerPosition, rangerId: string, ability: string) => {
    setRanger(position, rangerId, ability)
  }

  const handleEnemySelectTop = (enemy: Enemy) => {
    Array(4)
      .fill(null)
      .map((_, index) => setEnemy(enemy, index, 'top'))
  }
  const handleEnemyRemoveTop = (index: number) => {
    removeEnemy(index, 'top')
  }

  const handleEnemySelectBottom = (enemy: Enemy, index: number) => {
    setEnemy(enemy, index, 'bottom')
  }

  const currentRangers = Object.values(rangerDecks)
  const rangersNeeded = 3 - currentRangers.filter(Boolean).length
  const hasAllRangers = currentRangers.every((r) => !!r)

  const hasSomeEnemies = enemies.top.some((e) => !!e) || enemies.bottom.some((e) => !!e)

  const canStartGame = hasAllRangers && hasSomeEnemies

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

      <Tabs
        defaultValue="rangers"
        flexDirection="column"
        borderRadius="$4"
        borderWidth="$0.25"
        overflow="hidden"
        borderColor="$borderColor"
      >
        <Tabs.List separator={<Separator vertical />} disablePassBorderRadius="bottom">
          <Tabs.Tab flex={1} flexBasis="100%" value="rangers">
            <SizableText fontFamily="$body">Rangers</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} flexBasis="100%" value="zords">
            <SizableText fontFamily="$body">Zords</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} flexBasis="100%" value="enemies">
            <SizableText fontFamily="$body">Enemies</SizableText>
          </Tabs.Tab>
        </Tabs.List>
        <Separator />

        <Tabs.Content value="rangers">
          {/* Rangers Selection */}
          <YStack gap="$2" padding="$2">
            {!hasAllRangers && (
              <H5 textAlign="center">You Need {rangersNeeded} Rangers to start</H5>
            )}
            <RangerSelector
              position="First"
              selected={rangerDecks.left}
              onSelect={(ranger, ability) => handleRangerSelect('left', ranger, ability)}
            />
            <RangerSelector
              position="Second"
              selected={rangerDecks.middle}
              onSelect={(ranger, ability) => handleRangerSelect('middle', ranger, ability)}
            />
            <RangerSelector
              position="Last"
              selected={rangerDecks.right}
              onSelect={(ranger, ability) => handleRangerSelect('right', ranger, ability)}
            />
          </YStack>
        </Tabs.Content>

        <Tabs.Content value="zords">
          <YStack gap="$2" padding="$2">
            <H5 textAlign="center" paddingVertical="$10">
              Coming Soon
            </H5>
          </YStack>
        </Tabs.Content>

        <Tabs.Content value="enemies">
          <YStack gap="$2" padding="$2">
            <H5 textAlign="center">You need at least 1 enemy to start</H5>
            {/* Enemies Selection */}
            <MonsterSelector
              selected={enemies.top}
              onSelect={handleEnemySelectTop}
              onRemove={handleEnemyRemoveTop}
            />

            <EnemySelector selected={enemies.bottom} onSelect={handleEnemySelectBottom} />
          </YStack>
        </Tabs.Content>
      </Tabs>

      <YStack position="absolute" bottom={0} left={0} right={0} padding="$4">
        {(!hasAllRangers || !hasSomeEnemies) && (
          <H5 textAlign="center" color="$red9">
            You still need{' '}
            {[!hasAllRangers && 'rangers', !hasSomeEnemies && 'enemies']
              .filter(Boolean)
              .join(' and ')}
          </H5>
        )}
        <Button
          backgroundColor="$blue9"
          color="white"
          size="$6"
          disabled={!canStartGame}
          opacity={canStartGame ? 1 : 0.5}
          {...gameLinkProps}
        >
          Start Game
        </Button>
      </YStack>
    </YStack>
  )
}

export default GameSetupScreen
