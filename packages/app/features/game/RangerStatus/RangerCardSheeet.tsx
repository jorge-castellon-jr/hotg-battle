import React from 'react'
import { Sheet, Stack, Text, XStack, YStack, ScrollView, Button } from 'tamagui'
import { RangerCard as RangerCardType } from '../Card/CardTypes'
import RangerCard from '../Card/components/RangerCard'

interface RangerCardSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cards: RangerCardType[]
  title: string
  color: string
}

const RangerCardSheet = ({ open, onOpenChange, cards, title, color }: RangerCardSheetProps) => {
  return (
    <Sheet
      modal
      animation="quick"
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
              <XStack flexWrap="wrap" gap="$4" paddingVertical="$4" justifyContent="center">
                {cards.map((card, index) => ( 
                  <Stack key={`${card.name}-${index}`}>
                    <RangerCard card={card} />
                  </Stack>
                ))}
                {/* Add empty slots if odd number of cards to maintain layout */}
                {cards.length % 2 !== 0 && <Stack width="48%" />}
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
  )
}
export default RangerCardSheet
