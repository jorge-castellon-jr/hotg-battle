import { useState } from 'react'
import { Text, XStack, YStack, Button, Stack, SizableText } from 'tamagui'
import { Ranger } from '../GameTypes'
import { Layers, ZapOff, Zap, Star, StarOff, Plus, Minus, Badge } from 'lucide-react'
import { rangerColors } from '../utils/colors'
import useGameStore from '../gameStateStore'
import RangerCardSheet from './RangerCardSheet'
import { RangerDrawSheet } from './RangerDrawOptions'
import DiscardIcon from './DiscardIcon'
import { RangerCounterSheet } from './RangerCounterOptions'

interface RangerSheetContentProps {
  ranger: Ranger
  position: 'left' | 'middle' | 'right'
}

const RangerSheetContent = ({ ranger, position }: RangerSheetContentProps) => {
  const [showDeck, setShowDeck] = useState(false)
  const [showDiscard, setShowDiscard] = useState(false)
  const [showDraw, setShowDraw] = useState(false)
  const [showCounter, setShowCounter] = useState(false)
  const toggleEnergy = useGameStore((state) => state.toggleEnergy)
  const toggleAbility = useGameStore((state) => state.toggleAbility)

  const { setupCompleted, openDrawOptions } = useGameStore()

  function openDraw() {
    openDrawOptions()
    setShowDraw(true)
  }

  const CountBox = ({
    icon: Icon,
    value,
    label,
    onPress,
  }: {
    icon: typeof Layers
    value: number
    label: string
    onPress: () => void
  }) => (
    <YStack
      backgroundColor="$gray3"
      borderRadius="$4"
      padding="$3"
      alignItems="center"
      gap="$1"
      flex={1}
      flexBasis="100%"
      pressStyle={{ scale: 0.98 }}
      onPress={onPress}
    >
      <Icon size={24} color={rangerColors[ranger.color]} />
      <Text fontSize="$6" fontWeight="bold" color={rangerColors[ranger.color]}>
        {value}
      </Text>
      <Text fontSize="$2" color="$gray11">
        {label}
      </Text>
    </YStack>
  )

  const StatusToggle = ({
    icon: Icon,
    offIcon: OffIcon,
    isUsed,
    label,
    onToggle,
  }: {
    icon: typeof Zap
    offIcon: typeof ZapOff
    isUsed: boolean
    label: string
    onToggle: () => void
  }) => (
    <Button
      backgroundColor="$gray3"
      borderRadius="$4"
      flex={1}
      flexBasis="100%"
      pressStyle={{
        scale: 0.98,
      }}
      onPress={onToggle}
    >
      {isUsed ? (
        <OffIcon size={24} color="var(--gray8)" />
      ) : (
        <Icon size={24} color={rangerColors[ranger.color]} />
      )}
      <Text fontSize="$3" color={isUsed ? '$gray8' : '$gray11'}>
        {label}
      </Text>
    </Button>
  )

  return (
    <YStack padding="$4" gap="$4">
      {/* Header with Ranger info */}
      <YStack backgroundColor={rangerColors[ranger.color]} padding="$4" borderRadius="$4" gap="$2">
        <Text fontSize="$8" fontWeight="bold" color="white">
          {ranger.name}
        </Text>
        <Text fontSize="$4" color="white" opacity={0.8} textTransform="capitalize">
          {ranger.team} {ranger.color} Ranger
        </Text>
      </YStack>
      {/* Ability Section */}
      <YStack backgroundColor="$gray3" padding="$4" borderRadius="$4" gap="$2">
        <XStack position="absolute" top="$2" right="$3" gap="$2" alignItems="center">
          <Text fontSize="$2">Counter:</Text>
          <XStack
            backgroundColor="$color6"
            width={30}
            height={16}
            justifyContent="center"
            borderRadius="$2"
            alignItems="center"
          >
            <Minus size={16} color={rangerColors[ranger.color]} />
          </XStack>
          <XStack
            backgroundColor="$color6"
            width={30}
            height={16}
            justifyContent="center"
            borderRadius="$2"
            alignItems="center"
          >
            <Plus size={16} color={rangerColors[ranger.color]} />
          </XStack>
        </XStack>
        <Text fontSize="$5" fontWeight="bold" color={rangerColors[ranger.color]}>
          {ranger.ability.name}
        </Text>
        <Text fontSize="$3" color="$gray11">
          {ranger.ability.text}
        </Text>
      </YStack>
      {/* Card Counts */}
      <XStack gap="$4">
        <CountBox
          icon={Layers}
          value={ranger.cards.length}
          label="Deck"
          onPress={() => setShowDeck(true)}
        />
        <CountBox
          icon={DiscardIcon}
          value={ranger.discard.length}
          label="Discard"
          onPress={() => {
            if (!ranger.discard.length) return
            setShowDiscard(true)
          }}
        />
        <CountBox
          icon={Badge}
          value={ranger.counters}
          label="Counters"
          onPress={() => {
            setShowCounter(true)
          }}
        />
      </XStack>
      {/* Status Toggles */}
      <XStack gap="$4">
        <StatusToggle
          icon={Zap}
          offIcon={ZapOff}
          isUsed={ranger.energyUsed}
          label="Energy"
          onToggle={() => toggleEnergy(position)}
        />
        <StatusToggle
          icon={Star}
          offIcon={StarOff}
          isUsed={ranger.abilityUsed}
          label="Ability"
          onToggle={() => toggleAbility(position)}
        />
      </XStack>

      {/* Draw Button */}
      <XStack gap="$4">
        <Button
          flex={1}
          backgroundColor={rangerColors[ranger.color]}
          disabled={ranger.cards.length <= 0 || !setupCompleted}
          disabledStyle={{ opacity: 0.7 }}
          color="white"
          fontWeight="bold"
          onPress={openDraw}
        >
          Draw
        </Button>
      </XStack>

      {/* Card Sheets */}
      <RangerCardSheet
        type="deck"
        open={showDeck}
        onOpenChange={setShowDeck}
        cards={ranger.cards}
        title="Deck"
        color={ranger.color}
      />
      <RangerCardSheet
        type="discard"
        open={showDiscard}
        onOpenChange={setShowDiscard}
        cards={ranger.discard}
        title="Discard Pile"
        color={ranger.color}
      />
      <RangerDrawSheet open={showDraw} setOpen={setShowDraw} />
      <RangerCounterSheet open={showCounter} setOpen={setShowCounter} />
    </YStack>
  )
}

export default RangerSheetContent
