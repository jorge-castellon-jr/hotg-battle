import GameScreen from 'app/features/game/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Game',
        }}
      />
      <GameScreen />
    </>
  )
}
