import { Button, H1, YStack, Text, XStack } from '@my/ui'
import { AlertCircle, Bug, Construction, Swords } from 'lucide-react'
import Link from 'next/link'

interface SectionHeaderProps {
  icon: React.ReactNode
  title: string
}

const SectionHeader = ({ icon, title }: SectionHeaderProps) => (
  <XStack alignItems="center" gap="$2">
    {icon}
    <Text fontWeight="bold" fontSize="$4">
      {title}
    </Text>
  </XStack>
)

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <YStack gap="$4">
        <YStack>
          <H1 ta="center" col="$color12">
            Heroes of the Grid
          </H1>
          <H1 ta="center" col="$color12">
            Battle Simulator
          </H1>
        </YStack>

        <Link href="/setup">
          <Button>Go To Setup</Button>
        </Link>

        <YStack gap="$2">
          <SectionHeader icon={<Swords size={20} />} title="Game Overview" />
          <Text fontSize="$3" color="$gray11">
            This is an unofficial battle simulator for the Power Rangers: Heroes of the Grid board
            game by Renegade Game Studios. It specifically focuses on simulating the card battle
            phase, allowing players to test strategies and practice combat encounters. This tool is
            designed to help players better understand and experiment with the battle mechanics of
            the physical board game.
          </Text>
        </YStack>
        <YStack gap="$2">
          <SectionHeader icon={<AlertCircle size={20} />} title="Disclaimer" />
          <Text fontSize="$3" color="$gray11">
            This is a fan-made simulator and is not affiliated with, endorsed, sponsored, or
            specifically approved by Renegade Game Studios or Hasbro. Power Rangers and all related
            properties are trademarks of Hasbro.
          </Text>
        </YStack>

        <YStack gap="$2">
          <SectionHeader icon={<Construction size={20} />} title="Development Status" />
          <Text fontSize="$3" color="$gray11">
            This simulator is currently in prototype phase and under active development. Some game
            mechanics may be simplified or differ slightly from the physical game. Features are
            being refined based on player feedback.
          </Text>
        </YStack>

        <YStack gap="$2">
          <SectionHeader icon={<Bug size={20} />} title="Report Issues" />
          <Text fontSize="$3" color="$gray11">
            Found a bug or have suggestions? Please reach out to the developer on Facebook or click
            the report bug button on the settings page during playing. Your feedback is crucial in
            making this simulator more accurate and useful for the community.
          </Text>
        </YStack>
      </YStack>
    </YStack>
  )
}
