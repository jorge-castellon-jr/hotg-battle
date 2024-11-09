import React from 'react'
import { Stack } from 'tamagui'
import { Menu } from 'lucide-react'
import { cardShadow } from '../Card/cardStyles'
import { SettingsSheet } from './SettingsSheet'

export const SettingsUI: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Stack
        position="absolute"
        right={0}
        top="$4"
        backgroundColor="$color10"
        paddingVertical="$3"
        paddingHorizontal="$4"
        borderTopLeftRadius="$4"
        borderBottomLeftRadius="$4"
        flexDirection="row"
        alignItems="center"
        gap="$2"
        cursor="pointer"
        {...cardShadow}
        onPress={() => setIsOpen(true)}
      >
        <Menu size={24} color="white" />
      </Stack>

      <SettingsSheet open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}
