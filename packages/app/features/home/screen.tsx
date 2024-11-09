import { Button, H1, Paragraph, YStack } from '@my/ui'
import { useLink } from 'solito/navigation'

export function HomeScreen() {
  const gameLinkProps = useLink({
    href: '/game',
  })

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      {/* <XStack */}
      {/*   pos="absolute" */}
      {/*   w="100%" */}
      {/*   t="$6" */}
      {/*   gap="$6" */}
      {/*   jc="center" */}
      {/*   fw="wrap" */}
      {/*   $sm={{ pos: 'relative', t: 0 }} */}
      {/* > */}
      {/*   {Platform.OS === 'web' && ( */}
      {/*     <> */}
      {/*       <SwitchRouterButton pagesMode={pagesMode} /> */}
      {/*       <SwitchThemeButton /> */}
      {/*     </> */}
      {/*   )} */}
      {/* </XStack> */}

      <YStack gap="$4">
        <YStack>
          <H1 ta="center" col="$color12">
            Heroes of the Grid
          </H1>
          <H1 ta="center" col="$color12">
            Battle Simulator
          </H1>
        </YStack>
        <Paragraph col="$color10" ta="center">
          Here's a basic starter to show navigating from one screen to another.
        </Paragraph>
      </YStack>

      <Button {...gameLinkProps}>Go to Prototype</Button>
    </YStack>
  )
}
