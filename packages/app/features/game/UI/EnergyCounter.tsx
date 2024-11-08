import React from 'react'
import { Stack, Text } from 'tamagui'
import { Zap } from 'lucide-react'
import useGameStore from '../gameStateStore'
import { EnergySheet } from './EnergySheet'
import { cardShadow } from '../Card/cardStyles'

export const EnergyCounter: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { energy } = useGameStore()

  return (
    <>
      <Stack
        position="absolute"
        right={0}
        top="50%"
        backgroundColor="$yellow10Light"
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
        <Zap size={24} color="white" />
        <Text color="white" fontSize="$6" fontWeight="bold">
          {energy}
        </Text>
      </Stack>

      <EnergySheet open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}
