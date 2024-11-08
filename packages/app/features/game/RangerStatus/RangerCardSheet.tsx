import React, { useState } from 'react'
import { Sheet, Stack, Text, XStack, YStack, ScrollView, Button } from 'tamagui'
import { RangerCard as RangerCardType } from '../Card/CardTypes'
import RangerCard from '../Card/RangerCard'
import useGameStore, { GameState } from '../gameStateStore'
import { RangerDeckOptionsUI } from '../UI/RangerDeckOptionsUI'

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
      <Sheet
        modal
        animation="100ms"
        open={open}
        onOpenChange={onOpenChange}
        snapPoints={[90]}
        disableDrag={true}
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle />
        <Sheet.Frame padding={0} justifyContent="space-between" backgroundColor="$color2">
          <YStack flex={1} padding="$2">
            {/* Header */}
            <Text fontSize="$6" fontWeight="bold" color={`$${color}9`} textAlign="center">
              {title}
            </Text>

            {/* Cards Grid */}
            <YStack flex={1}>
              <ScrollView flex={1} showsVerticalScrollIndicator={false}>
                <XStack flexWrap="wrap" gap="$4" paddingVertical="$4" justifyContent="center" alignItems='center'>
                  {cards.map((card, index) => (
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
                  )).reverse()}
                </XStack>
              </ScrollView>
            </YStack>
          </YStack>

          <XStack padding="$4" width="100%">
            <Button
              flex={1}
              onPress={() => {
                onOpenChange(false)
              }}
            >
              Close
            </Button>
          </XStack>
        </Sheet.Frame>
      </Sheet>

      <RangerDeckOptionsUI type={type} open={openDeck} setOpen={setOpenDeck} />
    </>
  )
}
export default RangerCardSheet
