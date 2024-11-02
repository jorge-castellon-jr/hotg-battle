import { Stack, XStack, YStack, Text } from 'tamagui';
import { Heart, Sword } from 'lucide-react';
import { EnemyCard as EnemyCardType } from '../CardTypes';
import { enemyColors } from '../../utils/colors';

interface EnemyCardProps {
  enemy?: EnemyCardType; // Made optional to support empty slots
}

const EnemyCard = ({ enemy }: EnemyCardProps) => {

  // If no enemy, render an empty slot
  if (!enemy) {
    return (
      <Stack
        width={120}
        height={180}
        backgroundColor="$gray3"
        borderRadius="$6"
        borderWidth={2}
        borderColor="$gray6"
        borderStyle="dashed"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$gray8" fontSize="$2">Empty Slot</Text>
      </Stack>
    );
  }

  return (
    <Stack
      width={120}
      height={180}
      backgroundColor="$background"
      borderRadius="$6"
      overflow="hidden"
      borderWidth={2}
      borderColor={enemyColors[enemy.enemyType]}
      pressStyle={{ scale: 0.98 }}
    >
      {/* Card Header */}
      <XStack
        backgroundColor={enemyColors[enemy.enemyType]}
        padding="$2"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="white" fontSize="$3" fontWeight="bold">
          {enemy.name}
        </Text>
      </XStack>

      {/* Enemy Type */}
      <XStack 
        padding="$1" 
        backgroundColor="$gray2"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="$2" color="$gray11" textTransform="capitalize">
          {enemy.type}
        </Text>
      </XStack>

      {/* Stats */}
      <YStack padding="$2" gap="$1">
        <XStack gap="$1" alignItems="center" justifyContent="center">
          <Heart size={16} color={enemyColors[enemy.enemyType]} />
          <Text fontSize="$4" fontWeight="bold">
            {enemy.health}
          </Text>
        </XStack>
        
        {enemy.attack && (
          <XStack gap="$1" alignItems="center" justifyContent="center">
            <Sword size={16} />
            <Text fontSize="$3">
              {enemy.attack.value}
            </Text>
          </XStack>
        )}
      </YStack>

      {/* Description */}
      <YStack flex={1} padding="$2">
        <Text fontSize="$2" textAlign="center" numberOfLines={2}>
          {enemy.text}
        </Text>
      </YStack>

      {/* Footer */}
      <XStack 
        padding="$1"
        backgroundColor="$gray2"
        justifyContent="flex-end"
      >
        <Text fontSize="$1" color="$gray11">
          {enemy.owner}
        </Text>
      </XStack>
    </Stack>
  );
};

export default EnemyCard;
