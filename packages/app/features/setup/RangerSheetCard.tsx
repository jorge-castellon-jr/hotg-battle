import { Text, YStack } from '@my/ui'
import { Ranger } from '../game/GameTypes'
import { rangerColors } from '../game/utils/colors'

interface RangerSheetCardProps {
  ranger: Ranger
  onPress: () => void
}
export function RangerSheetCard({ ranger, onPress }: RangerSheetCardProps) {
  const textColor = (color: string) => (color === 'white' ? 'black' : 'white')
  return (
    <YStack
      flex={1}
      flexBasis="40%"
      backgroundColor={rangerColors[ranger.color]}
      borderRadius="$4"
      padding="$2"
      justifyContent="center"
      onPress={onPress}
    >
      <Text textAlign="center" fontSize="$3" color={textColor(ranger.color)}>
        {ranger.name}
      </Text>
      <Text
        textAlign="center"
        fontSize="$1"
        color={textColor(ranger.color)}
        textTransform="capitalize"
      >
        {ranger.team} {ranger.color}
      </Text>
      <Text textAlign="center" fontSize="$1" fontWeight="bold" color={textColor(ranger.color)}>
        {ranger.ability.name}
      </Text>
    </YStack>
  )
}
