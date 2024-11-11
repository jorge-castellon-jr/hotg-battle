import { Button } from 'tamagui'
import { useThemeSetting } from '@tamagui/next-theme'
import { Sun, Moon } from 'lucide-react'

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting()

  const setLight = () => {
    themeSetting.set('light')
  }
  const setDark = () => {
    themeSetting.set('dark')
  }

  const isDarkMode = themeSetting.resolvedTheme === 'dark'

  return (
    <Button onPress={isDarkMode ? setLight : setDark}>{isDarkMode ? <Moon /> : <Sun />}</Button>
  )
}
