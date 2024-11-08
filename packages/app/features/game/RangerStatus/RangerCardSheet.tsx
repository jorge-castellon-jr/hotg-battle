import { useState } from 'react'
import { Stack, Text, XStack, YStack, ScrollView, Button } from 'tamagui'
import { RangerCard as RangerCardType } from '../Card/CardTypes'
import RangerCard from '../Card/RangerCard'
import useGameStore from '../gameStateStore'
import { RangerDeckOptionsUI } from '../UI/RangerDeckOptionsUI'
import { BaseSheet } from '../UI/BaseSheet'

interface RangerCardSheetProps {
  open: boolean
  type: 'deck' | 'discard'
  onOpenChange: (open: boolean) => void
  cards: RangerCardType[]
  title: string
  color: string
}

const RangerCardSheet = ({
  type,
  open,
  onOpenChange,
  cards,
  title,
  color,
}: RangerCardSheetProps) => {
  const { setPlayedCardIndex, setPlayedCard } = useGameStore()
  const [openDeck, setOpenDeck] = useState(false)

  return (
    <>
      <BaseSheet open={open} onOpenChange={onOpenChange} disableDrag={true}>
        <YStack flex={1} padding="$2">
          {/* Header */}
          <Text fontSize="$6" fontWeight="bold" color={`$${color}9`} textAlign="center">
            {title}
          </Text>

          {/* Cards Grid */}
          <YStack flex={1}>
            <ScrollView flex={1} height={500} showsVerticalScrollIndicator={false}>
              <XStack
                flexWrap="wrap"
                gap="$4"
                paddingVertical="$4"
                justifyContent="center"
                alignItems="center"
              >
                {cards
                  .map((card, index) => (
                    <Stack key={`${card.name}-${index}`}>
                      <RangerCard
                        card={card}
                        onPress={() => {
                          setOpenDeck(true)
                          setPlayedCard(card)
                          setPlayedCardIndex(index)
                        }}
                      />
                    </Stack>
                  ))
                  .reverse()}
              </XStack>
            </ScrollView>
          </YStack>
        </YStack>
      </BaseSheet>

      <RangerDeckOptionsUI type={type} open={openDeck} setOpen={setOpenDeck} />
    </>
  )
}
export default RangerCardSheet
